import { memo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { imageUrl } from "../api/api";
import Popup from "./Popup";
import { useParams } from "react-router-dom";

const ProfileImage = () => {
  const [open, setOpen] = useState(false);
  const { myProfile } = useAppSelector((state) => state.profileData);
  const {loggedUser} = useAppSelector(state => state.authData)
  const {userId} = useParams()

  const photos = JSON.parse(localStorage.getItem('photos') as string)

  return (
    <div className="relative flex flex-col space-y-2">
      <img
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={typeof myProfile.photos !== 'undefined' && myProfile.photos.small ? myProfile.photos.small : imageUrl}
      />
      {open && <Popup />}
    </div>
  );
};

export default ProfileImage;
