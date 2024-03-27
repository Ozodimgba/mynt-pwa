import React from 'react'

function Discover() {
  return (
    <div className='text-white'>
        <div className='text-white mt-6 text-3xl'><h3>What would you like <br/> to discover today?</h3></div>
        <div className='bg-[#06FFC3] h-[12rem] mt-6 rounded-[2rem]'></div>

        <h3 className='mt-3 text-xl'>Top Collections</h3>


        <div className='mt-3'>
            <div className='p-1 rounded-[2rem] flex gap-3 bg-[#4642F0]'>
            <div className='h-[7rem] w-[7rem] rounded-[2rem] bg-[#06FFC3]'></div>
            <div className='h-[7rem] w-[50%] flex flex-col justify-center'>
                <h3 className='text-xl font-semibold'>Superteam NG</h3>
                <h3 className='text-sm text-[#FFFFFF80]'>Superteam POAPs for IRL ecosystem calls</h3>
            </div>
            <div className='h-[7rem] flex flex-col items-center pr-4 justify-center'>
                <h3 className='text-xl font-semibold'>+</h3>
                <h3 className='text-sm text-[#FFFFFF80]'>votes</h3>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Discover