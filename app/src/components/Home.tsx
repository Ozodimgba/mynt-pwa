import React from 'react';
import { motion } from 'framer-motion';
import { MdCancel, MdVerified } from "react-icons/md";
import { GoVerified } from "react-icons/go";


function Home() {
  const [ coinInfo, setCoinInfo] = React.useState<boolean>(false)
  const [ collectionInfo, setCollectionInfo] = React.useState<boolean>(false)
  const [ orgInfo, setOrgInfo] = React.useState<boolean>(false)

  // const handleCollectionRoute = (state: boolean) => {
  //   setOrgInfo(false);
  //   setCollectionInfo(state)
  // }


  return (
    <div className='relative'>
      { coinInfo ? 
      <motion.div 
      animate={{
        y: ["100%", "0%"]
      }}
      transition={{
        duration: 0.3
      }}
      className='h-screen w-full flex flex-col absolute z-4 bg-black'>
        <div className='flex justify-between'>
        <div className='flex gap-2'>
       <div className='h-[50px] w-[50px] rounded-full bg-white'></div>
       <div>
        <div className='flex items-center gap-2'>
        <h3 className='text-xl'>Solana</h3>
          <GoVerified size={20} color='white' />
        </div>
        <div className='flex gap-2'>
        <h5 className='text-lg'>$140</h5>
        <div className='bg-green-300 px-3 leading-[0.5rem] flex items-center rounded-sm text-green-900'><span>4.0+</span></div>
        </div>
       </div>
      </div>
      <div className='flex items-center'>
      <MdCancel onClick={() => setCoinInfo(!coinInfo)} size={35} color='white' />
      </div>
        </div>
      
      </motion.div> : null}

    <motion.div 
     initial={{
      opacity: 0
     }}
      animate={{
        x: orgInfo ? "0%" : "100%",
        opacity: orgInfo? 1 : 0,
      }}
      transition={{
        duration: 0.3
      }}
      className='w-full h-screen overflow-auto flex flex-col absolute z-4 bg-black'>
        <div className='bg-[#06FFC3] h-[20px] w-full py-[10rem] mt-6 rounded-[2rem]'>
          <span className='opacity-0'>40bks</span>
        </div>
        <div className='flex justify-center mt-4'>
        <MdCancel onClick={() => setOrgInfo(false)} size={35} color='white' />
        </div>
        <div>
          <p className='text-center mt-3'>Superteam NG is a vibrant community of Nigerian developers, builders, and enthusiasts focused on the Solana blockchain ecosystem.  They aim to foster collaboration, learning, and the creation of innovative projects within the Solana space. Superteam NG provides opportunities for its members to connect, gain skills, find work, and contribute to the growth of Web3 technologies in Nigeria.</p>
        </div>

        <div className='w-full pb-[15rem] grid gap-y-3 grid-cols-2 mt-6'>
        <div onClick={() => setCollectionInfo(true)} className='h-[11rem] w-[11rem] rounded-3xl bg-green-600'></div>
        <div className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
      </div>
        
      
      </motion.div>

      <motion.div 
      initial={{
        opacity: 0
       }}
      animate={{
        x: collectionInfo ? "0%" : "100%",
        opacity: collectionInfo? 1 : 0,
      }}
      transition={{
        duration: 0.3
      }}
      className='w-full h-screen overflow-auto flex flex-col absolute z-4 bg-black'>
        <h3 className='text-white'>Collection Info</h3>
        <div className='bg-[#06FFC3] h-[20px] w-full py-[10rem] mt-6 rounded-[2rem]'>
          <span className='opacity-0'>40bks</span>
        </div>
        <div className='flex justify-center mt-4'>
        <MdCancel onClick={() => setCollectionInfo(false)} size={35} color='white' />
        </div>
        <div>
          <p className='text-center mt-3'>This POAP is minted only at the location of ecosystem calls. It is used to indicate Proof of attendance</p>
        </div>

        <div className='mt-6'>
          <h3 className='text-xl'>Your NFTs</h3>
        </div>
        <div className='w-full pb-[15rem] grid gap-y-3 grid-cols-2 mt-3'>
        <div className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
        <div className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
      </div>
        
      
      </motion.div>

      <div>
        <h3 className='font-semibold text-xl'>Hi, Chief</h3>
        <h3 className='font-semibold text-xl text-[#ffffff30]'>welcome back</h3>
      </div>

      <div className='mt-[3.3rem]'>
        <h3 className='font-semibold text-md text-[#ffffff30]'>TOTAL BALANCE</h3>
        <h3 className='font-semibold text-4xl'>$190</h3>
      </div>

      <div className='mt-6'>
        <div onClick={() => setCoinInfo(!coinInfo)} className='bg-white w-80 p-3 flex gap-3 items-center rounded-3xl'>
          <div className='bg-black h-[50px] w-[50px] rounded-full'></div>

          <div>
          <div className='flex text-black items-center gap-2'>
        <h3 className='text-lg'>Solana</h3>
          <MdVerified size={20} color='#4642F0' />
        </div>
            <h3 className='text-black'>$148.92</h3>
          </div>

          <div className='ml-auto h-full flex items-center'> 
            <h3 className='text-black'>$15000</h3>
          </div>
        </div>
      </div>

      <div className='my-5'>
        <h3 className='text-2xl'>My Mynts</h3>
      </div>

      <div className='w-full grid gap-y-3 grid-cols-2' style={{ maxHeight: 'calc(100vh - 40vh)', overflowY: 'auto' }}>
        <div onTouchStart={() => setOrgInfo(true)} className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
        <div className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
        <div className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
        <div className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
        <div className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
        <div className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
        <div className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
        <div className='h-[11rem] w-[11rem] rounded-3xl bg-white'></div>
      </div>

      <div className='w-screen fixed left-0 pt-[10%] px-3 bottom-0 h-[20%]'>
        <div className='h-[5rem] border-black flex items-center justify-around border-[1px] bg-white rounded-full'>
          <div className='h-[4rem] bg-black w-[4rem]'></div>
          <div className='h-[4rem] bg-black w-[4rem]'></div>
          <div className='h-[4rem] bg-black w-[4rem]'></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
