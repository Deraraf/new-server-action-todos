"use client"

import React, { useRef } from 'react'
import { Create } from '../action'
import SubmitButton from './SubmitButton'
import { useFormState } from 'react-dom'

const FormElement = () => {
    const formRef = useRef<HTMLFormElement>(null)
    const inputRef = useRef<HTMLInputElement>(null);
     const [state,formAction] = useFormState(Create,null)
     
    const handleClick = () => {
      if (inputRef.current) {
        inputRef.current.select();
      }
    };

  return (
    <form action={async(formData:FormData) =>{
       formAction(formData)
       formRef.current?.reset()
    }}className="flex flex-col justify-center" ref={formRef}>

    <input 
    type="text"
     name="input"
    className=" p-1 w-[80%] m-auto rounded-md outline-none bg-slate-300"
     required 
     ref={inputRef}
     onClick={handleClick}
     />

    <SubmitButton />
    
       <p className='text-red-500'>{state}</p>
  </form>
  )
}

export default FormElement