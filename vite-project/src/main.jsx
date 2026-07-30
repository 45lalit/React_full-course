import React from "react";
// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// function Hitman(){
//   return (
//     <h1>Rohit Sharma hits the longest sixes </h1>
//   );
// }

// const ReactElement = {
//   type: 'a' ,
//   props: {
//     href: 'https://www.google.com',
//     target : '_blank'
//   } ,

//   Children : 'click here to visit google' 
// }

// const AnotherElement = (
//   <a href="https://www.google.com" target="_blank">click here to visit google</a> 
// );

// const reactElement  = React.createElement(
//   'a' ,
//   {href:'https://www.google.com', target:'_blank'} ,
//   'click here to visit google'

// ) 



const reactElement = React.createElement(
  'a',
  {
    href: 'https://www.google.com',
    target: '_blank'
  },
  'click here to visit google'
);
createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <Hitman /> */}
    {reactElement}
    {/* {AnotherElement} */}
  </>
)
 