import React, { useContext, useState } from "react";
import "./login.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import Checkbox from "@mui/material/Checkbox";
import { Link, useNavigate } from "react-router-dom";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import { registerSchema } from "../register/formikValidation";
import { AuthContext } from "../../context/authContext/AuthContext";
import { loginCall } from "../../context/authContext/authApiCalls";
const { useFormik } = require("formik");

function Login() {
  //Login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
    navigate("/");
  };

  const { errors, touched, handleBlur } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    handleLogin,
  });

  return (
    <div className="loginPage">
      <div className="loginPageTopRow">
        <img
          className="loginPageTopRowLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
          alt=""
        />
      </div>

      <div className="loginFormContainer">
        <form className="loginForm">
          <span className="loginFormSignInTitle">Sign In</span>

          <div className="rp-loginInputCon">
            <div className="iconAndInputCon">
              <div className="rp-inputIconCon">
                <MailOutlinedIcon className="rp-Input-icon" />
              </div>
              <input
                type="email"
                id="email"
                placeholder="Email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
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
                autoComplete="off"
                onChange={(e) => setPassword(e.target.value)}
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

          <button className="loginFormSignInBut" onClick={handleLogin}>
            Sign In
          </button>

          <div className="rememberMeNeedHelpCon">
            <div className="rememberMeAndCheckBox">
              <Checkbox className="checkBox" />
              <span>Remember me</span>
            </div>
            <span className="needHelp">Need help?</span>
          </div>

          <div className="loginWithFbCon">
            <FacebookIcon className="fbIcon" />
            <span className="loginWithFbTxt">Login with Facebook</span>
          </div>

          <Link to={"/register"} className="link">
            <span className="newToNetflix">
              New to Netflix? <span className="signUpSpan"> Sign up now. </span>{" "}
            </span>
          </Link>
          <span className="lastInfo">
            This page is protected by Google reCAPTCHA to <br /> ensure you're
            not a bot. <span className="learnMore">Learn more.</span>{" "}
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
