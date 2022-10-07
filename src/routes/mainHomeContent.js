import Imgs from "../imgs";
import { useRef } from "react";
import { useEffect } from "react";
import React from "react";

const featuredReplicats = document.getElementsByClassName('replicat');
const featuredCircles = document.getElementsByClassName("circle")
let currentCat = 0;
let slideShow;

const addActiveFeaturedClasses = () => {
  featuredReplicats[currentCat].classList.add('active')
  featuredCircles[currentCat].classList.add('activeCircle')
}
const removeActiveFeaturedClasses = () => {
  for (let i = 0; i < featuredReplicats.length; i++){
    featuredReplicats[i].classList.remove('active')
    featuredCircles[i].classList.remove('activeCircle')
  }
}
const featuredReset = () => {
  currentCat = 0;
  clearInterval(slideShow)
}

// function used in interval for slideshow
const autoSlideForward = () => {
  if (window.location.pathname !== '/Replicat-Soft-Revival' && window.location.pathname !== '/Replicat-Soft-Revival/'){
    featuredReset();
    return
  }

  if (currentCat === 2){
    removeActiveFeaturedClasses();
    currentCat = 0;
    addActiveFeaturedClasses();
    return
  } else {
    removeActiveFeaturedClasses();
    currentCat++
    addActiveFeaturedClasses();
  }
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

// changes the display of the cat AND circle
// depending on circle clicked
const handleOnClickFeaturedCircleOrder = (e) => {
  if (e.target.tagName !== "BUTTON"){
    return
  }
  clearInterval(slideShow)
  slideCircle(e.target.id)
}

// these two are used down below in our
// handleOnClickQuestion function
const questions = document.getElementsByClassName('question')
const answers = document.getElementsByClassName('answer')

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

function MainHomeContent(props) {

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
        if(brainPic.current && cameraPic.current && brushPic.current){
          observer.unobserve(brainPic.current)
          observer.unobserve(cameraPic.current)
          observer.unobserve(brushPic.current)
        } 
      }
    }
  }, [brainPic, cameraPic, brushPic])

  // featured items slideshow automatically starts when this is met 
  if(props.portraitOR.matches && props.smWindowWidth.matches){
    featuredReset();
    slideShow = setInterval(autoSlideForward, 5000)
  }

  props.landScapeOR.addEventListener('change', (media) => {
    if(media.matches && props.smWindowWidth.matches){
      featuredReset();
    } else if (media.matches && !props.smWindowWidth.matches){
        featuredReset();
    } 
  })
  props.portraitOR.addEventListener('change', (media) => {
    if (media.matches && props.smWindowWidth.matches){

      if (window.location.pathname !== '/Replicat-Soft-Revival' && window.location.pathname !== '/Replicat-Soft-Revival/'){
        featuredReset();
        return
      }

      featuredReset();
      removeActiveFeaturedClasses();
      addActiveFeaturedClasses();
      slideShow = setInterval(autoSlideForward, 5000)

    } else if (media.matches && !props.smWindowWidth.matches){
        featuredReset();
    }
  })
  props.smWindowWidth.addEventListener('change', (media) => {
    if(media.matches && props.landScapeOR.matches){
      featuredReset();
    } else if (media.matches && props.portraitOR.matches){

        if (window.location.pathname !== '/Replicat-Soft-Revival' && window.location.pathname !== '/Replicat-Soft-Revival/'){
          featuredReset();
          return
        }

        featuredReset();
        removeActiveFeaturedClasses();
        addActiveFeaturedClasses();
        slideShow = setInterval(autoSlideForward, 5000)
    } else if (!media.matches && props.landScapeOR.matches){
        featuredReset();
    } else if (!media.matches && props.portraitOR.matches){
        featuredReset();
    }
  })

  return (
    <div className="container-fluid row justify-content-center p-0 mx-auto">

      <main id='quote' className="row">
        <img id="bladeCity" src={Imgs.city} alt='Blade Runner city'/>
        <figure className="col-11">
          <blockquote>
            <p  id='eldonMessage' onClick={props.mes}>
            Early in the 21st Century, THE SIBER CORPORATION advanced Robot evolution into the 
            <dfn> NEXUS phase </dfn> — a being virtually identical to a cat — known as a Replicat. 
            The NEXUS 6 Replicats were superior in strength and agility, and at least equal in intelligence, 
            to the genetic engineers who created them... (later) Replicats were declared illegal on earth.
            This is their soft revival. 
            </p>
          </blockquote>
          <figcaption>
            — Eldon Siber
          </figcaption>
        </figure>
      </main>

      <div id='horse'>
        <div className="horn"></div>
        <div className="snout"></div>
        <div className="neck"></div>
        <div className="shoulder"></div>
        <div className="leg"></div>
      </div>
   
      <section id='featured' className="row justify-content-around">
        <h2>
          NEXUS Replicats
        </h2>
        <button aria-label="Go to previous featured item" className="col-2 backFeatured" onClick={handleOnClickSlideControl}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-left backFeatured" viewBox="0 0 16 16">
            <path className="backFeatured" d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
          </svg>
        </button>
        <ul className="col-8 col-md-12 list-group list-group-horizontal justify-content-center">
          <li className="col-md-3 col-lg-2 replicat active">
            <data value='Whirlwind'>
              <figure className="m-0">
                <picture>
                  <img className="img-fluid" src= {Imgs.modelLeon} alt='NEXUS Replicat (Whirlwind model)'/>
                </picture>
                <figcaption>
                  <h3>
                    Whirlwind
                  </h3>
                    Expect the filtering of toxic infested air
                </figcaption>
              </figure>
            </data>
          </li>

          <li className="col-md-3 col-lg-2 replicat">
            <data value='Tsunami'>
              <figure className="m-0">
                <picture>
                  <img className="img-fluid" src= {Imgs.modelPris} alt='NEXUS Replicat (Tsunami model)'/>
                </picture>
                <figcaption>
                  <h3>
                    Tsunami
                  </h3>
                    Expect the cleansing of stained concrete
                </figcaption>
              </figure>
            </data>
          </li>

          <li className="col-md-3 col-lg-2 replicat">
            <data value='Avalanche'>
              <figure className="m-0">
                <picture>
                  <img className="img-fluid" src= {Imgs.modelRoy} alt='NEXUS Replicat (Avalanche model)'/>
                </picture>
                <figcaption>
                  <h3>
                    Avalanche
                  </h3>
                    Expect the rearranging of mountains
                </figcaption>
              </figure>
            </data>
          </li>
        </ul>
        <button aria-label="Go to next featured item" className="col-2 nextFeatured" onClick={handleOnClickSlideControl}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-right nextFeatured" viewBox="0 0 16 16">
            <path className="nextFeatured" d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
          </svg>
        </button>

        <div id='circleSlideHolder' className="row justify-content-center" onClick={handleOnClickFeaturedCircleOrder}>
          <button aria-label="Featured circle order 1/3" id='0' className="col-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle circle activeCircle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>
          </button>
          <button aria-label="Featured circle order 2/3" id='1' className="col-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>
          </button>
          <button aria-label="Featured circle order 3/3" id='2' className="col-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-circle circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            </svg>
          </button>
        </div>
      </section>

      <section id="features">
        <h2>
          Features
        </h2>
        <ul className="list-group">
          <li className="row">
            <h3>
              Rapid Learning
            </h3>
            <figure className="row">
              <picture ref={brainPic} className="col-6">
                <img src= {Imgs.brain} alt='Rapid Learning (brain)'/>
              </picture>
              <figcaption className="col-5">
                Advanced environmental absorbing stimuli 
                processing chip that powers never-ending neuroplasticity  
              </figcaption>
            </figure>
          </li>

          <li className="row">
            <h3>
              Surveillance Systems
            </h3>
            <figure className="row">
              <picture ref={cameraPic} className="col-6">
                <img src= {Imgs.cam} alt='Surveillance Systems (camera)'/>
              </picture>
              <figcaption className="col-5">
                Five levels of procedures that
                prevent, warn, and eliminate any suspected life threatening scenarios
              </figcaption>
            </figure>
          </li>

          <li className="row">
            <h3>
              Chores Mode
            </h3>
            <figure className="row">
              <picture ref={brushPic} className="col-6">
                <img src= {Imgs.paint} alt='Chores Mode (paint brush)'/>
              </picture>
              <figcaption className="col-5">
                Hundreds of preloaded programmed skills that 
                are tailored towards everyday mundane tasks
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>

      <div id='faq' className="row">
        <img id="manSmirking" src={Imgs.questions} alt='Blade Runner (man smirking)'/>
        <section id='questions' className="row justify-content-center">
          <h2>
            FAQ
          </h2>
          <ul className="row justify-content-evenly col-lg-10 col-xl-8" onClick={handleOnClickQuestion}>
            <li className="col-6">
              <p className="question col-sm-10">
                What is the refund policy?
              </p>
              <p className="answer col-10 col-sm-8">
                The Replicat can only be refunded if it is still in the box and if the
                box has it's original seal.
              </p>
            </li>
            <li className="col-6">
              <p className="question col-sm-10">
                Can the Replicat withstand extreme weather conditions? 
              </p>
              <p className="answer col-10 col-sm-8">
                Yes, the many layers of "fur" coats shield off harsh weather
                from reaching it's internal components. 
              </p>
            </li>
            <li className="col-6">
              <p className="question col-sm-10">
                Should the Replicat be left unattended?
              </p>
              <p className="answer col-10 col-sm-8">
                This is dependent on the mood of the Replicat, please 
                refer to the manual for advanced handling.
              </p>
            </li>
            <li className="col-6">
              <p className="question col-sm-10">
                Does the Replicat have any type of emergency shut down method?
              </p>
              <p className="answer col-10 col-sm-8">
                It does not since THE SIBER CORPORATION feels
                that the Replicat does not need one.
              </p>
            </li>
            <li className="col-6">
              <p className="question col-sm-10">
                How often can one expect software updates to be made? 
              </p>
              <p className="answer col-10 col-sm-8">
                Updates related to new features and system maintenance 
                will be routinely made available every three months.
              </p>
            </li>
            <li className="col-6">
              <p className="question col-sm-10">
                Can the Replicat become dangerous?
              </p>
              <p className="answer col-10 col-sm-8">
                No.
              </p>
            </li>
          </ul>
        </section>
      </div>

      <section id="socials">
        <h2>
          Socials
        </h2>
        <ul className="list-group list-group-horizontal justify-content-center">
          <li className="col-2 col-md-1">
            <a href="https://twitter.com/xProtocall" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
          </li>
          <li className="col-2 col-md-1">
            <a href="https://www.linkedin.com/in/marcelino-g/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </li>
          <li className="col-2 col-md-1">
            <a href="https://github.com/Marcelino-G" target="_blank" rel="noopener noreferrer" aria-label="Github">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </li>
        </ul>
      </section>

      <button aria-label="Up arrow" id="upArrow" className="col-2">
        <a aria-label="To the top" href="#top">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
          </svg>
        </a>
      </button>
      
    </div>
  );
}

export default MainHomeContent;
