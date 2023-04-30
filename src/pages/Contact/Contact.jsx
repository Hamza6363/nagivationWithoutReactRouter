import React from 'react'

export default function Contact() {
  
  return (
    <form>
      <div className='form-group'>
        <label htmlFor="">Name</label>
        <input type="text" className='form-control'/>
      </div>
      <div className='form-group'>
        <label htmlFor="">Email</label>
        <input type="email" className='form-control'/>
      </div>
      <div className='form-group'>
        <label>Gender</label>

        <input type="checkbox" name="" id="male" />
        <label htmlFor="male">Male</label>
        <input type="checkbox" name="" id="female" />
        <label htmlFor="female">female</label>
      </div>
      <div className='form-group'>
        <button>Submit</button>
      </div>
    </form>
  )
}
