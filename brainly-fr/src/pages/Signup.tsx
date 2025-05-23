import { useRef } from "react";
import { Button } from "../comonents/Button"
import { Input } from "../comonents/Input"
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useNavigate } from "react-router-dom";


function Signup() {

 const usernameRef =  useRef<HTMLInputElement>(null);
 const passwordRef =  useRef<HTMLInputElement>(null);
const navigate  = useNavigate();
  
 async function signup(){
 const username = usernameRef.current?.value;
 const password = passwordRef.current?.value;
  await axios.post(BACKEND_URL+ "/api/v1/signup", {
      username,
      password 
 })

 navigate("/signin")
 alert("you have signed up! ")

}
  return (
    <div className="h-screen w-screen bg-grey-200 flex justify-center items-center ">
        <div className="bg-white rounded-xl border min-w-48 p-6"> 
                <Input reference={usernameRef} placeholder="Username"/>
                <Input  reference={passwordRef}placeholder="Password"/>
               <div className="flex justify-center pt-4">
               <Button onClick={signup} variant="primary" text="Signup" fullwidth={true} loading={false}/>
               </div>
        </div>
    </div>
  )
}

export default Signup