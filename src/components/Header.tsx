import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { imageUrl } from "../api/api";
import { useEffect } from "react";
import { fetchProfile } from "../store/slices/profileSlice";
import ProfileImage from "./ProfileImage";
import { fetchAuthMe, fetchLogout } from "../store/slices/authSlice";

const Header = () => {
  const {loggedUser} = useAppSelector(state => state.authData)
  const {myProfile} = useAppSelector(state => state.profileData)

  const dispatch = useAppDispatch()
  const token = localStorage.getItem('token')
  useEffect(() => {
    dispatch(fetchAuthMe(token))
  }, [token])
  
  useEffect(() => {
    if(loggedUser.id){
      dispatch(fetchProfile(`${loggedUser?.id}`))
    }
  }, [loggedUser?.id])

  return (
    <header className="flex items-center justify-around py-3 bg-gray-900 shadow-sm">
      <h1 className="text-white cursor-pointer">
        <Link to="/">Social Network</Link>
      </h1>

      {loggedUser?.login ? (
        <ProfileImage />
       ) : ( 
        <Link to="/login" className="text-white">
          <button>Sign In</button>
        </Link>
       )} 
    </header>
  );
};

export default Header;
