import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Register from "./Pagess/Register";
import Login from "./Pagess/Login";
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Forgotten from "./Pagess/Forgotten";

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
   
      <Route path="/" element={<Register />} > </Route>
      <Route path="/Login" element={<Login />} > </Route>
      <Route path="/Forgot" element={<Forgotten />} > </Route>
      
      </>
       
    )
  );
 
  return (
    <>
      <ToastContainer/>
      <RouterProvider router={router}/>
    </>
   
   
    )
 
  
}

export default App
