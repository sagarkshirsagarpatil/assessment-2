import React from 'react'
import './RenderSub.css'
const RenderSub=(props)=>{
  let today=new Date();
   let month=today.getMonth();
   let year=today.getFullYear();
   let day=today.getDate();
   let hour=today.getHours();
   let minut=today.getMinutes();
   let name1='Manager'
  return (
     <div className='RenderSub-main'>
     <div>{props.task}</div>
     <div>{`${hour}:${minut}`}</div>
     <div>{`${day}/${month}/${year}`}</div>
     <div>{name1}</div>
     <div>{props.name}</div>
     <div>{props.date}</div>
     <div>{props.status}</div>
     <div>{props.priority}</div>
    </div>
  )
}
export default RenderSub;







