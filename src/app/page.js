"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [mainTask, setmainTask] = useState([]);

const onsubmitHandler = (e) =>{
    e.preventDefault();
    setmainTask([...mainTask, { title, description }]);
    settitle("");
    setdescription("");
  }

const deleteHandler = (i) =>{
  let copytask = [...mainTask]
  copytask.splice(i,1)
  setmainTask(copytask)
}

let renderTask = <h1 className='text-xl text-white text-center'>No Task Available</h1>

if(mainTask.length > 0){
  renderTask = mainTask.map((t, i) =>{
    return (
      <li key={i} className='flex flex-col items-center justify-between py-7 border-b-[1.5px]
      lg:flex-row'>
      <h5 className='text-xl text-white font-normal
      lg:px-5'>{t.title}</h5>
      <p className='text-lg text-white font-nomal pt-3
      lg:px-5'>{t.description}</p>
    <button 
    onClick={()=>{
      deleteHandler(i)
    }}
    className='px-5 py-2 bg-red-500 rounded font-bold text-white mt-5'>Delete</button>
    </li>
    )
  })
}

  return (
    <div className='bg-[#1A202C]'>
      <h1 className='bg-[#1A202C] border-white text-white text-4xl font-medium text-center uppercase p-8 md:text-5xl lg:text-6xl'>todo list</h1>

    <form onSubmit={onsubmitHandler} className='w-screen p-8 bg-[#1A202C] 
    md:flex items-center justify-center gap-3'>

        <input type="text" placeholder='Enter Task Here' 
        className='w-full text-white border-2 border-none px-4 py-3 rounded-lg mb-3 bg-[#222834]
        md:w-1/2 md:mb-0 placeholder:text-lg
        lg:w-1/4' value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}/>

        <input type="text" placeholder='Enter Description Here' 
        className='w-full text-white border-2 border-none px-4 py-3 rounded-lg mb-3 bg-[#222834]
        md:w-1/2 md:mb-0 placeholder:text-lg
        lg:w-1/4' value={description}
        onChange={(e)=>{
          setdescription(e.target.value)
        }}/>

        <button className='w-full bg-[#222834] px-4 py-3 rounded-lg font-light text-white text-xl
        md:w-1/4 md:py-[10px]
        lg:w-1/6'>Add Task</button>
      </form>

      <div className='bg-[#222834] p-8 mt-4'>
        <ul>
          {renderTask}
        </ul>
      </div>

    </div>
  )
}

export default page