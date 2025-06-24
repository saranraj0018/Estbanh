export default function ProductInvoice({ data }) {
    const {
        name,
        part_number,
        description,
        features,
        image,
        images,
        detail,
    } = data;

    return (
        <div className="w-full bg-white border border-gray-200 rounded-xl shadow p-8 text-gray-800 font-sans text-sm">
            {/* Header */}
            <div className="flex justify-between items-start border-b pb-4 mb-6">
                <div>
                    <h1 className="text-xl font-semibold">Product Invoice</h1>
                    <p className="text-xs text-gray-500">Preview of product information and specifications</p>
                </div>
                {image && (
                    <img
                        src={
                            image instanceof File
                                ? URL.createObjectURL(image)
                                : typeof image === 'string'
                                ? image
                                : ''
                        }
                        alt="Main Product"
                        className="w-24 h-24 object-cover rounded border shadow-sm"
                    />
                )}
            </div>

            {/* Product Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div className="mb-4">
                        <p className="text-xs text-gray-500">Product Name</p>
                        <p className="font-medium text-base">{name}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-xs text-gray-500">Part Number</p>
                        <p className="text-base">{part_number}</p>
                    </div>
                    <div className="mb-4">
                        <p className="text-xs text-gray-500">Description</p>
                        <p className="text-sm text-gray-700">{description}</p>
                    </div>
                    {detail?.product_details ? detail?.product_details?.length > 0 && (
                        <div className="mb-4">
                            <p className="text-xs text-gray-500 mb-2">Additional Product Details</p>
                            <table className="w-full text-xs border border-gray-200 rounded overflow-hidden">
                                <thead className="bg-gray-100 text-left">
                                    <tr>
                                        <th className="p-2 font-medium">Name</th>
                                        <th className="p-2 font-medium">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {detail?.product_details.map((detail, i) => (
                                        <tr key={i} className="border-t border-gray-200">
                                            <td className="p-2 text-gray-700">{detail.name}</td>
                                            <td className="p-2 text-gray-600">{detail.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ): null}
                </div>

                {/* Features */}
                {features?.length > 0 && (
                    <div>
                        <p className="text-xs text-gray-500 mb-2">Attributes & Variants</p>
                        <div className="space-y-4">
                            {features.map((attr, i) => (
                                <div key={i} className="border rounded p-4 bg-gray-50">
                                    <p className="font-medium text-sm mb-2">{attr.name}</p>
                                    <div className="space-y-2">
                                        {attr.variants?.map((variant, vi) => (
                                            <div key={vi} className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-700">
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
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

            {/* Image Gallery */}
            {images?.length > 0 && (
                <div className="mt-10">
                    <p className="text-xs text-gray-500 mb-2">Gallery Images</p>
                    <div className="flex flex-wrap gap-3">
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
                                className="w-20 h-20 object-cover rounded border shadow-sm"
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}