import React from 'react'

function PopUp(data) {
  return (
    <div className='fixed z-30 w-[100vw] inset-0 h-[100vh] bg-black text-white'>
      <h1>{data.name}</h1>
    </div>
  )
}

export default PopUp
