import React, { useReducer } from 'react'
import { useState } from 'react'


const formReducer = (state, action) =>{
  console.log(state, action);
  if(action.type === 'NAME_FIELD'){
    state.name = action.val;
    return state;
  }
  if(action.type === 'EMAIL_FIELD'){
    state.email = action.val;
    return state;
  }
  if(action.type === 'MALE_CHECKBOX'){
    state.gender = action.val;
    return state;
  }
  return state;
}

export default function Contact(props) {
  const formInitalState = {
    name: "",
    email: "",
    gender: ""
  }
  
  const [formState, dispatch]= useReducer(formReducer, formInitalState);

  const submitHandler = (e) =>{
    e.preventDefault();

    const data = {
      name: formState.name,
      email: formState.email,
      gender: formState.gender
    }
    props.formSubmitData(data);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='form-group'>
        <label htmlFor="">Name</label>
        <input type="text" className='form-control' onChange={(e)=>dispatch({type: 'NAME_FIELD', val: e.target.value})}/>
      </div>
      <div className='form-group'>
        <label htmlFor="">Email</label>
        <input type="email" className='form-control' onChange={(e)=>dispatch({type: 'EMAIL_FIELD', val: e.target.value})}/>
      </div>
      <div className='form-group'>
        <label>Gender</label>
        <input type="checkbox" name="" id="male" onChange={(e)=>dispatch({type: 'MALE_CHECKBOX',  val: e.target.id})} />
        <label htmlFor="male">Male</label>
        <input type="checkbox" name="" id="female" onChange={()=>dispatch({type: 'FEMALE_CHECKBOX'})} />
        <label htmlFor="female">female</label>
      </div>
      <div className='form-group'>
        <button>Submit</button>
      </div>
    </form>
  )
}
