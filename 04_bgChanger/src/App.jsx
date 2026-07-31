import { useState } from 'react'
import './App.css'


function App() {

  const[color, setColor] = useState("black");

  return (
    <>

    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}> 
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
            <div className=" flex flex-wrap justify-center items-center  gap-7  h-20 shadow-2xl rounded-full bg-gray-100/80 backdrop-blur-md px-4 py-2">

            <button
                onClick={()=>setColor("red")}
                type="button"
                className="min-h-12 px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800 " style={{backgroundColor:"red", border:"1px solid black"}}>
                Red
          </button>

          <button
                onClick={()=>setColor("blue")}
                type="button"
                className="min-h-12 px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800"style={{backgroundColor:"blue", border:"1px solid black"}}>
                Blue
          </button>

          <button
                onClick={()=>setColor("violet")}
                type="button"
                className="min-h-12 px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800"style={{backgroundColor:"violet", border:"1px solid black"}}>
                Violet
          </button>
          
          <button
                onClick={()=>setColor("green")}
                type="button"
                className="min-h-12 px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"green", border:"1px solid black"}}>
                Green
          </button>

          <button
                onClick={()=>setColor("skyblue")}
                type="button"
                className="min-h-12 px-4  active:scale-105 scale-110 active:transition-all duration-50 font-semibold rounded-full bg-gray-100 text-gray-800" style={{backgroundColor:"skyblue", border:"1px solid black"}}>
                Sky Blue
          </button>

            </div>
        </div>
     </div>
    
    </>
  )
}

export default App
