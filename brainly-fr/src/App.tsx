import { Button } from "./comonents/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { Share } from "./icons/Share";
import { Card } from "./comonents/Card";
import { useState } from "react";
import { CreateModal } from "./comonents/CreateModal";
function App() {
    const [modalOpen,setModaOpen] = useState(true)
  return (
    <div>
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
        <Button variant="secondary" text="Share Brain" startIcon={<Share />} onClick={()=>{alert("hi i am working")}} />
      </div>
      <div className="flex">
        <Card
          type="twitter"
          title="trying"
          link="https://x.com/arpit_bhayani/status/1918267700335489238#"
        />
        <Card
          type="youtube"
          title="Akita"
          link="https://www.youtube.com/watch?v=ItLFpYha6Wc"
        />
      </div>
    </div>
  );
}

export default App;
