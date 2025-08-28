import { useState } from "react"
import ListCard from "../components/ListCard"
import Pagition from "../components/Pagition"


const HomePage = () => {
  const [limit,setLimit] = useState(1)
  const number = 20;
  console.log(limit)
  return (
    <div>
        <div className='px-[10%] pt-6 bg-red-600'>
          <ListCard limit={limit} number={number}></ListCard>
        </div>
        <div className='flex items-center justify-center py-2'>
          <Pagition setLimit={setLimit} number={number} limit={limit}></Pagition>
        </div>
    </div>
  )
}

export default HomePage
