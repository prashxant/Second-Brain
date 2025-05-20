import { AcademicIcon } from "../icons/AcademicIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarComponent } from "./SidebarComponent";

export function Sidebar (){

    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 rounded-md pl-6">

                <div className="flex text-2xl pt-4">
                   <AcademicIcon/> Brainly
                </div>
            <div className="pt-4">
                
                <SidebarComponent text="Twitter" icon={<TwitterIcon/>} />
                <SidebarComponent text="Youtube" icon={<YoutubeIcon/>} />
            </div>
    </div>
}