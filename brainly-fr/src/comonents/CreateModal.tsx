import { CrossIcon } from "../icons/CrossIcon";

//controlled component
export function CreateModal({ open, onclose }) {
  return (
    <div>
      {open && (
        <div className="w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center">
          
            <div className="flex flex-col justify-center ">
                <span className="bg-white opacity-100 p-4 rounded">
                    <div className="flex justify-end">
                        <CrossIcon/>
                    </div>
                    <div>
                        <input type="text" />
                    </div>
                </span>
            </div>
          
        </div>
      )}
    </div>
  );
}
