import React from 'react';
import { useCounter } from './useCounter';


const categories = ['first category', 'second category']




export const MyComponent=() => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
   
export const ComponentApp = () =>{
   
}
    return(
        <>

        <hi>GifExpert</hi>
        
        <ol>
            {
                categories.map(
                    (category,key) =>
                    {
                        return <li key = {key}>{category}</li>
                    }
                )
            }
        </ol>
             
        
        </>
    )



        
        
