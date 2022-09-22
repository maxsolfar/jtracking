import React, { useReducer, useContext } from "react";
import axios from "axios";
import { mainReducer } from "./reducers";
import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
} from "./actions";

//checking if user exist in localStorage
const user = localStorage.getItem("user");
const token = localStorage.getItem("token");
const userLocation = localStorage.getItem("location");

export const initialState = {
  isLoading: false,
  showAlert: false,
  alertText: "",
  alertType: "",
  user: user ? JSON.parse(user) : null,
  token: token || null,
  userLocation: userLocation || "",
  jobLocation: userLocation || ""
};

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const displayAlert = () => {
    dispatch({ type: DISPLAY_ALERT });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: CLEAR_ALERT });
    }, 2200);
  };

    const registerUser = async (currentUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post("http://localhost:5000/api/v1/auth/register", currentUser);
      const { user, token, location } = response.data;
      dispatch({
        type:REGISTER_USER_SUCCESS,
        payload: {user, token, location}
      });
      addUserToLocalStorage({user, token, location});
    } catch (error) {
      dispatch({ 
        type: REGISTER_USER_ERROR,
        payload: { msg: error.response.data.msg }
      });
    }
    clearAlert();
  };

  const addUserToLocalStorage = ({ user, token, location }) => {
    localStorage.setItem("user", JSON.stringify(user));
    localStorage.setItem("token", token);
    localStorage.setItem("location", location);
  };

  const removeUserFromLocalStorage = () => {
    localStorage.removeItem("user");
    localStorage.setItem("token");
    localStorage.setItem("location");
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider };
