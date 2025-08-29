import { useState } from "react"
import ListCard from "../components/ListCard"
import Pagition from "../components/Pagition"


const HomePage = () => {
  const [limit,setLimit] = useState(1)
  const number = 40;
  console.log(limit)
  return (
    <div className="h-full">
        <div className=' px-[10%] pt-6 h-[4] min-h-[610px]'>
          <ListCard limit={limit} number={number}></ListCard>
        </div>
        <div className='flex items-center justify-center bottom-1 '>
          <Pagition setLimit={setLimit} number={number} limit={limit}></Pagition>
        </div>
    </div>
  )
}

export default HomePage
