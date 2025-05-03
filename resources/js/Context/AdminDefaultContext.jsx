import { createContext, useContext, useState } from "react";

const AdminDefaultContext = createContext();

export function AdminDefaultProvider({children}) {

  const [object, setObject] = useState(null);
  const [isBeingEdited, setIsBeingEdited] = useState(false);
  const [isBeingDeleted, setIsBeingDeleted] = useState(false);
  const [isBeingCreated, setIsBeingCreated] = useState(false);
  
  


  /**
   * dispatch an event to the context
   * @param {string} action
   */
  
  const dispatchContextEvent = (action = "creating") => {
    switch(action) {
      case "creating":
        setIsBeingCreated(true);
        setIsBeingEdited(false);
        setIsBeingDeleted(false);
        setObject(null);
        break;
      case "editing":
        setIsBeingCreated(false);
        setIsBeingEdited(true);
        setIsBeingDeleted(false);
        break;
      case "deleting":
        setIsBeingCreated(false);
        setIsBeingEdited(false);
        setIsBeingDeleted(true);
        break;
      default:  
        setIsBeingCreated(false);
        setIsBeingEdited(false);
        setIsBeingDeleted(false);
        break;
    }
  }




  /**
   * Get the mount state of the object
   * @returns {string|null}
   */
  const getObjectMountState = () => {
    if(isBeingEdited) {
      return "editing";
    } else if(isBeingDeleted) {
      return "deleting";
    } else if(isBeingCreated) {
      return "creating";
    } else {
      return null;
    }
  }





  /**
   * Get the dispatch state of the side bar
   * @returns {boolean}
   */
  const getSideBarDispatchState = () => {
    if(isBeingCreated || isBeingEdited || isBeingDeleted) {
      return true
    }

    return false
  }




  /**
   * Dispatch an event to the side bar
   */
  const dispatchSideBarState = () => {
      dispatchContextEvent(null)
  }



  return (
    <AdminDefaultContext.Provider
      value={{
          object,
          setObject,
          dispatchContextEvent,
          isBeingEdited,
          isBeingDeleted,
          isBeingCreated,
          getObjectMountState,
          getSideBarDispatchState,
          dispatchSideBarState,
      }}
    >
      {children}
    </AdminDefaultContext.Provider>

  );
}

export const useAdminDefaultContext = () => useContext(AdminDefaultContext);