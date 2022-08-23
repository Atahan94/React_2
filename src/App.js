import logo from './logo.svg';
import './App.css';
import ListE from './List/List.js';
import {Fragment} from "react";
import { useState } from 'react';

function App() {
  const listOfPeople = [
    {
      name:"jack",
      age:"18",
      id:"18282"
    },
    {
      name:"Samed",
      age:"28",
      id:"94566"
    },
    {
      name:"Yigit",
      age:"24",
      id:"51358"
    },
    {
      name:"Ulaş",
      age:"25",
      id:"71354"
    },
    {
      name:"Berkay",
      age:"25",
      id:"32662"
    },
    {
      name:"At",
      age:"21",
      id:"54852"
    },
  ];
   const [list, setList] = useState(listOfPeople);
  return (
    <Fragment>
    <h1>People</h1>
     <ListE List={list}/>
     <div className='buttonC'>
     <button onClick={() => {setList([])}}>Remove</button>
     </div>
    </Fragment>
  );
};

export default App;
