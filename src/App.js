import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Add from "./component/Add";
import Render from "./component/Render";
const App=()=>{
  const a=[{task:'Onbord new Client',name:"sagar",date:'sagar@gmail.com',priority:'medium'}]
  const [getData,setData]=useState(a);
 // in this comonent use for get a data from Add component and send the data render component 
 // render component render the data step by step using map method
  const data=(getData1)=>{
    setData([getData1,...getData]);
// console.log(getData);
  }
return(
<div> 
 <Add data1={data}/>
<Render inf={getData}/>
</div>

);
}
export default App;