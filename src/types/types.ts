export type UsersInitState = {
  users: UserDataType[] | null;
};

type UserPhoto = {
  small: string;
  large: string;
};

export type UserDataType = {
  name: string;
  id: number;
  photos: UserPhoto;
  status: string | null;
  followed: boolean;
};

export type UsersResponse = {
  items: UserDataType[];
  totalCount: number;
  error: string | null;
};
