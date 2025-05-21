import { Button } from "../comonents/Button"
import { Input } from "../comonents/Input"

function Signup() {
  return (
    <div className="h-screen w-screen bg-grey-200 flex justify-center items-center ">
        <div className="bg-white rounded-xl border min-w-48 p-6"> 
                <Input onChange={()=>{}} placeholder="Username"/>
                <Input onChange={()=>{}} placeholder="Password"/>
               <div className="flex justify-center pt-4">
               <Button variant="primary" text="Signup" fullwidth={true} loading={false}/>
               </div>
        </div>
    </div>
  )
}

export default Signup