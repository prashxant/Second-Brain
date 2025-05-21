import { useRef } from "react";
import { Button } from "../comonents/Button"
import { Input } from "../comonents/Input"


function Signup() {

 const usernameRef =  useRef<HTMLInputElement>(null);
 const passwordRef =  useRef<HTMLInputElement>(null);

  
function signup(){
 const username = usernameRef.current?.value;
 const Password = passwordRef.current?.value;
}
  return (
    <div className="h-screen w-screen bg-grey-200 flex justify-center items-center ">
        <div className="bg-white rounded-xl border min-w-48 p-6"> 
                <Input ref={usernameRef} placeholder="Username"/>
                <Input  ref={passwordRef}placeholder="Password"/>
               <div className="flex justify-center pt-4">
               <Button onClick={signup} variant="primary" text="Signup" fullwidth={true} loading={false}/>
               </div>
        </div>
    </div>
  )
}

export default Signup