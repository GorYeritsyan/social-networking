import { imageUrl } from "../api/api";
import type { UserDataType } from "../types/types";
import Container from "./Container";

type UserProps = {
  user: UserDataType;
};

const User = ({ user }: UserProps) => {
  return (
    <li
      key={user.id}
      className=" hover:bg-gray-50 flex justify-between gap-x-6 py-5 px-4"
    >
      <Container>
        <div className="flex min-w-[1440px] gap-x-4">
          <img
            alt=""
            src={user.photos.small ? user.photos.small : imageUrl}
            className="cursor-pointer h-12 w-12 flex-none rounded-full bg-gray-50"
          />
          <div className="min-w-0 flex-auto">
            <span className="cursor-pointer text-sm font-semibold leading-6 text-gray-900">
              {user.name}
            </span>
            <p className="mt-1 truncate text-xs leading-5 text-gray-500">
              {user.status ? user.status : "I am a programmer"}
            </p>
          </div>
        </div>
      </Container>
    </li>
  );
};

export default User;
