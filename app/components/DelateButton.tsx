"use client"

import React from 'react'
import { useFormStatus } from 'react-dom'

const DelateButton = () => {
    const {pending} = useFormStatus()
  return (
    <button  className="bg-red-800 px-3 rounded-full border-none hover:bg-[crimson] py-1 "> {pending ? "Deleting..." : "Delate"} </button>
  )
}

export default DelateButton