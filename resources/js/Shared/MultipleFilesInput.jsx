import { useRef, useState, useEffect } from "react";
import { useURIPathSegment } from "@/Hooks/useURIPathSegment";

export default function FileInput({ className = "", onChange, urls = [] }) {
    const inputRef = useRef(null);
    const [filesData, setFilesData] = useState([]);

    useEffect(() => {
        const init = async () => {
            const processed = await Promise.all(
                urls.map(async (url) => {
                    if (typeof url === "string") {
                        const { lastSegment } = useURIPathSegment(url);
                        return { name: lastSegment, src: url, file: null };
                    } else if (url instanceof File) {
                        const reader = new FileReader();
                        const result = await new Promise((res) => {
                            reader.onloadend = () => res(reader.result);
                            reader.readAsDataURL(url);
                        });
                        return { name: url.name, src: result, file: url };
                    }
                })
            );
            setFilesData(processed);
        };
        if (urls.length) init();
    }, [urls]);

    const handleFileChange = async (e) => {
        const selected = Array.from(e.target.files || []);
        if (!selected.length) return;

        const processed = await Promise.all(
            selected.map((file) => {
                return new Promise((res) => {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        res({ name: file.name, src: reader.result, file });
                    };
                    reader.readAsDataURL(file);
                });
            })
        );

        const updated = [...filesData, ...processed];
        setFilesData(updated);
        onChange?.(updated.map((f) => f.file));
    };

    const triggerFileSelect = () => inputRef.current?.click();

    const removeImage = (index) => {
        const updated = filesData.filter((_, i) => i !== index);
        setFilesData(updated);
        onChange?.(updated.map((f) => f.file));
    };

    return (
        <div className={`mt-2 ${className}`}>
            <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                className="hidden"
                accept="image/*,application/pdf"
                multiple
            />

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-2 w-full">
            {filesData.map((file, index) => (
                    <div
                        key={index}
                        className="relative group rounded-md overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
                    >
                        <img
                            src={file.src}
                            alt={file.name}
                            className="w-full h-36 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-[12px] px-2 py-1 opacity-0 group-hover:opacity-100 transition truncate">
                            {file.name}
                        </div>
                        <button
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                removeImage(index);
                            }}
                            className="absolute top-1.5 right-1.5 bg-red-500 hover:bg-red-600 text-white text-xs rounded-full p-1 shadow"
                        >
                            ✕
                        </button>
                    </div>
                ))}

                <div
                    onClick={triggerFileSelect}
                    className="flex flex-col items-center justify-center border-2 border-dashed border-indigo-400 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-all h-36"
                >
                    <span className="text-indigo-600 font-medium text-sm">
                        + Upload
                    </span>
                    {/* <span className="text-xs text-gray-500 mt-1">
                        JPG, PNG, GIF up to 5MB
                    </span> */}
                </div>



            </div>
        </div>
    );

}
