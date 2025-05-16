import React from 'react'

function header({handleSetModal}) {
  return (
    <div className='w-10/12 p-4 rounded-full  flex justify-between items-center bg-[hsl(232.7,27.3%,23.7%)] m-auto'>
        <h4 className='font-bold text-white'>On_chainVerse</h4>
        <button onClick={handleSetModal} className='rounded-full font-bold text-white bg-[hsl(205.1,100%,36.1%)] p-4'>connect wallet</button>
    </div>
  )
}

export default header