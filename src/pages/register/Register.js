import React from 'react'
import "./register.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


function Register() {
    return (
        <div className='registerPage'>
            <div className="registerTopRow">
                <img className='registerPageTopRowLogo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="" />
                <button className='registerLoginButton'>Sin In</button>
            </div>

            <div className="registerCenterCon">
                <span className='registerPageTxt1' >Unlimited movies, TV <br /> &ensp;&ensp;shows, and more.</span>
                <span className='registerPageTxt2' >Watch anywhere. Cancel anytime.</span>
                <span className='registerPageTxt3'>Ready to watch? Enter your email to create or restart your membership.</span>

                <div className='registerPageInputCon'>
                    <input className='registerPageEmailInput' type="email" placeholder='Email address' />
                    <button className='registerPageGetStartedBut' >Get Started
                        <ArrowForwardIosIcon className='arrowForward' />

                    </button>
                </div>
            </div>
        </div>
    )
}

export default Register
