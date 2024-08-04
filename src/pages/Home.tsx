import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { addMoreUsers, fetchUsers } from "../store/slices/usersSlice";
import User from "../components/User";

const Home = () => {
  const dispatch = useAppDispatch();
  const { users, page } = useAppSelector((state) => state.usersData);
  useEffect(() => {
    dispatch(fetchUsers(page));
  }, [page]);


  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="ml-10 mt-5">Users</h1>
      <ul className="divide-y divide-gray-100">
        {users?.map((user) => (
          <User key={user.id} user={user} />
        ))}
      </ul>
      <button onClick={() => dispatch(addMoreUsers())} className="bg-gray-100">
        More
      </button>
    </div>
  );
};

export default Home;
