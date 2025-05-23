import { Button } from "../comonents/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { Share } from "../icons/Share";
import { Card } from "../comonents/Card";
import { useState } from "react";
import { CreateModal } from "../comonents/CreateModal";
import { Sidebar } from "../comonents/Sidebar";
function Dashboard () {
    const [modalOpen,setModaOpen] = useState(false)
  return (<div className="">
 
      <Sidebar/>
   
    <div className="p-4 ml-72 h-min-screen " >
      <CreateModal open={modalOpen}  onclose={()=>{
        setModaOpen(false)
      }}/>

      <div className="flex justify-end gap-4 ">
        <Button
          variant="primary"
          text="Add contents"
          startIcon={<PlusIcon />}
          onClick={()=>{setModaOpen(true)}}
        />
        <Button variant="secondary" text="Share Brain" startIcon={<Share />}  />
      </div>
      <div className="flex">
        <Card
          type="twitter"
          title=""
          link="https://x.com/arpit_bhayani/status/1918267700335489238#"
        />
        <Card
          type="youtube"
          title=""
          link="https://www.youtube.com/watch?v=ItLFpYha6Wc"
        />
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
