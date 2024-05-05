import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/signup.css"
import { MdOutlineRadioButtonUnchecked } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useFormContext } from '../Helper/FormContext';
import { FormContext } from '../Helper/FormContext';

function SignUp() {
    // State to manage the focused state of input fields
    const { formData, handleInputChange } = useFormContext();
    const [focused, setFocused] = useState({});
    const [inputPass, setInputPass] = useState("");
    const [passValid, setPassValid] = useState([0, 0, 0, 0, 0]);

    const navigation = useNavigate()

    const authContext = useContext(FormContext)
    
    // Function to handle input focus
    const handleInputFocus = (fieldName) => {
        setFocused({ ...focused, [fieldName]: true });
    };

    // Function to handle input blur
    const handleInputBlur = (fieldName, event) => {
        if (event.target.value.trim() === '') {
            setFocused({ ...focused, [fieldName]: false });
        }
    };

    

    useEffect(() => {
        const upperCase = /[A-Z]/;
        const lowerCase = /[a-z]/;
        const numbers = /[0-9]/;
        const newArr = [
            inputPass.toString().length >= 8 ? 1 : 0,
            upperCase.test(inputPass) ? 1 : 0,
            lowerCase.test(inputPass) ? 1 : 0,
            numbers.test(inputPass) ? 1 : 0,
            0
        ];
        setPassValid(newArr);
    }, [inputPass]);


    function handlePassword(e) {
        handleInputChange(e); 
        setInputPass(e.target.value);
    }
    
    function handleConfirmPassword(e){
        handleInputChange(e); 
        let newArr =[...passValid];
        newArr[4] =e.target.value.toString() === inputPass.toString() ? 1: 0;
        setPassValid(newArr);
    }
    
    // Function to access formData
    




    const handelSignup =(e)=>{
        e.preventDefault()
        const sum = passValid.reduce((a,b)=> a+b ,0);
        if(sum === 5){
            setTimeout(() => {
                navigation("/otp-verification")
            }, 1000);
        }
        else{
            alert("Make sure all the details are entered.")
        }
        
        
    }

    return (
        <div className='Signup-div'>
            <div className='input-div'>
                <h1>Sign Up</h1>

                <div className='input-container'>
                    <label htmlFor="username" className={focused.username ? 'focuse' : 'notfocused'}>User name</label>
                    <input
                        type="text"
                        id='username'
                        className='input-text-box'
                        name='username' // Make sure the name attribute matches the key in formData
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('username')}
                        onBlur={(e) => handleInputBlur('username', e)}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor="name" className={focused.name ? 'focuse' : 'notfocused'}>Email</label>
                    <input
                        type="text"
                        id='name'
                        name='email'
                        className='input-textbox'
                        onChange={handleInputChange}
                        onFocus={() => handleInputFocus('name')}
                        onBlur={(e) => handleInputBlur('name', e)}
                    />
                </div>

                <div className='input-container'>
                    <label htmlFor="password" className={focused.password ? 'focuse' : 'notfocused'}>Password</label>
                    <input
                        type="text"
                        id='password'
                        className='input-textbox'
                        name='password1'
                        onFocus={() => handleInputFocus('password')}
                        onBlur={(e) => handleInputBlur('password', e)}
                        onChange={handlePassword}
                    />
                </div>

                <div className='input-container'>
                    <label htmlFor="confirmPassword" className={focused.confirmPassword ? 'focuse' : 'notfocused'}>Confirm Password</label>
                    <input
                        type="text"
                        id='confirmPassword'
                        className='input-textbox'
                        name='password2'
                        onFocus={() => handleInputFocus('confirmPassword')}
                        onBlur={(e) => handleInputBlur('confirmPassword', e)}
                        onChange={handleConfirmPassword}
                    />
                </div>
                <div className={passValid[0] === 1 ? 'conditionsOK' : 'conditionsNot'}>
                    <p>
                        <div className='checkbox'>{passValid[0] === 0 ? <MdOutlineRadioButtonUnchecked /> : <CiCircleCheck />}</div>
                        Password must be at least 8 characters long
                    </p>
                </div>
                <div className={passValid[1] === 1 ? 'conditionsOK' : 'conditionsNot'}>
                    <p>
                        <div className='checkbox'>{passValid[1] === 0 ? <MdOutlineRadioButtonUnchecked /> : <CiCircleCheck />}</div>
                        Password must contain at least one uppercase letter
                    </p>
                </div>
                <div className={passValid[2] === 1 ? 'conditionsOK' : 'conditionsNot'}>
                    <p>
                        <div className='checkbox'>{passValid[2] === 0 ? <MdOutlineRadioButtonUnchecked /> : <CiCircleCheck />}</div>
                        Password must contain at least one lowercase letter
                    </p>
                </div>
                <div className={passValid[3] === 1 ? 'conditionsOK' : 'conditionsNot'}>
                    <p>
                        <div className='checkbox'>{passValid[3] === 0 ? <MdOutlineRadioButtonUnchecked /> : <CiCircleCheck />}</div>
                        Password must contain at least one number
                    </p>
                </div>
                <button className='signup-button' onClick={handelSignup}>Sign Up</button>
            </div>
        </div>
    );
}

export default SignUp;
