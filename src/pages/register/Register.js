import React from 'react'
import "./register.scss"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useRef } from 'react';



function Register() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }



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


                {
                    !email ? (
                        <div className='registerPageInputCon'>
                            <input className='registerPageEmailInput' type="email" placeholder='Email address' ref={emailRef} />
                            <button className='registerPageGetStartedBut' onClick={handleStart}  >
                                Get Started
                                <ArrowForwardIosIcon className='arrowForward' />
                            </button>
                        </div>
                    ) : (
                        <div className='registerPageInputCon'>
                            <input className='registerPageEmailInput' type="password" placeholder='Password' ref={passwordRef} />
                            <button className='registerPageGetStartedBut' onClick={handleFinish}  >
                                Start
                                <ArrowForwardIosIcon className='arrowForward' />
                            </button>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default Register
