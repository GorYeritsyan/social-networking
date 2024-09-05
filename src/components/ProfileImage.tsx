import { NavLink } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { imageUrl } from "../api/api";
import Popup from "./Popup";
import { useState } from "react";

const ProfileImage = () => {
  const [open, setOpen] = useState(false)
  const {myProfile} = useAppSelector(state => state.profileData)
  const newPhotos = JSON.parse(localStorage.getItem('photos'))


  return (
      <div className="relative flex flex-col space-y-2">
        <img
         onClick={() => setOpen(!open)}
          className="w-10 h-10 rounded-full cursor-pointer"
          src={(typeof newPhotos !== 'undefined') && newPhotos.small ? newPhotos.small : imageUrl}
        />
       {open && <Popup />}
      </div>
  );
};

export default ProfileImage;
