import React, { useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from './routes/root';
import ErrorPage from "./error-page";
import App from './routes/App';
import AboutUs from './routes/aboutus';




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [{
      path: "Replicat-Soft-Revival",
      element: <App/>
    },
    {
      path: "About-us",
      element: <AboutUs/>
    }]
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));



const featuredReplicats = document.getElementsByClassName('replicat');
const featuredCircles = document.getElementsByClassName("circle")
let currentCat = 0;
let slideShow;

const addActiveFeaturedClasses = () => {
  featuredReplicats[currentCat].classList.add('active')
  featuredCircles[currentCat].classList.add('activeCircle')
}
const removeActiveFeaturedClasses = () => {
  featuredReplicats[currentCat].classList.remove('active')
  featuredCircles[currentCat].classList.remove('activeCircle') 
}

// function used in interval for slideshow
const autoSlideForward = () => {
  removeActiveFeaturedClasses();
  currentCat++
  if (currentCat === featuredReplicats.length){
    currentCat = 0;
    addActiveFeaturedClasses();
    return
  }
  addActiveFeaturedClasses();
}

// button control for slideshow (forward/back)
const handleOnClickSlideControl = (e) => {
  clearInterval(slideShow);
  removeActiveFeaturedClasses();

  if(e.target.classList.contains('backFeatured')){
    currentCat--
    if (currentCat === -1){
      currentCat = 2;
      addActiveFeaturedClasses();
      return
    }
  } else if (e.target.classList.contains('nextFeatured')){
    currentCat++
    if (currentCat === featuredReplicats.length){
      currentCat = 0;
      addActiveFeaturedClasses();
      return
    }
  }

  addActiveFeaturedClasses();
}

// function used in the handleOnClickFeaturedCircleOrder function
// so that circle and cat match in the slideshow order
const slideCircle = (x) => {
  removeActiveFeaturedClasses();
  currentCat = x;
  addActiveFeaturedClasses();
}

const landScapeOR = window.matchMedia('(orientation: landscape)')
const portraitOR = window.matchMedia('(orientation: portrait)')
const smWindowWidth = window.matchMedia('(max-width: 767px)')

// featured items slideshow automatically starts when this is met 
if(portraitOR.matches && smWindowWidth.matches){
  clearInterval(slideShow)
  slideShow = setInterval(autoSlideForward, 5000)
}

// these two are used down below in our
// handleOnClickQuestion function
const questions = document.getElementsByClassName('question')
const answers = document.getElementsByClassName('answer')

const Parent = () => {

  const [hamToggle, setHamToggle] = useState(null); 

  // determines the appearance of the nav
  // and hamburger button when the hamToggle state
  // is changed
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

  // changes the value of hamtoggle so the 
  // useeffect is started again
  const handleOnClickHamburgerAndNavLinks = () => {
    if(!smWindowWidth.matches){
      return
    } else if (hamToggle === null){
      setHamToggle(true)
    } else {
      setHamToggle(!hamToggle)
    }
  }

  // used for the landscapeOR, portraitOR, and smWindowWidth
  // event listeners ('change') to determine nav/hamburger appearance.
  const navHamAppearanceToggles = (navDisplay) => {
    const nav = document.querySelector('nav');
    const ham = document.querySelector('#hamburger');
    nav.style.display = navDisplay
    ham.classList.remove('pressedHam')
  }
  landScapeOR.addEventListener('change', (media) => {
    setHamToggle(null)
    if(media.matches && smWindowWidth.matches){
      navHamAppearanceToggles('none')
      clearInterval(slideShow)
    } else if (media.matches && !smWindowWidth.matches){
      navHamAppearanceToggles('initial')
      clearInterval(slideShow)
    } 
  })
  portraitOR.addEventListener('change', (media) => {
    setHamToggle(null)
    if (media.matches && smWindowWidth.matches){
      navHamAppearanceToggles('none')
      clearInterval(slideShow)
      slideShow = setInterval(autoSlideForward, 5000)
    } else if (media.matches && !smWindowWidth.matches){
      navHamAppearanceToggles('initial')
      clearInterval(slideShow)
    }
  })
  smWindowWidth.addEventListener('change', (media) => {
    setHamToggle(null)
    if(media.matches && landScapeOR.matches){
      navHamAppearanceToggles('none')
      clearInterval(slideShow)
    } else if (media.matches && portraitOR.matches){
      navHamAppearanceToggles('none')
      clearInterval(slideShow)
      slideShow = setInterval(autoSlideForward, 5000)
    } else if (!media.matches && landScapeOR.matches){
      navHamAppearanceToggles('initial')
      clearInterval(slideShow)
    } else if (!media.matches && portraitOR.matches){
      navHamAppearanceToggles('initial')
      clearInterval(slideShow)
    }
  })

  // changes the display of the cat AND circle
  // depending on circle clicked
  const handleOnClickFeaturedCircleOrder = (e) => {
    if (e.target.tagName !== "BUTTON"){
      return
    }
    clearInterval(slideShow)
    slideCircle(e.target.id)
  }

  // function that makes it that only one answer
  // from a question is selected and viewable at a time.
  const handleOnClickQuestion = (e) => {
    if(e.target.classList.contains('answer')){
      for (let i = 0; i < questions.length; i++){
        answers[i].classList.remove('answerRevealAnimation');
        questions[i].classList.remove('removeQuestionShadow');
      }
      return
    } else if (!e.target.classList.contains('question')){
      return
    }
    
    for (let i = 0; i < questions.length; i++){
      answers[i].classList.remove('answerRevealAnimation');
      questions[i].classList.remove('removeQuestionShadow');
    }

    let answerElement = e.target.nextElementSibling
    e.target.classList.add('removeQuestionShadow')
    answerElement.classList.add('answerRevealAnimation')
  }

  const brainPic = useRef(null)
  const cameraPic = useRef(null)
  const brushPic = useRef(null)

  // targets glide up in animation when the condition is met
  // and when they become visible in the viewport
  useEffect(() => {

    if (window.innerWidth > 767 && window.innerHeight > 549){

      const observer = new IntersectionObserver(([entry]) => {
        if(entry.isIntersecting){
          entry.target.classList.add('glideUp')
        } 
      }, {
        root: null,
        rootMargin: '0px 0px 15px 0px',
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

  const handleOnSubmit = (e) =>{
    e.preventDefault();
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
  // return (
  //   <div>
  //     <App 
  //     hamburger = {handleOnClickHamburgerAndNavLinks}
  //     subscribe = {handleOnSubmit}
  //     slideControl = {handleOnClickSlideControl}
  //     featuredCircle = {handleOnClickFeaturedCircleOrder}
  //     faq = {handleOnClickQuestion}
  //     // mes = {handleOnClickMes}
  //     brain = {brainPic}
  //     camera = {cameraPic}
  //     brush = {brushPic}
  //     />
  //   </div>
  // )
}

root.render(
  <React.StrictMode>
    {/* <Parent /> */}
    <RouterProvider router={router}/>
  </React.StrictMode>
);


