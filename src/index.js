import React, { useRef } from 'react';
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

const questions = document.getElementsByClassName('question')
const answers = document.getElementsByClassName('answer')








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

const landScape = window.matchMedia('(orientation: landscape)')
const portrait = window.matchMedia('(orientation: portrait)')
let windoww = window.matchMedia('(max-width: 767px)')
if(portrait.matches && windoww.matches){
  clearInterval(slideShow)
  slideShow = setInterval(slideForward, 5000)
}



const Parent = () => {

  const [hamToggle, setHamToggle] = useState(null); 
  
  useEffect(() => {
    const nav = document.querySelector('nav');
    const ham = document.querySelector('#hamburger');
    switch (hamToggle){
      case null: 
        break
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

  landScape.addEventListener('change', (media) => {
    const nav = document.querySelector('nav');
    const ham = document.querySelector('#hamburger');
    setHamToggle(null)
    if (media.matches && window.innerWidth < 768){
      nav.style.display = 'none'
      ham.classList.remove('pressedHam')
      clearInterval(slideShow)
    } else if (media.matches){
      nav.style.display = 'initial'
      clearInterval(slideShow)
    } else if (!media.matches && window.innerWidth < 768){
      nav.style.display = 'none'
      ham.classList.remove('pressedHam')
      clearInterval(slideShow)
      slideShow = setInterval(slideForward, 5000)
    }
  })
  
  windoww.addEventListener('change', (media) => {
    const nav = document.querySelector('nav');
    const ham = document.querySelector('#hamburger');
    if (media.matches && portrait.matches){
      setHamToggle(null)
      nav.style.display = 'none'
      ham.classList.remove('pressedHam')
      clearInterval(slideShow)
      slideShow = setInterval(slideForward, 5000)
    } else{
      setHamToggle(null)
      nav.style.display = 'initial'
      clearInterval(slideShow)
    }
  })

  const handleOnClickHamburgerAndNavLinks = () => {
    if(!windoww.matches){
      return
    } else if (hamToggle === null){
      setHamToggle(true)
    } else {
      setHamToggle(!hamToggle)
    }
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

  const handleOnClickQuestion = (e) => {
    if(e.target.classList.contains('answer')){
      for (let i = 0; i < questions.length; i++){
        answers[i].classList.remove('stinkyAnimation');
        questions[i].classList.remove('removeListShadow');
      }
      return

    } else if (!e.target.classList.contains('question')){
      return

    } else if (e.target.nextElementSibling.classList.contains('stinkyAnimation')){
      e.target.nextElementSibling.classList.remove('stinkyAnimation')
      e.target.classList.remove('removeListShadow')
      return
    }

    for (let i = 0; i < questions.length; i++){
      answers[i].classList.remove('stinkyAnimation');
      questions[i].classList.remove('removeListShadow');
    }

    e.target.classList.add('removeListShadow')
    let pElement = e.target.nextElementSibling
    pElement.classList.add('stinkyAnimation')
  }

  // const handleOnClickMes = (e) => {
  //   let eldonMes = document.getElementById('eldonMessage')
  //   let mes = e.target.textContent
  //   let mesArray = Array.from(mes)

  //   for(let i=0; i<mesArray.length; i++){
  //     let letter = document.createElement('p')
  //     if (mesArray[i] === " "){
  //       letter.textContent = '\u00A0';
  //     } else {
  //       letter.textContent = mesArray[i]
  //     }

  //     if (i % 6 === 0){
  //       letter.classList.add('fun')
  //     } else if (i % 5 === 0) {
  //       letter.classList.add('fun1')
  //     } else if (i % 4 === 0){
  //       letter.classList.add('fun2')
  //     } else if (i % 3 === 0){
  //       letter.classList.add('fun3')
  //     } else if (i % 2 === 0){
  //       letter.classList.add('fun4')
  //     } else if (i % 1 === 0){
  //       letter.classList.add('fun5')
  //     }

  //     eldonMes.append(letter)
  //   }
  // }

  const brainPic = useRef(null)
  const cameraPic = useRef(null)
  const brushPic = useRef(null)
  useEffect(() => {


    if (!windoww.matches && window.innerHeight > 900){
      const observer = new IntersectionObserver(([entry]) => {
        console.log(entry.isIntersecting)
        console.log(observer)
        if(entry.isIntersecting){
          entry.target.classList.add('glideUp')
          
        }
        
        
      }, {
        root: null,
        rootMargin: '0px 0px 20px 0px',
        threshold: .01
      })
  
      if(brainPic.current && cameraPic.current && brushPic.current){
        observer.observe(brainPic.current)
        observer.observe(cameraPic.current)
        observer.observe(brushPic.current)
      }
      return () => {
        observer.unobserve(brainPic.current)
        observer.unobserve(cameraPic.current)
        observer.unobserve(brushPic.current)
      }
    }

    
    
  }, [])

  return (
    <div>
      <App 
      hamburger = {handleOnClickHamburgerAndNavLinks}
      subscribe = {handleOnSubmit}
      next = {handleOnClickNext}
      back = {handleOnClickBack}
      featuredCircle = {handleOnClickFeaturedCircleOrder}
      question = {handleOnClickQuestion}
      // mes = {handleOnClickMes}
      brain = {brainPic}
      camera = {cameraPic}
      brush = {brushPic}
      />
    </div>
  )

}

root.render(
  <React.StrictMode>
    <Parent />
  </React.StrictMode>
);


