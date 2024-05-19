"use client"

import React, { useRef } from 'react'

export interface Todo {
  input: string;
  id: number;
}


const DefaultValueInput = ({todo} : { todo?: Todo['input'] }) => {
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