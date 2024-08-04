import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { imageUrl } from "../api/api";
import Popup from "./Popup";
import { useEffect, useState } from "react";
import { fetchProfile } from "../store/slices/profileSlice";

const ProfileImage = () => {
  // const { loggedUser } = useAppSelector((state) => state.authData);
  // const dispatch = useAppDispatch()

  // useEffect(() => {
  //   dispatch(fetchProfile(`${loggedUser.id}`))
  // }, [])

  const { myProfile } = useAppSelector((state) => state.profileData);
  const [open, setOpen] = useState(false)
  return (
    // <NavLink to={`/profile/${id}`}>
      <div className="relative flex flex-col space-y-2">
        <img
         onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full cursor-pointer"
          src={myProfile?.photos.small ? myProfile?.photos.small : imageUrl}
        />
       {open && <Popup />}
      </div>
    // </NavLink>
  );
};

export default ProfileImage;
