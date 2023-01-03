import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Functioncomponent from "./head"
import Clascomponent from './classcom';
import Numcomponent from './num';

const root = ReactDOM.createRoot(document.getElementById('root'));





const TimeComponent=()=>{
  return (<p> {new Date().toISOString()}{<Clascomponent greet="Hello" />} </p>)
}
setInterval(()=>{
root.render(<React.StrictMode>
<Functioncomponent greet="Hello all to my 1st React page"/> <TimeComponent/>
<Numcomponent/>
  </React.StrictMode>)},100)

