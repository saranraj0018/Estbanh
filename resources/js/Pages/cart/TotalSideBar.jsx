const TotalSideBar = ({ TotalSideBarData }) => {
    return (
        <>
            <div className="grid grid-cols-10 gap-3">
                <div className="col-span-7">
                    <p className="text-md font-medium font-primary">Total</p>
                </div>
                <div className="col-span-3">
                    <p className="text-md font-primary text-end">
                        {TotalSideBarData.Total}
                    </p>
                </div>
                <div className="col-span-7">
                    <p className="text-md font-medium font-primary">
                        Sub Total
                    </p>
                </div>
                <div className="col-span-3">
                    <p className="text-md font-primary text-end">
                        {TotalSideBarData.SubTotal}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-10 gap-3 my-5">
                <div className="col-span-7">
                    <p className="text-md font-medium font-primary">Shipping</p>
                </div>
                <div className="col-span-3">
                    <p className="text-md font-primary text-end">
                        {TotalSideBarData.Shipping}
                    </p>
                </div>
                <div className="col-span-7">
                    <p className="text-md font-medium font-primary">
                        Est. Total Weight
                    </p>
                </div>
                <div className="col-span-3">
                    <p className="text-md text-end font-primary">
                        {TotalSideBarData.TotalWeight}
                    </p>
                </div>
            </div>
            <hr />
            <div className="grid grid-cols-10 gap-3 my-5">
                <div className="col-span-7">
                    <p className="text-xl font-medium font-primary">
                        Est. Total
                    </p>
                </div>
                <div className="col-span-3">
                    <p className="text-lg font-medium font-primary text-end">
                        {TotalSideBarData.EstTotal}
                    </p>
                </div>
            </div>
        </>
    );
};

export default TotalSideBar;
