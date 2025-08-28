import { Delete, Edit } from 'lucide-react'
import moment from 'moment'
import React from 'react'

const Card = () => {
  return (
    <div className='bg-[#212121] p-4 rounded-xl border-t-2 outline-none border-t-green-400'>
      <h2>
        SQL Basic
      </h2>
      <p className='opacity-60 mt-2 flex flex-wrap'>
        SELECT,JOIN,UPDATE,DELETE dsajdksjaldjsakjdlksajdlkjasld dsajdklsjalkdj asdjklsajdlkjsalkdj as 
      </p>
      <div className='flex items-start justify-between mt-4'>
        <div className='opacity-70'>
          {moment(Date.now()).format('DD MMM, YYYY')}
        </div>
        <div className='flex gap-4 opacity-70'>
          <Edit className='hover:text-green-400 cursor-pointer transition-colors duration-300' />
          <Delete className='hover:text-red-500 cursor-pointer transition-colors duration-300' />
        </div>
      </div>
    </div>
  )
}

export default Card
