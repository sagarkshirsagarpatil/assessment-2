import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Add.css';
const Add=(props)=>{
   const [task,setTask]=useState();
   const [name,setName]=useState()
   const [date,setDate]=useState();
   const [priority,setPriority]=useState();
   const taskChange=(event)=>{setTask(event.target.value)};
   const nameChange=(event)=>{setName(event.target.value)};
   const dateChange=(event)=>{setDate(event.target.value)};
   const priorityChange=(event)=>{setPriority(event.target.value)};
   const Submit=(event)=>{
      event.preventDefault();
      const data={
task:task,
name:name,
date:date,
priority:priority
}
props.data1(data);
      
        setTask(' ');
        setName(' ');
        setDate(' ');
        setPriority(' ');
   }
return (
   // in this component use for to get adata from user and send the data to App component
   <div>
        <div className='Sub'>
         <form onSubmit={Submit}>
                     
                   <div className="Add_main">
                     <h1>Add Task</h1>
                     <hr/>
                     <div className="Add_sub">
                    <div className='column-1' >
                    <span className='Detail-1'>Task Name </span><br/><input type="text" className='Detail-2' placeholder='Task Name' onChange={taskChange} value={task}/><br/>
                    <span className='Detail-1'>Description </span><br/><input type="text" className='Detail-2' placeholder='Write Description' /><br/>
                    <span className='Detail-1'>Related To</span><br/><input type="text" className='Detail-2' placeholder='Enter Id' value="HR Department"/>
                    </div>


                    <div className='column-2'>
                    <span className='Detail-1'>Assign To</span><br/>
                    <input type="text" className='Detail-2' placeholder='Enter Name' onChange={nameChange} value={name}/>
                    </div>
                    
                    <div className="column-3">
                     <span className='Detail-1'>Set Dedline</span><br/>
                     <input type="date" className='Detail-2' placeholder='Enter Email' onChange={dateChange} value={date}/><br/>
                    

                      <span>Set Priority</span><br/>
                      <input type='radio'  className='redio' name='gender' onChange={()=>{setPriority("High")}} value="High"/><span className="redio_name">High</span><br/>
                     <input type='radio'  className='redio' name='gender' onChange={()=>{setPriority("Medium")}} value="Medium"/><span className="redio_name">Medium</span><br/>
                     <input type='radio'  className='redio' name='gender' onChange={()=>{setPriority("low")}} value="Low"/><span className="redio_name">Low</span>
                     </div>
                     </div>
                    <hr/>
                   
                    <button type="submit">Add</button>
                    </div>
                    </form>
                  </div> 
</div>
)
}
export default Add;