import { ReactElement } from "react";



export function SidebarComponent({text,icon}:{
    text: string;
    icon: ReactElement;
}) {
  return <div className="flex text-gray-700 items-center ">
    <div className="p-2 pl-6">
      {icon}
    </div>
    <div className="p-2 pb-3">
    {text}
    </div>
  </div>;
}
