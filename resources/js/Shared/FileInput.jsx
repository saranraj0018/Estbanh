import { useURIPathSegment } from "@/Hooks/useURIPathSegment";
import { useEffect, useRef, useState } from "react";

export default function FileInput({ className = "", onChange, url }) {
    const inputRef = useRef(null);
    const [fileName, setFileName] = useState("");
    const [previewSrc, setPreviewSrc] = useState(null);

    useEffect(() => {
        if (url) {
            if (typeof url === "string" && url.trim() !== "") {
                const { lastSegment } = useURIPathSegment(url);
                setFileName(lastSegment);
                setPreviewSrc(url);
            }

            if (typeof url == "object") {
                setFileName(url.name);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewSrc(reader.result);
                };
                reader.readAsDataURL(url);
            }
        }
    }, [url]);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setFileName(file.name);
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewSrc(reader.result);
        };
        reader.readAsDataURL(file);

        onChange?.(e);
    };

    const triggerFileSelect = () => {
        inputRef.current.click();
    };

    const removeImage = () => {
        setFileName("");
        setPreviewSrc(null);
        if (inputRef.current) {
            inputRef.current.value = ""; // Reset the file input too
        }
        onChange?.({ target: { files: [] } }); // send an empty files array if parent is listening
    };

    return (
        <div className="mt-2">
            <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*"
            />

            <div
                onClick={!previewSrc ? triggerFileSelect : undefined}
                className={`w-full border-1 border-dashed rounded-lg cursor-pointer p-6 text-center transition-all  ${
                    previewSrc
                        ? "border-gray-300 "
                        : "border-gray-200 hover:border-indigo-900 "
                } ${className}`}
            >
                {previewSrc ? (
                    <div className="relative">
                        <img
                            src={previewSrc}
                            alt="Preview"
                            className="mx-auto w-56 max-h-60 object-contain rounded-md shadow-md"
                        />
                        <button
                            type="button"
                            onClick={removeImage}
                            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-xs rounded-full p-1 shadow-md transition-all"
                        >
                            ✕
                        </button>
                        <p className="mt-2 w-56 text-[13px] font-main font-light text-gray-700 text-left overflow-hidden">
                            <span className="font-medium block w-full truncate">
                                {fileName}
                            </span>
                        </p>
                    </div>
                ) : (
                    <p className="text-[13px] font-main font-light text-gray-700">
                        Click to upload an image
                    </p>
                )}
            </div>
        </div>
    );
}
