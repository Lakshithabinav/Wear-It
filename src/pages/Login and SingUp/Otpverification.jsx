
import React, { useContext, useEffect, useState } from 'react';

import "../styles/Otpverification.css";
import { useFormContext } from '../Helper/FormContext';
import { FormContext } from '../Helper/FormContext';
import axios from 'axios';



function Otpverification() {

    const authContext =useContext(FormContext)
    // const { formData, display} = useFormContext();
    const [phnoValid, setPhnoValid] = useState(false);
    const[phno,setPhno] = useState('');
    
    const SendOtp = async (e) => {
        e.preventDefault();
        const phnoValue = document.getElementById('ph').value.trim();
        const isAllNumbers = /^\d+$/.test(phnoValue);

        if (isAllNumbers && phnoValue.length === 10) {
            setPhno(phnoValue);
            setPhnoValid(true);
            authContext.setFormData(p =>({...p,phone_number : phnoValue}))
            console.log(authContext.formData)
           
            
        } else {
            alert(`${phnoValue} is not a valid phone number`);
            setPhnoValid(false); 
        }
        
    }
    useEffect( ()=>{
        if(authContext.formData.phone_number !== ""){
            console.log(authContext.formData)
            giveOtp();
        }
    },[authContext.formData])


    async function giveOtp(){
        try {
            console.log(authContext.formData)
            const response = await axios.post('http://localhost:8000/user/', authContext.formData);
            console.log('User created:', response.data);
           
        } catch (error) {
            console.error('Error creating user:', error);
            
        }
    }


    return (
        <div className='outer-div'>
            <div className='ph-verify-container'>
                <h1>OTP Verification</h1>
                <p>Enter your phone number</p>
                <input type="text" className='ph-input' id='ph' />
                {phnoValid &&
                    <>
                    
                        <p>Enter the otp sent to {phno}</p>
                        <input type="text" className='otp-input'/>
                        <button className='otpVerificationButton' >
                            verify Otp
                        </button>
        
                    </>
                }
                {!phnoValid &&
                    <button className='otpSendButton' onClick={SendOtp} >
                        Send OTP
                    </button>
                }
                
                
            </div>
        </div>
    );
}

export default Otpverification