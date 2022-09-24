import React from "react";
import RenderSub from "./RenderSub";
const Render=(props)=>{
        console.warn(props.inf);                       
  return(
    //this component use for send data in RenderSub component for aligment 
   <div>
{
  props.inf.map((data)=>(
        <RenderSub
         task={data.task}
      name={data.name}
      date={data.date}
      priority={data.priority}
 />

  ))
}
   </div>
  )
}
export default Render;