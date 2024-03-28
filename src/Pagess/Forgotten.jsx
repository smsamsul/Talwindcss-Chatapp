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

    <div className='max-w-full min-h-screen bg-red-500 flex justify-center items-center'>
  <div className='w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 bg-white p-8 sm:p-10 lg:p-12 rounded-lg'>
    <h2 className='text-xl md:text-2xl lg:text-3xl font-bold mb-6'>Forgot Password</h2>
    <input
      onChange={(e) => setvalue(e.target.value)}
      className='input-field mb-6 w-full lg:w-[75%] py-4 border border-black rounded-sm'
      type="text"
      placeholder='Email Address'
    />
    <button
      onClick={handlleClick}
      className='btn-submit bg-[#086FA4] text-white py-3 px-6 rounded-lg'
    >
      Submit
    </button>
  </div>
</div>


  )
}

export default Forgotten
