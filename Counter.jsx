import {useState} from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }
    function decreaseCount() {
        setCount(count - 1);
    }
    return (
        <>
        <h1>Counter : {count}</h1>
        <button onClick={decreaseCount}>-</button>
        <button onClick={increaseCount}>+</button>
        </>
    );
}

export default Counter;

/* Observations:
1. The Counter component uses the useState hook to manage the count state.  Without it, the count would not update on button clicks.
2. Two functions, increaseCount and decreaseCount, are defined to modify the count state.
3. The component renders the current count and two buttons to increase or decrease the count when clicked.
4. The return is JSX. Like HTML, the order of the buttons affects their display order.  I reordered them
    to have the decrement button on the left and increment button on the right.
*/