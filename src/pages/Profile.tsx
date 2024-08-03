import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchProfile } from "../store/slices/profileSlice";

const Profile = () => {
  const { userId } = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, []);

  const { myProfile } = useAppSelector((state) => state.profileData);
  console.log(myProfile);

  return (
    <div className="flex space-x-10">
      <div>
        <img
          className="flex w-15 h-15 rounded-full"
          src={myProfile?.photos.small}
          alt=""
        />
      </div>
      <div className="flex flex-col ">
        <h2>{myProfile?.fullName}</h2>
        <p>{myProfile?.aboutMe}</p>
      </div>
    </div>
  );
};

export default Profile;
