export type UsersInitState = {
  users: UserDataType[];
  page: number
};

export type UserPhoto = {
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


// Profile

export type ProfileResponseType = {
  aboutMe: string;
  contacts: ContactsStateType<string | null>;
  lookingForAJob: boolean;
  lookingForAJobDescription: string;
  fullName: string;
  userId: number;
  photos: UserPhoto;
};

export type ContactsStateType<T> = {
  facebook: T;
  website: T;
  vk: T;
  twitter: T;
  instagram: T;
  youtube: T;
  github: T;
  mainLink: T;
};


//login type

export type LoginType = {
  email: string;
  password: string;
}


export type LoginResponseDataType = {
  userId: number;
};

export type AuthMeDataType = {
  id: number;
  email: string;
  login: string;
};