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


const addActiveFeaturedClasses = () => {
  featuredReplicats[i].classList.add('active')
  featuredCircles[i].classList.add('activeCircle')
}

const removeActiveFeaturedClasses = () => {
  featuredReplicats[i].classList.remove('active')
  featuredCircles[i].classList.remove('activeCircle') 
}

const autoSlideForward = () => {
  removeActiveFeaturedClasses();
  i++
  if (i === featuredReplicats.length){
    i = 0;
    addActiveFeaturedClasses();
    return
  }
  addActiveFeaturedClasses();
}

const handleOnClickSlideControl = (e) => {
  clearInterval(slideShow);
  removeActiveFeaturedClasses();

  if(e.target.classList.contains('backFeatured')){
    i--
    if (i === -1){
      i = 2;
      addActiveFeaturedClasses();
      return
    }
  } else if (e.target.classList.contains('nextFeatured')){
    i++
    if (i === featuredReplicats.length){
      i = 0;
      addActiveFeaturedClasses();
      return
    }
  }

  addActiveFeaturedClasses();
}







// const slideForward = () => {
//   featuredReplicats[i].classList.remove('active')
//   featuredCircles[i].classList.remove('activeCircle')
//   i++;
//   if (i === featuredReplicats.length){
//     i = 0;
//     featuredReplicats[i].classList.add('active')
//     featuredCircles[i].classList.add('activeCircle')
//     return
//   }
//   featuredReplicats[i].classList.add('active')
//   featuredCircles[i].classList.add('activeCircle')
// }

// const slideBackward = () => {
//   featuredReplicats[i].classList.remove('active')
//   featuredCircles[i].classList.remove('activeCircle')
//   i--;
//   if (i === -1){
//     i = 2;
//     featuredReplicats[i].classList.add('active')
//     featuredCircles[i].classList.add('activeCircle')
//     return
//   }
//   featuredReplicats[i].classList.add('active')
//   featuredCircles[i].classList.add('activeCircle')
// }

const slideCircle = (x) => {
  removeActiveFeaturedClasses();
  i= x;
  addActiveFeaturedClasses();
}

const landScapeOR = window.matchMedia('(orientation: landscape)')
const portraitOR = window.matchMedia('(orientation: portrait)')
const smWindowWidth = window.matchMedia('(max-width: 767px)')

if(portraitOR.matches && smWindowWidth.matches){
  clearInterval(slideShow)
  slideShow = setInterval(autoSlideForward, 5000)
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

  const handleOnClickHamburgerAndNavLinks = () => {
    if(!smWindowWidth.matches){
      return
    } else if (hamToggle === null){
      setHamToggle(true)
    } else {
      setHamToggle(!hamToggle)
    }
  }

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

  const handleOnSubmit = (e) =>{
    e.preventDefault();
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

  return (
    <div>
      <App 
      hamburger = {handleOnClickHamburgerAndNavLinks}
      subscribe = {handleOnSubmit}
      // nextFeatured = {handleOnClickNext}
      // backFeatured = {handleOnClickBack}
      slideControl = {handleOnClickSlideControl}
      featuredCircle = {handleOnClickFeaturedCircleOrder}
      faq = {handleOnClickQuestion}
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


