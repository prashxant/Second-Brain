import {  Button } from "./comonents/Button"
import { PlusIcon } from "./icons/PlusIcon"
import { Share } from "./icons/Share"
import { Card } from "./comonents/Card"
function App() {

  return (
    <>
    <div className="">
      <Button variant="primary" text="Add contents" startIcon={<PlusIcon/>}/>
      <Button variant="secondary" text="Share Brain" startIcon={<Share/>}/>
      <br />
      <Card/>
    </div>
   </>
  )
}

export default App
