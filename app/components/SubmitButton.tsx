"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'

const SubmitButton = () => {
    const {pending} = useFormStatus()
  return (
    <button 
    className="bg-slate-900  rounded-full mt-2 text-orange-600 py-2 hover:bg-slate-950 w-[60%] m-auto" 
    type="submit">
        Submit {pending && "..."}
    </button>
  )
}

export default SubmitButton