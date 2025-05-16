export default function ProductInvoice({ data }) {
    const { name, part_number, description, features, image, images } = data;

    return (
        <div className="w-[500px] bg-white border border-gray-200 rounded-xl shadow-sm p-5 text-sm text-gray-800 font-sans space-y-6">
        
            <div className="flex items-start gap-6">
                {/* Left Side: Details */}
                <div className="flex-1 space-y-4">
                    <div>
                        <div className="text-xs text-gray-500 mb-1">Product Name</div>
                        <div className="font-medium">{name}</div>
                    </div>

                    <div>
                        <div className="text-xs text-gray-500 mb-1">Part Number</div>
                        <div>{part_number}</div>
                    </div>

                    <div>
                        <div className="text-xs text-gray-500 mb-1">Description</div>
                        <div className="text-gray-700">{description}</div>
                    </div>

                    {/* Attributes Section */}
                    {features?.length > 0 && (
                        <div>
                            <div className="text-xs text-gray-500 mb-2">Attributes & Variants</div>
                            <div className="space-y-4">
                                {features.map((attr, i) => (
                                    <div key={i} className="bg-gray-50 border rounded p-3 space-y-2">
                                        <div className="font-medium text-sm">{attr.name}</div>
                                        {attr.variants?.map((variant, vi) => (
                                            <div key={vi} className="text-xs grid grid-cols-2 gap-x-4 gap-y-1 text-gray-700">
                                                <div><span className="font-semibold">Variant:</span> {variant.varient}</div>
                                                <div><span className="font-semibold">Weight:</span> {variant.weight}g</div>
                                                <div><span className="font-semibold">Sale Price:</span> ₹{variant.sale_price}</div>
                                                <div><span className="font-semibold">Regular Price:</span> ₹{variant.regular_price}</div>
                                                <div className="col-span-2"><span className="font-semibold">Description:</span> {variant.description}</div>
                                                <div><span className="font-semibold">Length:</span> {variant.length} cm</div>
                                                <div><span className="font-semibold">Width:</span> {variant.width} cm</div>
                                                <div><span className="font-semibold">Height:</span> {variant.height} cm</div>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Right Side: Images */}
                <div className="flex flex-col items-end space-y-4 min-w-[140px]">
                    {image && (
                        <img
                            src={
                                image instanceof File
                                ? URL.createObjectURL(image)
                                : typeof image === 'string'
                                ? image
                                : ''
                            }
                            alt="Main"
                            className="w-24 h-24 object-cover rounded border shadow-sm"
                        />
                    )}

                    {images?.length > 0 && (
                        <div className="flex flex-wrap gap-2 justify-end">
                            {images.map((img, i) => (
                                <img
                                    key={i}
                                    src={
                                        img instanceof File
                                            ? URL.createObjectURL(img)
                                            : typeof img === 'string'
                                            ? img
                                            : ''
                                    }
                                    alt={`Gallery ${i}`}
                                    className="w-14 h-14 object-cover rounded border shadow-sm"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
