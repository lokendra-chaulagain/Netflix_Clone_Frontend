import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const loginCall = async (userCredentials, dispatch) => {
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredentials);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    await new Promise((resolve) => setTimeout(resolve, 300)); //wait 0.3 sec
    toast.success("Login Successful", { theme: "colored" });
  } catch (error) {
    dispatch({ type: "LOGIN_FAILURE" });
  }
};
