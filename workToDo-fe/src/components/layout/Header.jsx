import React from 'react'

function Header() {
  return (
    <div className='!z-[9999] h-[54px] sticky top-0 bg-white bg-opacity-80 w-full border-b'>
      <div className=' flex px-8 items-center justify-between max-w-[2400px] mx-auto'>
        <a href="" className=''><img className=' w-36 object-cover' src='/logo-dark.png' /></a>
       <div className=' flex gap-8 items-center'>
       <nav>
            <ul className=' flex gap-4 items-center text-normal-text h-[54px]'>
                <li><a href="" className=' transition-all hover:text-lg hover:underline p-1'>About</a></li>
                <li><a href="" className=' transition-all hover:text-lg hover:underline p-1'>Companies</a></li>
                <li><a href="" className=' transition-all hover:text-lg hover:underline p-1'>Contact</a></li>
            </ul>
        </nav>
        <div className=' w-[1.5px] h-7 bg-darkBlue'></div>
        <button className=' bg-midBlue text-sky-50 py-2 px-4 rounded transition-all hover:scale-105'>Log in</button>
       </div>
    </div>
    </div>

  )
}

export default Header