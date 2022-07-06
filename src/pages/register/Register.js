import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import React, { useContext } from "react";
import { registerSchema } from "./formikValidation";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./register.scss";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../context/authContext/AuthContext";
const { useFormik } = require("formik");

function Register() {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = async (values, actions) => {
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/register", {
        username: values.username,
        email: values.email,
        password: values.password,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      actions.resetForm();
      navigate("/");
      toast.success("Login Successful", { theme: "colored" });
    } catch (error) {
      toast.error(error.response.data.message, { theme: "colored" });
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <div className="registerPage">
      <div className="registerTopRow">
        <img
          className="registerPageTopRowLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </div>

      <div className="registerCenterCon">
        <form className="rp-loginContainer" onSubmit={handleSubmit}>
          <span className="registerPageTxt2">Register</span>
          <span className="registerSpan2">
            Unlimited movies, TV shows, and more.Enter your email to create or
            restart your membership.
          </span>

          <div className="rp-loginInputCon">
            <div className="iconAndInputCon">
              <div className="rp-inputIconCon">
                <PersonOutlinedIcon className="rp-Input-icon" />
              </div>
              <input
                type="text"
                id="username"
                placeholder="Full Name"
                value={values.username}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.username && touched.username
                    ? "input-error"
                    : "registerInputs"
                }
              />
            </div>
            {errors.username && touched.username && (
              <p className="error">{errors.username}</p>
            )}
          </div>

          <div className="rp-loginInputCon">
            <div className="iconAndInputCon">
              <div className="rp-inputIconCon">
                <MailOutlinedIcon className="rp-Input-icon" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                value={values.email}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.email && touched.email
                    ? "input-error"
                    : "registerInputs"
                }
              />
            </div>
            {errors.email && touched.email && (
              <p className="error">{errors.email}</p>
            )}
          </div>

          <div className="rp-loginInputCon">
            <div className="iconAndInputCon">
              <div className="rp-inputIconCon">
                <KeyOutlinedIcon className="rp-Input-icon" />
              </div>
              <input
                type="password"
                id="password"
                placeholder="Password"
                value={values.password}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.password && touched.password
                    ? "input-error"
                    : "registerInputs"
                }
              />
            </div>
            {errors.password && touched.password && (
              <p className="error">{errors.password}</p>
            )}
          </div>

          <div className="rp-loginInputCon">
            <div className="iconAndInputCon">
              <div className="rp-inputIconCon">
                <KeyOutlinedIcon className="rp-Input-icon" />
              </div>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm password"
                value={values.confirmPassword}
                autoComplete="off"
                onChange={handleChange}
                onBlur={handleBlur}
                className={
                  errors.confirmPassword && touched.confirmPassword
                    ? "input-error"
                    : "registerInputs"
                }
              />
            </div>
            {errors.confirmPassword && touched.confirmPassword && (
              <p className="error">{errors.confirmPassword}</p>
            )}
          </div>

          <button className="rp-loginBut" type="submit" disabled={isSubmitting}>
            Register
          </button>

          <span className="rp-alreadyAcc">Already have an account ?</span>

          <Link to="/login" className="link">
            <button className="rp-loginBut rp-loginBut1">
              Log into your account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
