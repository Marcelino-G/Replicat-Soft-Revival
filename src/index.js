import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));

const featuredReplicats = document.getElementsByClassName('replicat');
const featuredCircles = document.getElementsByClassName("circle")
let i = 0;
let slideShow;

const slideForward = () => {
  featuredReplicats[i].classList.remove('active')
  featuredCircles[i].classList.remove('activeCircle')
  i++;
  if (i === featuredReplicats.length){
    i = 0;
    featuredReplicats[i].classList.add('active')
    featuredCircles[i].classList.add('activeCircle')
    return
  }
  featuredReplicats[i].classList.add('active')
  featuredCircles[i].classList.add('activeCircle')
}

const slideBackward = () => {
  featuredReplicats[i].classList.remove('active')
  featuredCircles[i].classList.remove('activeCircle')
  i--;
  if (i === -1){
    i = 2;
    featuredReplicats[i].classList.add('active')
    featuredCircles[i].classList.add('activeCircle')
    return
  }
  featuredReplicats[i].classList.add('active')
  featuredCircles[i].classList.add('activeCircle')
}

const slideCircle = (x) => {
  featuredReplicats[i].classList.remove('active')
  featuredCircles[i].classList.remove('activeCircle')
  i= x;
  featuredReplicats[i].classList.add('active')
  featuredCircles[i].classList.add('activeCircle')
}

if (window.innerWidth < 1000){
  clearInterval(slideShow)
  slideShow = setInterval(slideForward, 5000)
}
let windowSize = window.matchMedia('(min-width: 1000px)')
windowSize.addEventListener('change', (media) => {
  if(media.matches){
    clearInterval(slideShow)
  } else {
    clearInterval(slideShow)
    slideShow = setInterval(slideForward, 2000)
  }
})

const Parent = () => {

  const [hamToggle, setHamToggle] = useState(false); 
  
  useEffect(() => {
    const nav = document.querySelector('nav');
    const ham = document.querySelector('#hamburger')
    switch (hamToggle){
      case true: 
        nav.style.display = 'initial'
        ham.classList.add('pressedHam')
        break
      case false:
        nav.style.display = 'none'
        ham.classList.remove('pressedHam')
        break
    }
  }, [hamToggle])

  const handleOnClickHamburgerAndNavLinks = () => {
    setHamToggle(!hamToggle)
  }

  const handleOnSubmit = (e) =>{
    e.preventDefault();
  }

  const handleOnClickNext = () => {
    clearInterval(slideShow)
    slideForward();
  }

  const handleOnClickBack = () => {
    clearInterval(slideShow)
    slideBackward();
  }

  

  const handleOnClickFeaturedCircleOrder = (e) => {
    if (e.target.tagName !== "BUTTON"){
      return
    }
    clearInterval(slideShow)
    slideCircle(e.target.id)
  }

  return (
    <div>
      <App 
      hamburger = {handleOnClickHamburgerAndNavLinks}
      subscribe = {handleOnSubmit}
      next = {handleOnClickNext}
      back = {handleOnClickBack}
      featuredCircle = {handleOnClickFeaturedCircleOrder}
      />
    </div>
  )

}

root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);


