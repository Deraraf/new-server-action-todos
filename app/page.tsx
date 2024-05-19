import Link from "next/link";


export default async function Home() {


  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-600 gap-y-4">
     <h1 className="text-white text-4xl">
      Server Action Project
     </h1>
     
     
      <div className="flex gap-x-3 items-center">
      <span className="text-2xl text-orange-600 bold">To See The Project</span>
      <Link href={"/todos"} className=" bg-white rounded-full text text-purple-800  px-2 py-1">
        Click Here
      </Link> 
      
      </div>
      
    </div>
  );
}


