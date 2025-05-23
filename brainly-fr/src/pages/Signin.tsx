import { useRef } from "react";
import { Button } from "../comonents/Button"
import { Input } from "../comonents/Input"
import axios from "axios";
import { BACKEND_URL } from "../config";
import { useNavigate } from "react-router-dom";

function Signin() {
  const usernameRef =  useRef<HTMLInputElement>(null);
 const passwordRef =  useRef<HTMLInputElement>(null);
 const navigate = useNavigate();

  
 async function signin(){
 const username = usernameRef.current?.value;
 const password = passwordRef.current?.value;
  const response = await axios.post(BACKEND_URL+ "/api/v1/signin", {
      username,
      password 
 })
  const jwt  = response.data.token;

  localStorage.setItem("token",jwt)
  navigate("/dashboard" )

}
  return (
    <div className="h-screen w-screen bg-grey-200 flex justify-center items-center ">
        <div className="bg-white rounded-xl border min-w-48 p-6"> 
                <Input reference={usernameRef} placeholder="Username"/>
                <Input reference={passwordRef} placeholder="Password"/>
               <div className="flex justify-center pt-4">
               <Button onClick={signin} variant="primary" text="Signin" fullwidth={true} loading={false}/>
               </div>
        </div>
    </div>
  )
}

export default Signin