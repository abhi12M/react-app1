//StateDemo.js
import { useState, useEffect } from "react";
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';

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
            <ButtonToolbar aria-label="Toolbar with button groups">
      <ButtonGroup className="me-2" aria-label="First group">
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>4</Button>
      </ButtonGroup>
      <ButtonGroup className="me-2" aria-label="Second group">
        <Button>5</Button>
        <Button>6</Button>
        <Button>7</Button>
      </ButtonGroup>
      <ButtonGroup aria-label="Third group">
        <Button>8</Button>
      </ButtonGroup>
    </ButtonToolbar>
            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <p className="bg-warning">State 1: {state1}</p>
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
