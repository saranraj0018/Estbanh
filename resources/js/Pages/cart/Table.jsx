const DeleteIcon = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
    >
        <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.40231 7.06488L8.19236 20.344C8.20426 20.5419 8.29123 20.7278 8.43551 20.8638C8.5798 20.9998 8.77054 21.0756 8.9688 21.0757H16.0053C16.2036 21.0756 16.3943 20.9998 16.5386 20.8638C16.6829 20.7278 16.7699 20.5419 16.7818 20.344L17.5718 7.06488H7.40231ZM18.7423 7.06488L17.9474 20.4131C17.9179 20.9082 17.7004 21.3733 17.3395 21.7135C16.9785 22.0537 16.5013 22.2431 16.0053 22.2433H8.9688C8.47282 22.2431 7.9956 22.0537 7.63465 21.7135C7.2737 21.3733 7.05625 20.9082 7.02674 20.4131L6.23182 7.06488H4.2168V6.3838C4.2168 6.25478 4.26805 6.13104 4.35929 6.0398C4.45052 5.94857 4.57426 5.89732 4.70328 5.89732H20.2709C20.3999 5.89732 20.5236 5.94857 20.6148 6.0398C20.7061 6.13104 20.7573 6.25478 20.7573 6.3838V7.06488H18.7423ZM14.433 3.75677C14.562 3.75677 14.6858 3.80803 14.777 3.89926C14.8682 3.9905 14.9195 4.11424 14.9195 4.24326V4.92434H10.0546V4.24326C10.0546 4.11424 10.1059 3.9905 10.1971 3.89926C10.2884 3.80803 10.4121 3.75677 10.5411 3.75677H14.433ZM10.0546 9.59461H11.2222L11.7087 18.3514H10.5411L10.0546 9.59461ZM13.7519 9.59461H14.9195L14.433 18.3514H13.2654L13.7519 9.59461Z"
            fill="black"
        />
    </svg>
);
const Table = ({ CartData }) => {
    return (
        <div className="overflow-x-auto mt-6">
            <div className="w-max">
                <table className="max-w-full table-auto">
                    <thead className="bg-secondary">
                        <tr className="text-left text-sm text-black">
                            <th className="p-3 border">S.No</th>
                            <th className="p-3 border">Name</th>
                            <th className="p-3 border">Code</th>
                            <th className="p-3 border">Price</th>
                            <th className="p-3 border">Lead Time</th>
                            <th className="p-3 border">Warranty</th>
                            <th className="p-3 border">Reference</th>
                            <th className="p-3 border">Weight</th>
                            <th className="p-3 border">Qty</th>
                            <th className="p-3 border">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CartData.map((item, index) => (
                            <tr key={index} className="text-sm text-gray-700">
                                <td className="p-3 border">{index + 1}.</td>
                                <td className="p-3 border">
                                    {item.ProductName}
                                </td>
                                <td className="p-3 border">
                                    {item.ProductCode}
                                </td>
                                <td className="p-3 border">
                                    {item.ProductPrice}
                                </td>
                                <td className="p-3 border">
                                    {item.ProductTradeData}
                                </td>
                                <td className="p-3 border">{item.Warranty}</td>
                                <td className="p-3 border">{item.Reference}</td>
                                <td className="p-3 border">{item.Weight}</td>
                                <td className="p-3 border">
                                    <div className="flex space-x-2 justify-end">
                                        <button className="px-2 md:px-2 rounded-md text-primary border-[1px] border-primary text-lg md:text-xl">
                                            -
                                        </button>
                                        <p className="text-primary text-lg font-medium border-b-[1px] border-[#8996A7] px-2">
                                            1
                                        </p>
                                        <button className="px-2 md:px-2 rounded-md text-white bg-primary text-lg md:text-xl">
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="p-3 border">
                                    <div className="bg-[#FFEEC6] p-1 rounded-full w-min h-min">
                                        {DeleteIcon}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Table;
