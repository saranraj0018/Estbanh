import { useAdminDefaultContext } from "@/Context/AdminDefaultContext";


const ActionButtons = ({ object, data, setData }) => {


   const { dispatchContextEvent, setObject } = useAdminDefaultContext();
    

   const createObjectUpdatedAction = (object) => {
       dispatchContextEvent("editing");
       Object.entries(object).map(([key, value]) => {
           if (data.hasOwnProperty(key)) {
               setData(key, value);
           }
       });
   };


  return (
    <div className="flex gap-2 items-center">
    <button
        className="text-blue-600 font-main"
        onClick={() => {
            setObject(object)
            createObjectUpdatedAction(object)
        }}
    >
        Edit
    </button>
    <button
        className="text-red-500 font-main"
        onClick={() => {
            setObject(object)
            dispatchContextEvent("deleting")
        }}
    >
        Delete
    </button>
</div>
  )
}

export default ActionButtons