"use client"

import React, { useRef } from 'react'

const DefaultValueInput = ({todo} :{todo:string}) => {
    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () => {
        if (inputRef.current) {
          inputRef.current.select();
        }
      };

  return (
    <input
    type="text" 
    name="input"
    defaultValue={todo} 
    className="border p-1 outline-none bg-gray-300 rounded-lg text-black "
    required
    ref={inputRef}
    onClick={handleClick}
   />
  )
}

export default DefaultValueInput