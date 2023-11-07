import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import UserList from "./components/UserList";
import { useDispatch } from "react-redux";
import { fetchAllUsers } from "./redux/slices/users/user";

const App = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchAllUsers());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <UserList />
    </>
  );
};

export default App;
