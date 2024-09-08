import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchLogout } from "../store/slices/authSlice";

const Popup = () => {
  const dispatch = useAppDispatch();
  const { loggedUser } = useAppSelector((state) => state.authData);

  function logoutProfile() {
    dispatch(fetchLogout());
  }

  return (
    <div className="absolute top-10 shadow-md w-28 h-fit py-3 pl-2 rounded bg-white">
      <ul className="flex flex-col space-y-3">
        <li>
          <NavLink to={`/profile/${loggedUser.id}`}>Profile</NavLink>
        </li>
        <li onClick={logoutProfile}>
          <NavLink to={`/login`}>Logout</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Popup;
