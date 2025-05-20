import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarComponent } from "./SidebarComponent";

export function Sidebar (){

    return <div className="h-screen bg-white border-r w-72 fixed left-0 top-0 rounded-md">
            <div className="pt-4 items  ">
                <SidebarComponent text="Twitter" icon={<TwitterIcon/>} />
                <SidebarComponent text="Youtube" icon={<YoutubeIcon/>} />
            </div>
    </div>
}