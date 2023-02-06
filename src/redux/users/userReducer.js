const intialState = {
  loading: false,
  users: [],
  error: "",
};

const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case "FETCH_USER-REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "FETCH_USER-SUCCESS":
      return {
        loading: false,
        users: action.payload,
      };

    case "FETCH_USER-FAILER":
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
