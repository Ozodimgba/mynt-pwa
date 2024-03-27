import React from 'react';
import Home from './Home';
import Discover from './Discover';
import Profile from './Profile';
import { BiSolidHomeAlt2 } from "react-icons/bi";
import { FaCompass } from "react-icons/fa";
import { GoPersonFill } from "react-icons/go";


function Navigation() {
  const [ currentScreen, setCurrentScreen] = React.useState<number>(0)

  const Screens = [
    <Home />,
    <Discover />,
    <Profile />
  ]
  return (
    <div className='h-screen w-screen overflow-hidden bg-black text-white p-5'>
      {Screens[currentScreen]}
      <div className='w-screen fixed left-0 pt-[10%] z-50 px-3 bottom-0 h-[20%]'>
        <div className='h-[5rem] border-black flex items-center justify-around border-[1px] bg-white rounded-full'>
          <div onClick={() => setCurrentScreen(0)} className='h-[4rem] flex justify-center items-center w-[4rem]'>
            <BiSolidHomeAlt2 size={35} color='black' />
          </div>
          <div onClick={() => setCurrentScreen(1)} className='h-[4rem] flex justify-center items-center w-[4rem]'>
            <FaCompass size={35} color='black' />
          </div>
          <div onClick={() => setCurrentScreen(2)} className='h-[4rem] flex justify-center items-center w-[4rem]'>
            <GoPersonFill size={35} color='black' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
