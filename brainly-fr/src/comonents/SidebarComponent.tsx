import { ReactElement } from "react";



export function SidebarComponent({text,icon}:{
    text: string;
    icon: ReactElement;
}) {
  return <div className="flex text-gray-700 items-center py-2 px-4 cursor-pointer
   hover:bg-purple-200 rounded-md max-w-48">
    <div className="pr-2">
      {icon}
    </div>
    <div className="">
    {text}
    </div>
  </div>;
}
