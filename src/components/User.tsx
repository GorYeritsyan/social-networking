import { NavLink } from "react-router-dom";
import { imageUrl } from "../api/api";
import type { UserDataType } from "../types/types";

type UserProps = {
  user: UserDataType;
};

const User = ({ user }: UserProps) => {
  return (
    <li
      key={user.id}
      className=" hover:bg-gray-100 flex justify-between gap-x-6 py-5 px-4"
    >
      <div className="container">
        <div className="flex min-w-[1440px] gap-x-4">
          <NavLink to={`/profile/${user.id}`}>
            <img
              src={user.photos.small ? user.photos.small : imageUrl}
              className="cursor-pointer h-12 w-12 flex-none rounded-full bg-gray-50"
            />
          </NavLink>
          <div className="min-w-0 flex-auto">
            <NavLink to={`/profile/${user.id}`}>
              <span className="cursor-pointer text-sm font-semibold leading-6 text-gray-900">
                {user.name}
              </span>
            </NavLink>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {user.status ? user.status : "I am a programmer"}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default User;
