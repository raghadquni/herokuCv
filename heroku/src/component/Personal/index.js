import React from "react";
import './style.css'


const Personal = () => {
return (
  <div className="container">
      <aside>
      <div className="inner">
  <h1>Raghad Alquni</h1>
  <h2>Senior Front End Developer</h2>
  <hr></hr>
  <h5>Saudi Arabia, Alqassim</h5>
  <a href ="mailto: RaghadAlquni@gmail.com">RaghadAlquni@gmail.com</a>
  <hr></hr>
  <ul className="profileLinks text-center">
        <li><a href= 'https://twitter.com/'> twitter</a></li>
        <li><a href='https://github.com/'> github </a></li>
      </ul>

  <p> I built this site with React components and Resume Schema. The full source code can be found in <a href= "https://github.com/raghadquni/herokuCv.git"> my Github repo. </a></p>
  </div>
  </aside>
</div>        


  
  );
}

export default Personal;
