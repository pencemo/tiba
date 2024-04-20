import React from 'react'

function PopUp(props) {
  const open =(()=>{
    props.data2(!props.data)
  })

  
  return (
    <div onClick={open} className='fixed z-30 w-[100vw] inset-0 h-[100vh] bg-black text-white'>
      <h1>name</h1>
    </div>
  )
}

export default PopUp
