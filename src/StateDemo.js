//StateDemo.js
import { useState, useEffect } from "react";

const StateDemo = () => {
    const [state1, setState1] = useState(0);
    const [state2, setState2] = useState("hello");
    const [state3, setState3] = useState(true);

    console.log("Component state re-rendered");
    function handleState1() {
        setState1(state1 + 1);
    }
    useEffect(() => {
        console.log("State1 changed:", state1);
    }, [state1]);

    useEffect(() => {
        console.log("State2 changed:", state2);
    }, [state2]);

    useEffect(() => {
        console.log("State3 changed:", state3);
    }, [state3]);

    return (
        <div>
            <p>State 1: {state1}</p>
            <p>State 2: {state2}</p>
            <p>State 3: {state3 ? "True" : "False"}</p>
            <button onClick={handleState1}>Update State 1</button>
            <button onClick={() => setState2(state2 === "hello" ? "world" : "hello")}>
                Update State 2
            </button>
            <button onClick={() => setState3(!state3)}>Toggle State 3</button>
        </div>
    );
}

export default StateDemo;
