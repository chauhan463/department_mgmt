import { useState } from "react";



const Post =() =>{

    return(
  
    <div className="bg-neutral-800 w-full h-screen flex flex-col items-center justify-center">


        <div className="text-white text-lg">
            Login
        </div>

  
        <form action="" method="post"className="flex flex-col gap-4 bg-white h-auto p-10 m-10 items-center justify-center" >

            <div className="p-2">
            <label htmlFor="uname">Username : </label>
            <input className="border-2 border-black" type="text" name="title" id="" />
            </div>

            <div className="p-2"> 
            <label htmlFor="pwd">Password : </label>
            <input className="border-2 border-black" type="password" name="title" id="" />
            </div>
            <button className="p-2  w-20 bg-blue-800 text-white rounded">Submit</button>

        </form>


        <div >
            <span className="text-red-400">  Not registered? Register here </span>
        </div>
     
 

    </div>)
}

export default Post;