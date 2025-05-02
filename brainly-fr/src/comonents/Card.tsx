import { Share } from "../icons/Share";

interface cardProps {
    title: string;
    link: string ;
    type: "twitter"| "youtube"
}

export function Card({title,link,type}: cardProps) {
  return (
    <div>
      <div className="p-4 bg-white rounded-md  border-gray-200 max-w-72    border">
        <div className="flex justify-between ">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <Share />
            </div>
            <div>{title}</div>
          </div>
          <div className="flex items-center">
            <div className="text-gray-500 pr-2">
              <a href={link} target="_blank" >
              <Share />
              </a>
            </div>
            <div className="text-gray-500 pr-2">
              <Share />
            </div>
          </div>
        </div>
        <br />
        <div className="pt-4">

        {type === "twitter" && <blockquote className="twitter-tweet">
            <a href="https://twitter.com/username/status/807811447862468608"></a> 
            </blockquote> }
             
        {type === "youtube" &&  <iframe className="w-full" src="https://www.youtube.com/embed/gXQrci3Wff8?si=nVxsnYsZnMsEokax" 
               title="YouTube video player"  allow="accelerometer;autoplay; 
               clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe> }
       
            
        </div>
      </div>
    </div>
  );
}
