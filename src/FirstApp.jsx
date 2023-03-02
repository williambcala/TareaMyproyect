import React from "react";
import PropTypes from 'prop-types';
import { useState } from "react";

const FirstApp = ({value}) =>{
  const[counter,setCounter] = useState(value)

  const handleAdd = ()=>{
    setCounter (counter+1)
  }

  const handleSubsstract =()=>{
    setCounter (counter-1)
  }

  const reset =()=>{
    setCounter(value)
  }
  return(
    <>
    <><h1>Counter</h1></>
    <><span>{counter}</span></>
    <button onClick={ () =>handleAdd()}>+1</button>
    <button onClick={ () =>handleSubsstract()}>-1</button>
    <button onClick={ () =>reset()}>reset</button>

    </>
  )

  
  
}

  export default FirstApp
  