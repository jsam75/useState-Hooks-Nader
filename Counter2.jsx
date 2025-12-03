import {useState} from "react";

function Counter2 () {
const [count, setCount] = useState(0);

function handleClick() {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1);
    

}

    return (
        <>
           <h1> {count} </h1>
           <button onClick={handleClick}>+</button>
        </>
    )
}

export default Counter2;

/* Observations:
1. The Counter2 component uses the useState hook to manage the count state.
2. The handleClick function is defined to increment the count state by 2 using two calls to setCount with functional updates.
3. The component renders an h1 element that displays the current count and a button that, when clicked, triggers the 
   handleClick function to update the count.
4. Using functional updates in setCount ensures that each increment is based on the most recent state value, allowing  
   for multiple updates in a single event handler.
5. The arrow functions are a way to clean up Ex2 and avoid repetition when updating state based on previous state.
*/