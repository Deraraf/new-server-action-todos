"use server"

import { revalidatePath } from "next/cache"
import Todo from "./model/db"

export async function Create(prevState:any,formData:FormData) {
    
   try {
    const input = formData.get('input') as string
    await new Todo({
      input
    }).save()

    revalidatePath('/todos')
   } catch (error) {
    return "faild to create "
   }
  }

 export async function edit(formData:FormData){
   
    const input = formData.get('input') as string
    const inputId = formData.get('inputid') as string
    try{
    const updatedTodo = await Todo.findOneAndUpdate(
      { _id: inputId },
      { $set: { input } },
      { new: true } // Return the updated document
    );
    if (updatedTodo) {
      console.log(`Todo with ID: ${inputId} updated`);
      revalidatePath('/todos'); // Assuming this revalidates the route
    } else {
      console.error(`Todo with ID: ${inputId} not found`);
    }
  }catch(error){
    return {
      error:"something went wrong"
    }
  }
}
 export async function deleteItems(formData:FormData) {
  
  const inputId = formData.get('inputid') as string
  await Todo.deleteOne({ _id: inputId })

   revalidatePath('/todos')
 }

 
