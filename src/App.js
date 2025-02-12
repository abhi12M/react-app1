import { useEffect, useState } from 'react';
import './App.css';
import Box from './Box';
import StateDemo from './StateDemo';
import ListComponent from './ListComponent';
import FormComponent from './FormComponent';
import ConditionalComponent from './ConditionalComponent';
import Parent from './parent_child/Parent';
import { Counter } from './features/counter/Counter';
import { get } from './api';
import Navigation from './Navigation';
import { Route, Routes } from 'react-router-dom';
import UserProfile from './PropTypeChecking';
import RefForward from './RefForwarding';
import MaterialComponent from './MaterialComponent';

function App() {
  const list = [2, 34, 5];
  const [data, setData] = useState('');
  const fruit = 'Apple';
  const [rd, setRd] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        let endpoint = process.env.REACT_APP_PRODUCTION === 'true' ? '/todos' : 'todos/1';
        const response = await get(endpoint);
        console.log(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleClick = () => {
    alert('Button clicked!');
  };

  const handleDataFromChildToParent = (childData) => {
    setData(childData);
  };

  return (
    <>
      <h1>check: {rd}</h1>
      <button onClick={() => setRd(Math.floor(Math.random() * 100) + 1)}>click</button>
      <Navigation />
      <Routes>
        <Route path="/" element={<StateDemo />} />
        <Route path="/state" element={<StateDemo />} />
        <Route path="/list" element={<ListComponent list={list} />} />
        <Route path="/form" element={<FormComponent />} />
        <Route path="/parent/:id" element={<Parent />} />
      </Routes>
      <MaterialComponent/>

      <h1 style={{ color: 'red' }}>Hello, World! {fruit}</h1>
      <p onClick={handleClick} >Welcome to JSX rules.</p>
      <p>data from child {data}</p>
      <hr />
      <Box text="hi">
        <h2>Content inside the Box</h2>
        <p>This is nested content inside the Box component.</p>
      </Box>
      <Box sentToParent={handleDataFromChildToParent}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
      </Box>
      <StateDemo />
      <ListComponent list={list} />
      <FormComponent />
      <ConditionalComponent />
      <Parent />
      <br />
      <Counter />
      <UserProfile name={'sw'} age={22} fruits={['mango', 'apple']} users={{ 'name': 'ab', 'class': 'B' }} />
      <RefForward />
    </>
  );
}

export default App;
