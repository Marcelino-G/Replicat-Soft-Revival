import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const Parent = () => {

  const [hamToggle, setHamToggle] = useState(false);
  const [slideShowReplicat,setSlideShowReplicat] = useState()

  if(window.innerWidth < 1000){
    const featuredReplicats = document.getElementsByClassName('replicat')
    console.log(featuredReplicats)
  }




  useEffect(() => {
    switch (hamToggle){
      case true: 
        document.querySelector('nav').style.display = 'initial'
        break
      case false:
        document.querySelector('nav').style.display = 'none'
        break
    }
  }, [hamToggle])

  const handleOnClickHamburger = () => {
    setHamToggle(!hamToggle)
  }

  return (
    <div>
      <App 
      hamburger = {handleOnClickHamburger}
      />
    </div>
  )

}

root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);


