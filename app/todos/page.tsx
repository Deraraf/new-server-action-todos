import React from 'react'
import prisma from '../db';
import { deleteItems, edit } from '../action';
import SaveButton from '../components/SaveButton';
import DelateButton from '../components/DelateButton';
import FormElement from '../components/Form';
import Link from 'next/link';
import DefaultValueInput from '../components/DefaultValueInput';


const getData = async() =>{
  const data = await prisma.todo?.findMany({
    select:{
      input:true,
      id:true
    },
    orderBy:{
      createdAt:"desc"
    }
  })
  return data
}

const Todos =async () => {
 const data = await getData()

  return (
    <div className="h-screen w-screen flex flex-col gap-y-4 justify-center items-center">
      <h1 className='text-4xl text-red-600 shadow-2xl'>Add Todos</h1>
      <div className="rounded-lg w-[40vw] shadow-2xl p-5">

      
       <FormElement />
       
       <div className="flex flex-col mt-2 gap-y-2 items-center justify-center w-full">
          
          {data.map(todo =>(
          <div key={todo.id} className='flex items-center justify-center w-full h-full gap-x-2 '>
            <form className="flex gap-x-2 " action={edit} >
              <input name="inputid" type = "hidden" value={todo.id} />
              <DefaultValueInput todo = {todo.input} />
              <SaveButton />              
            </form>
            <form action={deleteItems} className='flex'>
              <input name="inputid" type = "hidden" value={todo.id} />
              <DelateButton />
            </form>
          </div>
          )
          )}
         </div>

     </div>
     <Link 
      href={"/"}
      className='text-xl text-orange-600 rounded-full bg-slate-900 px-3 py-1 hover:bg-slate-950 shadow-lg'>
      Go Back
    </Link>
  </div>
  )
}

export default Todos