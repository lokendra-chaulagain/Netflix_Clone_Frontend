import React from 'react'
import "./login.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import Checkbox from '@mui/material/Checkbox';

function Login() {
    return (
        <div className='loginPage'>
            <div className="loginPageTopRow">
                <img className='loginPageTopRowLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
            </div>

            <div className="loginFormContainer">
                <form className="loginForm">
                    < span className='loginFormSignInTitle'>Sign In</span>
                    <input className='loginFormEmailInput' type="email" placeholder='Email or phone number' />
                    <input className='loginFormPasswordInput' type="password" placeholder='Password' />
                    <button className='loginFormSignInBut'>Sign In</button>
                    <div className="rememberMeNeedHelpCon">

                        <div className="rememberMeAndCheckBox">
                            <Checkbox className='checkBox' />
                            <span >Remember me</span>
                        </div>
                        <span className='needHelp'>Need help?</span>

                    </div>

                    <div className="loginWithFbCon">
                        <FacebookIcon className='fbIcon' />
                        <span className='loginWithFbTxt'>Login with Facebook</span>
                    </div>
                    <span className='newToNetflix'>New to Netflix?  <span className='signUpSpan'> Sign up now. </span> </span>
                    <span className='lastInfo'>This page is protected by Google reCAPTCHA to <br /> ensure you're not a bot. <span className='learnMore'>Learn more.</span> </span>

                </form>
            </div>

        </div>
    )
}

export default Login