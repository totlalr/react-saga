 export  const fetchUsersRequest = () => {
  return {
    type: "FETCH_USER-REQUEST",
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: "FETCH_USER-SUCCESS",
    payload: users,
  };
};

const fetchUsersFailer = (error) => {
  return {
    type: "FETCH_USER-FAILER",
    payload: error,
  };
};
