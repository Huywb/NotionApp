import React from 'react'
import Card from './Card'

interface ListCardProps {
    limit: number,
    data: any[]
}

const ListCard: React.FC<ListCardProps> = ({ limit, data }) => {
  console.log(data)
  return (
    <div className='flex flex-col sm:flex-row  flex-wrap gap-3 p-3 '>
        {data.map((item, index) => (
          console.log(item),
            (index<limit*9 && index>=(limit-1)*9)?
            <div className='sm:w-[32%]' key={index}>
                <Card id={item._id} item={item}></Card>
            </div>
            :null
        ))}
    </div>
  )
}

export default ListCard
