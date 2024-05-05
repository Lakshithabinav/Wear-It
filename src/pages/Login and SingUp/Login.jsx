import React from 'react'
import "../styles/login.css"
import { FaFacebookSquare } from "react-icons/fa";
function Login() {
  return (
    <div className='login-div'>
        <div className='login-inner-div'>  
            <p className='heading'>Instagram</p>
            <form action="" className='login-form'>

                <div className='userInput-div'>
                    
                    <input type="text" name='user' className='userInput'placeholder='username'/>
                    <input type="text" name='pass' className='userInput'placeholder='Password'/>
                </div>
    

                <button className='submit-button'>Login</button>
                <div className='or-div'> 
                    <p className='line'>____________</p> <h5>OR</h5> <p className='line'>____________</p>
                </div>
                <div className='fblogin'> 
                    <FaFacebookSquare className='fbicon'/><p className='fblogin-text'>Log in with Facebook</p>
                </div>
                <div className='forgotPassword-div'>
                    <p className='forgotPassword-content'>Forgot password ?</p>
                </div>
            </form>
        </div>
        <div className='signUp-div'> <p>Don't have an account? <a href="/signup">Sign up</a></p></div>
    </div>
  )
}

export default Login
