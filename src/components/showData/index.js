import React from "react";
import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fetchUsersRequest } from "./../../redux/users/userActions";

const ShowData = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userstate);

  console.log(userData);

  useEffect(() => {
    dispatch(fetchUsersRequest());
  }, []);

  return <div>show data .....!</div>;
};

export default ShowData;
