import { useEffect, useState } from "react"
import ListCard from "../components/ListCard"
import Pagition from "../components/Pagition"
import { BaseAxios } from "../utils/axios"


const HomePage = () => {
  const [info, setInfo] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      try {
        const res = await BaseAxios.get('/all')
        setInfo(res.data.data)
      } catch (error) {
        console.log(error)        
      }
    }
    fetchData()
  },[])
  console.log(info)
  const [limit,setLimit] = useState(1)
  return (
    <div className="h-full">
        <div className=' px-[10%] pt-6 h-[4] min-h-[610px]'>
          <ListCard limit={limit} data={info}></ListCard>
        </div>
        <div className='flex items-center justify-center bottom-1 '>
          <Pagition setLimit={setLimit} data={info} limit={limit}></Pagition>
        </div>
    </div>
  )
}

export default HomePage
