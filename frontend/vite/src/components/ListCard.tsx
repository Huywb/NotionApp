import React from 'react'
import Card from './Card'

interface ListCardProps {
    limit: number,
    number: number
}

const ListCard: React.FC<ListCardProps> = ({ limit, number }) => {
  return (
    <div className='flex flex-col sm:flex-row  flex-wrap gap-3 p-3 '>
        {Array.from({length: number}).map((item, index) => (
            (index<=limit*9 && index>(limit-1)*9)?
            <div className='sm:w-[32%]' key={index}>
                <Card id={index}></Card>
            </div>
            :null
        ))}
    </div>
  )
}

export default ListCard
