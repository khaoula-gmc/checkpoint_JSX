import React from 'react';
import logo from './logo.svg';
import './App.css';
import mySrcImage from './imageInSrc.png'
import './style.css'
import myVideo from './myVideo.mp4'

function App() {
  let title='Khaoula TOUATI';
 
  return (
    <div>
      <div style = {{border: 'solid 1 black' , maxWidth: '100 vw'}}>   
 
          <h1 className = 'title red'> {title} </h1> 
          <br/>   

          <img src = {mySrcImage} /> 
          <br/>

          <img src = '/imageInPublic.png'/>   
      </div>   

      <video width = '320' height = '240' controls>   

      <source src = {myVideo} type = 'video/mp4'/> 

      </video>
    </div>
  );
}

export default App;
