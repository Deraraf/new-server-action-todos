"use server"

import { revalidatePath } from "next/cache"
import Todo from "./model/db"


export async function Create(prevState:any,formData:FormData) {
    "use server"
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
    "use server"
    const input = formData.get('input') as string
    const inputId = formData.get('inputid') as string
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

  }
 export async function deleteItems(formData:FormData) {
  "use server"
  const inputId = formData.get('inputid') as string
  await Todo.deleteOne({ _id: inputId })

   revalidatePath('/todos')
 }