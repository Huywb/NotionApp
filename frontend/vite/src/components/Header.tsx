
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='bg-[#212121]  text-[#66bb6a] w-full h-15 flex items-center text-2xl justify-between px-[15%]'>
        <div className='font-bold'>
            <Link to={'/'}>
                Notion
            </Link>
        </div>
        <div className=''>
            <Link to={'/add'}>
            <button className='rounded-full bg-[#66bb6a] hover:bg-[#81c784] transition-all duration-300 text-black p-2 px-4  cursor-pointer'> New Note</button>
            </Link>
        </div>
    </div>
  )
}

export default Header
