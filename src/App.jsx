import React, {useState} from 'react'
import { X } from 'lucide-react';

const App = () => {

    const [handler, sethandler] = useState('')
    const [details, setdetails] = useState('')

    const [task, setTask] = useState([])
  
    const submitHandler = (e) =>{
    e.preventDefault()

    
    const copyTask = [...task]

    copyTask.push({handler, details})

    setTask(copyTask)

    sethandler('')
    setdetails('')
    }

    const deleteNote = (idx)=>{
      const copyTask = [...task]
      
      copyTask.splice(idx, 1)
      setTask(copyTask)
    }


  return (
    <div className='h-screen w-ful lg:flex bg-[#cbdde9]'>
      <form 
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      className='flex items-start flex-col lg:w-1/2 gap-4 p-10'>
                <h1 className='text-5xl font-bold text-[#2872a1]'>Add Notes</h1>
                <input 
                   className='px-5 py-2 w-full rounded-md border-2 border-[#2872a1] outline-none text-[#2872a1]'
                   type="text"
                   placeholder='Enter Notes Heading'
                   value={handler}
                   onChange={(elem)=>{
                    sethandler(elem.target.value)
                   }}
                />

                <textarea
                   className='px-5 py-2 w-full h-32 flex flex-row items-start rounded-md border-2 border-[#2872a1] text-[#2872a1] outline-none resize-none'
                   type="text"
                   placeholder='Write Details'
                   value={details}
                   onChange={(elem)=>{
                     setdetails(elem.target.value)
                   }}
                />

                <button 
                   className='bg-[#2872a1] text-[#cbdde9] px-5 py-2 w-full rounded outline-none active:bg-gray-500'>
                   Add Notes
                </button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
           <h1 className='text-5xl font-bold text-[#2872a1]'>Recent Notes</h1>
           <div className='flex gap-5 flex-wrap items-start justify-start mt-5 overflow-auto no-scrollbar'>
                {task.map(function(elem, idx){
                  return <div key={idx} className='flex flex-col justify-between items-start relative w-52 h-50 pt-9 pb-5py-8 px-5 rounded-2xl p-4 bg-[url(https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png)] bg-cover'>
                        <div>
                            <h3 className='leading-tight font-bold'>{elem.handler}</h3>
                            <p className='leading-tight font-medium mt-2 text-gray-600'>{elem.details}</p>
                        </div>
                        <button onClick={()=>{
                           deleteNote(idx)
                        }} className='w-full bg-red-600 cursor-pointer active:scale-95 text-white text-xs py-1 rounded'>Delete</button>

                  </div>
                })

                }
           </div>   
      </div>

    </div>
  )
}

export default App
