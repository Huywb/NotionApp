import React, { useState } from 'react'
import { useParams } from 'react-router-dom'



const NoteDetailPage = () => {
  const params = useParams()
  console.log(params.id)
  const title = 'tesst'
  const content = 'test'
  const [info,setInfo] = useState({
    title: title || '',
    content: content || ''
  })
  
  const handleSubmit = () => {
    console.log(info)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => { 
    e.preventDefault()
    setInfo({
      ...info,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className='px-[10%]  mt-10 h-full flex items-center justify-center'>
        <div className='border-t-green-500 border-t-4 rounded-xl bg-[#212121]  w-[50%] flex flex-col gap-4 items-center py-10'>
          <h1 className='text-3xl'>Update Note</h1>
          <div className='flex flex-col w-[80%] text-xl p-4 gap-10 justify-end '>
            <div className='flex  w-full gap-16 items-center   '>
              <label htmlFor="note-title">Title </label>
              <input name='title' value={info.title} onChange={(e)=>handleChange(e)} className='border rounded-md h-10 w-[80%]' type="text" id="note-title" />
            </div>
            <div className='flex w-full gap-8 '>
              <label htmlFor="note-content">Content </label> 
              <textarea name='content' value={info.content} onChange={(e)=>handleChange(e)} rows={4} className='border rounded-md w-[80%]' id="note-content"></textarea>
            </div>
          </div>

          <button onClick={handleSubmit} className='bg-green-500 px-4 py-2 rounded-full text-xl cursor-pointer'>Update Note</button>
        </div>
    </div>
  )
}

export default NoteDetailPage
