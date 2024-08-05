import { NavLink, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect } from "react";
import { fetchProfile } from "../store/slices/profileSlice";
import { imageUrl } from "../api/api";
import EditButton from "../components/EditButton";

const Profile = () => {
  const dispatch = useAppDispatch();
  const { userId } = useParams();

  useEffect(() => {
    dispatch(fetchProfile(userId));
  }, [userId]);

  const { myProfile } = useAppSelector((state) => state.profileData);
  console.log(myProfile);


  return (
    <div className="container py-10 flex flex-col space-y-10">
      <div className="flex space-x-24">
        <div>
          <img
            className="flex w-36 h-36 rounded-full"
            src={(typeof myProfile.photos !== 'undefined') && myProfile?.photos.small ? myProfile.photos.large : imageUrl}
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-semibold">{myProfile?.fullName}</h2>
          <p className="text-lg font-medium">
            About Me:{" "}
            <span className="font-normal">
              {myProfile?.aboutMe
                ? myProfile.aboutMe
                : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore odit alias amet ipsa modi nam?"}
            </span>
          </p>
          <p className="text-lg font-medium">
            Looking for a job:{" "}
            <span className="font-normal">
              {myProfile?.lookingForAJob ? "Yes" : "No"}
            </span>
          </p>
          <p className="text-lg font-medium">
            Job description:{" "}
            <span className="font-normal">
              {myProfile?.lookingForAJobDescription
                ? myProfile?.lookingForAJobDescription
                : "No"}
            </span>
          </p>
        </div>
      </div>

      <NavLink to={`/profile/edit`}>
        <EditButton />
      </NavLink>
    </div>
  );
};

export default Profile;
