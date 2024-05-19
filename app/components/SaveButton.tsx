"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'

const SaveButton = () => {
    const {pending} = useFormStatus()
  return (
    <button type="submit" className="bg-slate-900 text-orange-600 px-3 rounded-full hover:bg-slate-950 border-none"> {pending ? "saving..." : "save"} </button>
  )
}
export default SaveButton