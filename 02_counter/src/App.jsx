
import './App.css'
import { useState } from 'react'

function App() {
  // let counter = 45 ;
  // let addValue = () => {
  //   counter = counter+1 ;
  // }
  // let removeValue = () => {
  //   counter = counter-1 ;
  // }
  const[counter, setCounter ] = useState(5);

  const addValue = () => {

    if (counter === 100) {
      alert("Counter value cannot exceed 100");
      return;
    }
    setCounter(c => c + 1);
  };

  const removeValue = () => {

    if (counter === 0) {
      alert("Counter value cannot be less than 0");
      return;
    }
    setCounter(c => c - 1);
  };

      return (
    <>
     <h1>Rohit Sharma Sixes Count </h1> 
     <h2>Counter value : {counter} </h2>
      <div id="container">
     <button id= "add"
     onClick={addValue}>Add value</button>
     <br />

     <button id="remove"
     onClick={removeValue}>Remove value </button>
     </div>
    </>
  )
}

export default App
