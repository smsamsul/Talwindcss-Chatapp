import React, { useState } from 'react'
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { toast } from 'react-toastify';

const Forgotten = () => {
    const auth = getAuth();
let [value,setvalue] = useState ("")


const handlleClick = () => { 
    sendPasswordResetEmail(auth, value)
    .then(() => {

        toast(' Please check your email', {
            position: "top-center"
        });

    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message)
      if(error.message.includes("auth/missing-email")){
        toast(' Please give your email Adrees', {
            position: "top-center"
        });
      }
      else if(error.message.includes("auth/invalid-email")){
        toast(' Please give your invalid-email', {
            position: "top-center"
        });
      }
    });

 }
  return (
    <div className='max-w-full h-screen bg-red-500 flex justify-center items-center'>
        <div className='w-[30%] bg-white p-[50px]  '>
       
     <h2>Forgot Passward </h2>
     <br />
    <input onChange={(e)=> setvalue(e.target.value)} className=' px-[90px] py-4 border border-black rounded-sm' 
     type="text" placeholder='Email Addres' />

     <button  onClick={handlleClick} className='py-5 px-8 bg-[#086FA4] 
       mt-5 text-white rounded-[15px]'>Submit</button>
     
        </div>
    
    </div> 
  )
}

export default Forgotten
