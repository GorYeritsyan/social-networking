import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchProfile } from "../store/slices/profileSlice";
import { imageUrl } from "../api/api";

const Profile = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, [userId]);

  const { myProfile } = useAppSelector((state) => state.profileData);
  console.log(myProfile);

  return (
    <div className="flex space-x-10">
      <div>
        <img
          className="flex w-15 h-15 rounded-full"
          src={myProfile?.photos.small ? myProfile.photos.large : imageUrl}
        />
      </div>
      <div className="flex flex-col ">
        <h2 className="text-2xl font-semibold">{myProfile?.fullName}</h2>
        <p>{myProfile?.aboutMe ? myProfile.aboutMe : 'Lorem lfasdjlkfjsdklfjdslkfsdj'}</p>
      </div>
    </div>
  );
};

export default Profile;
