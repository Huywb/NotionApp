import { Plus } from 'lucide-react'

const Header = () => {
  return (
    <div className='bg-[#212121]  text-[#66bb6a] w-full h-15 flex items-center text-2xl justify-between px-[15%]'>
        <div className='font-bold'>
            Notion
        </div>
        <div className=''>
            <button className='rounded-full bg-[#66bb6a] hover:bg-[#81c784] transition-all duration-300 text-black p-2 px-4  cursor-pointer'> New Note</button>
        </div>
    </div>
  )
}

export default Header
