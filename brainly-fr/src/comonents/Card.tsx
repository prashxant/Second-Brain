import { Share } from "../icons/Share";

export function Card() {
  return (
    <div>
      <div className="p-4 bg-white rounded-md  border-gray-200 max-w-72    border">
        <div className="flex justify-between ">
          <div className="flex items-center text-md">
            <div className="text-gray-500 pr-2">
              <Share />
            </div>
            <div>Project ideas</div>
          </div>
          <div className="flex items-center">
            <div className="text-gray-500 pr-2">
              <Share />
            </div>
            <div className="text-gray-500 pr-2">
              <Share />
            </div>
          </div>
        </div>
        <br />
        <iframe className="w-full" src="https://www.youtube.com/embed/gXQrci3Wff8?si=nVxsnYsZnMsEokax" 
               title="YouTube video player"  allow="accelerometer;autoplay; 
               clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        
      </div>
    </div>
  );
}
