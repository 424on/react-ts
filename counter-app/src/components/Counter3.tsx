import { useReducer } from "react";

import counterReducer from "../reducer/countReducer.tsx";

const Counter3 = () => {
    const [count, countDispatch] = useReducer(counterReducer, 0)
    return (
        <>
            <h1>count : {count}</h1>
            <button onClick={()=> countDispatch({type: "INCREMENT"})}>Increment</button>
            <button onClick={()=> countDispatch({type: "DECREMENT"})}>Decrement</button>
            <button onClick={()=> countDispatch({type: "RESET"})}>Reset</button>
        </>
    );
};

export default Counter3;