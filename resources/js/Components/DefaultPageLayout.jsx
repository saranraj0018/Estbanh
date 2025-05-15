import { Head } from "@inertiajs/react";
import Filters from "./Shared/Filters";
import { useAdminDefaultContext } from "@/Context/AdminDefaultContext";
import DefaultSideBar from "./Shared/DefaultSideBar";

const DefaultPageLayout = ({
    title,
    children,
    form,
    reset,
    sideBarWidth = "320px",
}) => {
    const {
        getObjectMountState,
        dispatchContextEvent,
        getSideBarDispatchState,
        dispatchSideBarState,
    } = useAdminDefaultContext();

    return (
        <>
            <Head title={title} />
            <Filters
                title={title}
                showCreateButton={getObjectMountState() == null ? true : false}
                toggleCreateBar={() => {
                    dispatchContextEvent("creating");
                    reset();
                }}
            />

            <div className="flex gap-2 w-full overflow-hidden">
                <div
                    className={`${
                        false ? "pointer-events-none select-none" : ""
                    }`}
                    style={{ width: `100%` }}
                >
                    {children}
                </div>

                {getSideBarDispatchState() && (
                    <DefaultSideBar
                        width={sideBarWidth}
                        dispatchSideBarState={dispatchSideBarState}
                        header={
                            (getObjectMountState() == "creating"
                                ? "Create"
                                : getObjectMountState() == "editing"
                                ? "Edit"
                                : "Delete") +
                            " " +
                            title
                        }
                    >
                        {form && form}
                    </DefaultSideBar>
                )}
            </div>
        </>
    );
};

export default DefaultPageLayout;
