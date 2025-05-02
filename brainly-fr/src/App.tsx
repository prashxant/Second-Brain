import { Button } from "./comonents/Button";
import { PlusIcon } from "./icons/PlusIcon";
import { Share } from "./icons/Share";
import { Card } from "./comonents/Card";
import { CreateModal } from "./comonents/createModal";
function App() {
  return (
    <div className="">
      <CreateModal open={true} />

      <div className="flex justify-end gap-4">
        <Button
          variant="primary"
          text="Add contents"
          startIcon={<PlusIcon />}
        />
        <Button variant="secondary" text="Share Brain" startIcon={<Share />} />
      </div>
      <div className="flex">
        <Card
          type="twitter"
          title="trying"
          link="https://x.com/arpit_bhayani/status/1918267700335489238#"
        />
        <Card
          type="youtube"
          title="trying"
          link="https://www.youtube.com/watch?v=ItLFpYha6Wc"
        />
      </div>
    </div>
  );
}

export default App;
