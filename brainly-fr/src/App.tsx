import { Button } from "./comonents/button"
import { PlusIcon } from "./icons/PlusIcon"
import { ShareIcon } from "./icons/Share"

function App() {

  return (
    <>
    <Button size = "sm" variant="primary" text="button" startIcon={<PlusIcon size="lg"/>} endIcon={<ShareIcon size="lg"/>} onClick={()=>{alert("gg") }}></Button>
    <Button size = "md" variant="secondary" text="button"  onClick={()=>{alert("gg") }}></Button>
    <Button size = "lg" variant="primary" text="button"  onClick={()=>{alert("gg") }}></Button>
    </>
  )
}

export default App
