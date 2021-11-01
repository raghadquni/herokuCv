import React from "react";
import Personal from './component/Personal';
import About from './component/About';
import Education from './component/Education';
import  WorkExperince from './component/ WorkExperince';

import './App.css'

const App = () => {
  return (
    <>
    <Personal />


    <aside className='sideRight'>
    <About />
    <WorkExperince />

    </aside>
    </>

  )
}
  
export default App;
