import { useState } from "react";
import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";

const Counter2 = ({}) => {
    const [count, setCount] = useState(0);
    const handleIncrement = () => {
        setCount((count) => count + 1);
    }
    const handleDecrement = () => {
        setCount((count) => count - 1);
    }
    const handleReset = () => {
        setCount(0);
    }
    return (
        <>
            <CountDisplay count={count} />
            <CountButton
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
                handleReset={handleReset}
            />
        </>
    );
};

export default Counter2;