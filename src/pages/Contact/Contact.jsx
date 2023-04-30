import React from 'react'
import { useState } from 'react'
export default function Contact() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("")
  

  const submitHandler = (e) =>{
    e.preventDefault();

    const data = {
      name: name,
      email: email,
      gender: gender
    }

    console.log(data);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <label htmlFor="">Name</label>
        <input type="text" className='form-control' onChange={(e)=>setName(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label htmlFor="">Email</label>
        <input type="email" className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      <div className='form-group'>
        <label>Gender</label>
        <input type="checkbox" name="" id="male" onChange={(e)=> setGender(e.target.id) } />
        <label htmlFor="male">Male</label>
        <input type="checkbox" name="" id="female" onChange={(e)=> setGender(e.target.id)} />
        <label htmlFor="female">female</label>
      </div>
      <div className='form-group'>
        <button>Submit</button>
      </div>
    </form>
  )
}
