import { Head } from "@inertiajs/react";
import Filters from "../shared/Filters";
import { useAdminDefaultContext } from "@/lib/context/AdminDefaultContext";
import DefaultSideBar from "../shared/DefaultSideBar";
import Modal from "@/shared/Modal";

const DefaultPageLayout = ({
    title,
    children,
    form,
    reset,
    sideBarWidth = "2xl",
    deleteModalWidth = "lg"
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
                    // <DefaultSideBar
                    //     width={sideBarWidth}
                    //     dispatchSideBarState={dispatchSideBarState}
                    //     header={
                    //         (getObjectMountState() == "creating"
                    //             ? "Create"
                    //             : getObjectMountState() == "editing"
                    //             ? "Edit"
                    //             : "Delete") +
                    //         " " +
                    //         title
                    //     }
                    // >

                    // </DefaultSideBar>

                    <Modal
                        show={getSideBarDispatchState()}
                        onClose={dispatchSideBarState}
                        closeable={false}
                        maxWidth={getObjectMountState() == "deleting" ?  deleteModalWidth : sideBarWidth}
                    >
                        <div className="p-5">
                            {(getObjectMountState() == "creating" ||
                                getObjectMountState() == "editing") ? (
                                    <h2 className="text-lg font-bold text-gray-900 mb-5">
                                        {getObjectMountState() == "creating"
                                            ? "Create " + title
                                            : getObjectMountState() == "editing"
                                            ? "Edit " + title
                                            : ""}
                                    </h2>
                                ) : null}

                            <div className="overflow-scroll max-h-[80vh] p-3">
                                {form && form}
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        </>
    );
};

export default DefaultPageLayout;
