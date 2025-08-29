import { ArrowBigLeft, ArrowBigRight } from 'lucide-react'
import React from 'react'

interface PagitionProps {
  setLimit: (limit: number) => void,
  number: number,
  limit: number
}

const Pagition:React.FC<PagitionProps> = ({setLimit, number,limit}) => {
    const handleClick = (page: number) => {
        setLimit(page);
    }
  return (
    <div className='flex gap-4'>
        <ArrowBigLeft onClick={() => handleClick(limit - 1)} className={`${limit === 1 ? 'hidden' : ''} opacity-70 hover:opacity-95 cursor-pointer transition-opacity duration-300`} />
        {Array.from({ length: Math.ceil(number / 9) }).map((_, index) => (
          (limit <= index + 1 && limit >= index - 1) ?
          <span key={index} onClick={() => handleClick(index + 1)} className={`cursor-pointer ${limit === index + 1 ? 'font-bold' : ''}`}>
            {index + 1 }
          </span>:null
        ))}
        <ArrowBigRight onClick={() => handleClick(limit + 1)} className={`${limit === Math.ceil(number / 9) ? 'hidden' : ''} opacity-70 hover:opacity-95 cursor-pointer transition-opacity duration-300`} />
    </div>
  )
}

export default Pagition
