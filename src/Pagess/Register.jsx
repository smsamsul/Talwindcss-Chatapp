import React, { useState } from 'react';
import { FaLinkedinIn } from "react-icons/fa6";
import {LineWave } from 'react-loader-spinner'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import {  toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {

  const auth = getAuth();

 let navigate = useNavigate()

let [regdata,setregdata] = useState ({

  email:"",

  name:"",

  Password:"",
})
let [regEroor,setregEroor] = useState ({

  email:"",

  name:"",

  Password:"",
})
let [openeye,setopeneye] = useState (false)

let [loading,setloading] = useState (false)

const handlleChange = (e) => { 

  setregdata({...regdata,[e.target.name]:e.target.value})

  setregEroor({...regEroor,[e.target.name]:""})

 }

 const handlleSubmit = () => { 

  let pattern =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

 if(!regdata.email){
  setregEroor({...regEroor,email:"Email Require"})
 }
 else if(!pattern.test(regdata.email)){
  setregEroor({...regEroor,email:" please vaild Email Require"})
 }
 else if(!regdata.name){
  setregEroor({...regEroor,name:"name Require"})
 }
 else if(!regdata.Password){
  setregEroor({...regEroor,Password:"passward Require"})
 }
 else if(regdata.Password.length < 6){
  setregEroor({...regEroor,Password:" passward must to be 6 Require"})
 }
 else{
 
   setloading(true)
  createUserWithEmailAndPassword(auth,regdata.email, regdata.Password)
  .then((userCredential) => {

    toast('Registration successful! Please check your email', {
      position: "top-center"
  });
  setregdata({ email: "", name: "", Password: "" });
  
  navigate("/Login")
    setloading(false)
    console.log("done",userCredential)

  })
  .catch((error) => {
    setloading(false)
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(error.message)
    if(error.message.includes("auth/email-already-in-use"))
  
    setregEroor({...regEroor, email:"Already this email Exist"})
  });

 }

  }

  return (
  <>
  <div className=' text-center mt-[140px]'>
  < FaLinkedinIn className='w-[46px] h-[46px] p-2 rounded-full bg-[#0077B5] text-[#fff] mx-auto text-[50px]'/>
  <h2>Get started with easily register</h2>

  <p>Free register and you can enjoy it</p>

  <div className='w-full md:w-[38%] lg:w-[23%] mx-auto'>
  <input onChange={handlleChange} className='px-[54px] sm:px-[90px] mt-10 py-4 border border-black' 
  type="text" placeholder='Email Addres' name='email' value={regdata.email} />

  </div>
  
 

    {regEroor.email &&
  <button className='px-5 py-2 bg-red-500 w-[355px] mt-4 text-white'>{regEroor.email}</button>
    }

 

  <div className='w-full md:w-[38%] lg:w-[23%] mx-auto'>

  <input onChange={handlleChange} className=' px-[54px] sm:px-[90px] mt-10 py-4 border border-black' 
  type="text" placeholder='your name' name='name' value={regdata.name} />

  </div>
  
  {regEroor.name &&
  <button className='px-5 py-2 bg-red-500 w-[355px] mt-4 text-white'>{regEroor.name}</button>
    }

   

<div className='relative  w-full md:w-[38%] lg:w-[23%] mx-auto'>
<input onChange={handlleChange} className=' px-[54px] sm:px-[90px]  mt-10 py-4 border border-black ' 
 type={openeye? "text" :"password" } placeholder='Password' autoComplete="new-password"  
 name='Password' value={regdata.Password} />


{openeye &&
  <FaEyeSlash className='  absolute  
  bottom-[11px] right-[30%] md:right-0 -translate-y-2/4 cursor-pointer' onClick={()=>setopeneye(!openeye)}  />}

{ !openeye && 

  < IoEyeOutline className='   absolute 
  bottom-[11px] right-[30%] md:right-0 -translate-y-2/4 cursor-pointer' onClick={()=>setopeneye(!openeye)}  />}

</div>




  {regEroor.Password &&
  <button className='px-5 py-2 bg-red-500 w-[355px] mt-4 text-white'>{regEroor.Password}</button>
    }

<div className=' w-[20%] mx-auto'>
  { loading && 
<LineWave 
  visible={true}
  height="100"
  width="100"
  color="#4fa94d"
  ariaLabel="line-wave-loading"
  wrapperStyle={{}}
  wrapperClass=""
  firstLineColor=""
  middleLineColor=""
  lastLineColor=""
  />
}
</div>

  <button onClick={handlleSubmit} className='py-5 px-[130px] bg-[#086FA4] 
  rounded-[86px] mt-11 text-white'>Sign up</button>
  <br />
  <br />
  <Link className='text-red-500 mt-6' to="/Login"> Already have Aaccount?</Link>
  
  </div>

  </>
  );
};

export default Register;
