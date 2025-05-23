import { useRef, useState } from "react";
import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";
import { Input } from "./Input";



//controlled component
export function CreateModal({ open, onclose } ) {

    const titleRef = useRef<HTMLInputElement>(null);
    const linkRef = useRef<HTMLInputElement>(null);
    const [type,setType] = useState("youtube")

  function addContents(){
      const title = titleRef.current?.value
      const link = linkRef.current?.value
  }
  return (
    <div>
      {open && (<div className=" w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
          
            <div className="flex flex-col justify-center ">

                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <div className="cursor-pointer" onClick={onclose}>
                        <CrossIcon/>
                        </div>
                    </div>
                    <div>
                        <Input reference={titleRef} placeholder={"Title"}/>
                        <Input reference={linkRef} placeholder={"Link"}/>
                        <div className="flex justify-center">
                        <Button onClick={addContents} variant="primary" text={"Submit"}/>
                        </div>
                    </div>
                </span>
            </div>
         </div>
      )}
    </div>
  );
}


