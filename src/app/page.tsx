import ParentComponent from "./Component/ParentComponent";
import State from "./Component/State";

 export default function Home(){
  return (
    <div>
       <State />
       <ParentComponent />
    </div>
  )
 }