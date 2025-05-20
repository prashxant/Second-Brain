import { ReactElement } from "react";



export function SidebarComponent({text,icon}:{
    text: string;
    icon: ReactElement;
}) {
  return <div className="flex text-gray-700 items-center py-2 ">
    <div className="pr-2">
      {icon}
    </div>
    <div className="">
    {text}
    </div>
  </div>;
}
