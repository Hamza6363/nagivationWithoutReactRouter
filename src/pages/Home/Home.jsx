import React, {useRef, useState} from 'react'

export default function Home() {
  
  const inputElement = useRef();


  return (
    <div>Home
      <form>
        <label htmlFor=""></label>
        <input ref={inputElement} type="text" onChange={(e)=>{console.log(inputElement)}}/>
      </form>
    </div>
  )
}
