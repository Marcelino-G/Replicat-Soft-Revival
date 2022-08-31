import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const featuredReplicats = document.getElementsByClassName('replicat');
let i = 0;
let slideShow;

const slide = () => {
  featuredReplicats[i].classList.remove('active')
  i++;
  if (i === featuredReplicats.length){
    i = 0;
    featuredReplicats[i].classList.add('active')
    return
  }
  featuredReplicats[i].classList.add('active')
}

if (window.innerWidth < 1000){
  slideShow = setInterval(slide, 2000)
}
let windowSize = window.matchMedia('(min-width: 1000px)')
windowSize.addEventListener('change', (media) => {
  if(media.matches){
    clearInterval(slideShow)
  } else {
    clearInterval(slideShow)
    slideShow = setInterval(slide, 2000)
  }
})

const Parent = () => {

  const [hamToggle, setHamToggle] = useState(false);

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


