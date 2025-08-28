import React from 'react'
import Card from './Card'

const ListCard = () => {
  return (
    <div className='flex flex-col sm:flex-row  flex-wrap gap-3 p-3 '>
        <div className='sm:w-[32%]'>
            <Card></Card>
        </div>
        <div className='sm:w-[32%]'>
            <Card></Card>
        </div>
        <div className='sm:w-[32%]'>
            <Card></Card>
        </div>
        <div className='sm:w-[32%]'>
            <Card></Card>
        </div>
        <div className='sm:w-[32%]'>
            <Card></Card>
        </div>
        <div className='sm:w-[32%]'>
            <Card></Card>
        </div>
        <div className='sm:w-[32%]'>
            <Card></Card>
        </div>
        <div className='sm:w-[32%]'>
            <Card></Card>
        </div>
        <div className='sm:w-[32%]'>
            <Card></Card>
        </div>
    </div>
  )
}

export default ListCard
