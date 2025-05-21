import { Button } from "../comonents/Button"
import { Input } from "../comonents/Input"

function Signin() {
  return (
    <div className="h-screen w-screen bg-grey-200 flex justify-center items-center ">
        <div className="bg-white rounded-xl border min-w-48 p-6"> 
                <Input placeholder="Username"/>
                <Input  placeholder="Password"/>
               <div className="flex justify-center pt-4">
               <Button variant="primary" text="Signin" fullwidth={true} loading={false}/>
               </div>
        </div>
    </div>
  )
}

export default Signin