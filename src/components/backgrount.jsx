import React from 'react'

function backgrount() {
  return (
    <div className='fixed w-full h-screen z-2 '>
      <div className='absolute flex justify-center w-full py-8 text-2xl font-semibold top-9 text-zinc-400'>Documet </div>
      <h1 className='absolute font-semibold -translate-x-[50%] text-9xl top-1/2 left-1/2  -translate-y-[50%] text-zinc-900  leading-none tracking-tighter'>Docs</h1>
    </div>
  )
}

export default backgrount
