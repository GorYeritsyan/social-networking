import { Link, NavLink, useNavigate } from "react-router-dom";
import Button from "./Button";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { authMe } from "../store/slices/authSlice";
import { fetchProfile } from "../store/slices/profileSlice";
import { imageUrl } from "../api/api";

const Header = () => {
  const navigate = useNavigate();
  const { id, login } = useAppSelector((state) => state.authData);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProfile(`${id}`));
    navigate("/");
  }, [id]);

  const { myProfile } = useAppSelector((state) => state.profileData);
  return (
    <header className="flex items-center justify-around py-3 bg-gray-900 shadow-sm">
      <h1 className="text-white cursor-pointer">
        <Link to="/">Social Network</Link>
      </h1>

      {(!login) && (
        <Link to="/login" className="text-white">
          <button>Sign In</button>
        </Link>
      )}

      {(login) && (
        <NavLink to={`/profile/${id}`}>
          <img
            className="w-10 h-10 rounded-full"
            src={myProfile?.photos.small ? myProfile?.photos.small : imageUrl}
          />
        </NavLink>
      )}
    </header>
  );
};

export default Header;
