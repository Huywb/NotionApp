import { Delete, Edit } from 'lucide-react'
import moment from 'moment'
import { Link, useNavigate } from 'react-router-dom'
import { BaseAxios } from '../utils/axios'
import toast from 'react-hot-toast'

interface CardProps {
    id: number,
    item: any
}
const Card: React.FC<CardProps> = ({ id,item }) => {
  const navigate = useNavigate()
  const handleDelete= async ()=>{
    const res = await BaseAxios.delete(`/delete/${id}`)
    if(res.status === 200){
      toast.success('Note deleted successfully')
      navigate('/')
    }else{
      toast.error('Failed to delete note');
    }
  }
  console.log(item)
  return (
    <div className='bg-[#212121] p-4 rounded-xl border-t-2 outline-none border-t-green-400'>
      <h2>
        {item.title}
      </h2>
      <p className='opacity-60 mt-2 flex flex-wrap'>
        {item.content}
      </p>
      <div className='flex items-start justify-between mt-4'>
        <div className='opacity-70'>
          {moment(item.createdAt).format('DD MMM, YYYY')}
        </div>
        <div className='flex gap-4 opacity-70'>
          <Link to={`/notes/${id}`}>
            <Edit className='hover:text-green-400 cursor-pointer transition-colors duration-300' />
          </Link>
          <Delete onClick={handleDelete} className='hover:text-red-500 cursor-pointer transition-colors duration-300' />
        </div>
      </div>
    </div>
  )
}

export default Card
