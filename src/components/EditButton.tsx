import { useParams } from "react-router-dom";
import { useAppSelector } from "../hooks/hooks";

const EditButton = () => {
    const {loggedUser} = useAppSelector(state => state.authData)
    const {userId} = useParams()
    
  return (
    <>
      {typeof userId === "string" && loggedUser.id === +userId && (
        <button className="w-20  rounded-md bg-indigo-600 px-3 py-2 text-ls font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
          Edit
        </button>
      )}
    </>
  );
};

export default EditButton;
