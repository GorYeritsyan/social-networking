import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { fetchUsers } from "../store/slices/usersSlice";
import User from "../components/User";
import Container from "../components/Container";

const Home = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const { users } = useAppSelector((state) => state.usersData);
  return (
     <div className="flex flex-col gap-y-5">
        <h1 className="ml-10 mt-5">Users</h1>
       <ul className="divide-y divide-gray-100">
        {users?.map((user) => (
          <User user={user} />
        ))}
      </ul>
     </div>
  );
};

export default Home;
