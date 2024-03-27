import React from 'react'
import { DynamicWidget } from '@dynamic-labs/sdk-react-core';
import { motion } from 'framer-motion';
import { MdCancel } from 'react-icons/md';

function Profile() {
  const [subscription, setSubscription] = React.useState<boolean>(false);
  const [location, setLocation] = React.useState<boolean>(false);
  const [ranking, setRanking] = React.useState<boolean>(false);

  return (
    <div className='relative'>

    <motion.div 
     initial={{
      opacity: 0
     }}
      animate={{
        x: subscription ? "0%" : "100%",
        opacity: subscription? 1 : 0,
      }}
      transition={{
        duration: 0.3
      }}
      className='w-full h-screen items-center overflow-auto flex flex-col absolute z-20 bg-black'>
        <div className='flex justify-center mt-2'>
        <MdCancel onClick={() => setSubscription(false)} size={35} color='white' />
        </div>
        <h3 className='text-2xl mt-3'>Subscriptions</h3>
        <div className='my-[15%]'></div>
        <div className=''>
            <div className='p-1 rounded-[2rem] flex gap-3 bg-[#4642F0]'>
            <div className='h-[7rem] w-[7rem] rounded-[2rem] bg-[#06FFC3]'></div>
            <div className='h-[7rem] w-[50%] flex flex-col justify-center'>
              <div>

              </div>
                <h3 className='text-xl font-semibold'>DRiP</h3>
                <h3 className='text-sm text-[#FFFFFF80]'>Superteam POAPs for IRL ecosystem calls</h3>
            </div>
            </div>
        </div>
      
      </motion.div>

      <motion.div 
     initial={{
      opacity: 0
     }}
      animate={{
        x: ranking ? "0%" : "100%",
        opacity: ranking? 1 : 0,
      }}
      transition={{
        duration: 0.3
      }}
      className='w-full h-screen overflow-auto flex flex-col absolute z-30 bg-black'>
        <div className='flex justify-center mt-2'>
        <MdCancel onClick={() => setRanking(false)} size={35} color='white' />
        </div>
        <h3 className='text-2xl mt-3'>Ranking</h3>
        <div className='my-[15%]'></div>
        <div className=''>
            <div className='p-1 rounded-[2rem] flex gap-3 bg-[#4642F0]'>
            <div className='h-[7rem] w-[7rem] rounded-[2rem] bg-[#06FFC3]'></div>
            <div className='h-[7rem] w-[50%] flex flex-col justify-center'>
              <div>

              </div>
                <h3 className='text-xl font-semibold'>DRiP</h3>
                <h3 className='text-sm text-[#FFFFFF80]'>Superteam POAPs for IRL ecosystem calls</h3>
            </div>
            </div>
        </div>
      </motion.div>

    <motion.div 
     initial={{
      opacity: 0
     }}
      animate={{
        x: location ? "0%" : "100%",
        opacity: location? 1 : 0,
      }}
      transition={{
        duration: 0.3
      }}
      className='w-full h-screen overflow-auto flex flex-col absolute z-30 bg-black'>
        <div className='flex justify-center mt-2'>
        <MdCancel onClick={() => setLocation(false)} size={35} color='white' />
        </div>
        <div className='bg-[#06FFC3] h-[20px] w-full py-[10rem] mt-6 rounded-[2rem]'>
          <span className='opacity-0'>40bks</span>
        </div>

      <div className='bg-white flex justify-center py-3 rounded-full w-full mt-3'>
      <button className='bg-transparent text-black text-xl'>Turn off Location</button>
      </div>
      </motion.div>


         <div className='bg-[#06FFC3] h-[20rem] flex justify-center mt-6 rounded-[2rem]'>
            <div className='items-center justify-center w-[60%] flex flex-col h-full'>
            <h3 className='text-2xl text-black'>Profile</h3>
            <div className='h-[8rem] rounded-xl mt-2 w-[8rem] bg-black'></div>
            <h3 className='text-2xl pb-3 text-black mt-3'>Frank Jackson</h3>
            <DynamicWidget />
            </div>
         </div>

         {/* <div className='mt-8'>
            <h2>My tiles</h2>
         </div> */}
         <div className='w-full mt-8 grid gap-1 text-black grid-cols-2'>
        <div onClick={() => setSubscription(true)} className='h-[11rem] w-full flex justify-center items-center rounded-3xl bg-white'>
            Subcriptions
        </div>
        <div  onClick={() => setLocation(true)} className='h-[11rem] w-full flex justify-center items-center rounded-3xl bg-white'>
        Location sharing
        </div>
        <div onClick={() => setRanking(true)}  className='h-[11rem] w-full flex justify-center items-center rounded-3xl bg-white'>
        Ranking
        </div>
        <div className='h-[11rem] w-full flex justify-center items-center rounded-3xl bg-[#ffffff60]'>
        Settings
        </div>
     
      </div>
    </div>
  )
}

export default Profile