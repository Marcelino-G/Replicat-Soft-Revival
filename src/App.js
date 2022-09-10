import Imgs from "./imgs";

function App(props) {
  return (
    <div className="border border-4 border-primary container-fluid row p-0 mx-auto justify-content-center">

      <header className="row m-0 px-0 justify-content-around">
        <button aria-label="Hamburger nav" id="hamburger" onClick={props.hamburger} className="col-1 p-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <h1 className="col-10 p-0">
          THE SIBER CORPORATION
        </h1>
        <img id="logo" src={Imgs.altLogo} alt='THE SIBER CORPORATION logo'/>
      
        <nav className="row pt-2 px-0 mx-auto mt-1 col-lg-4">
          <ul onClick={props.hamburger} className="p-0">
            <li className="flex-fill-lg"><a>Home</a></li>
            <li className="flex-fill-lg"><a>About</a></li>
            <li className="flex-fill-lg"><a href="#featured">Featured</a></li>
            <li className="flex-fill-lg"><a href="#features">Features</a></li>
            <li className="flex-fill-lg"><a href="#faq">FAQ</a></li>
            <li className="flex-fill-lg"><a href="#footerr">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      <main id='quote' className="row">
        <img src={Imgs.city} alt='Blade Runner city'/>
        <figure>
          <blockquote>
            <p>
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
   
      <section id='featured' className="row">
        <h2>
          NEXUS Replicats
        </h2>
        <button aria-label="Go to previous featured item" className="col-2" onClick={props.back}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
            <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z"/>
          </svg>
        </button>
        <ul className="col-8 list-group list-group-horizontal">
          <li className="flex-fill-lg col-lg-3 replicat active">
            <data value='Hurricane'>
              <figure className="m-0">
                <picture>
                  <img className="img-fluid" src= {Imgs.modelLeon} alt='NEXUS Replicat (Hurricane model)'/>
                </picture>
                <figcaption>
                  <h3>
                    Hurricane
                  </h3>
                  Expect the filtration of poisoned air
                </figcaption>
              </figure>
            </data>
          </li>

          <li className="flex-fill-lg col-lg-3 replicat">
            <data value='Flood'>
              <figure className="m-0">
                <picture>
                  <img className="img-fluid" src= {Imgs.modelPris} alt='NEXUS Replicat (Flood model)'/>
                </picture>
                <figcaption>
                  <h3>
                    Flood
                  </h3>
                  Expect the cleansing of stained concrete
                </figcaption>
              </figure>
            </data>
          </li>

          <li className="flex-fill-lg col-lg-3 replicat">
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
        <button aria-label="Go to next featured item" className="col-2" onClick={props.next}>
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-caret-right" viewBox="0 0 16 16">
            <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z"/>
          </svg>
        </button>

        <div id='circleSlideHolder' className="row justify-content-center" onClick={props.featuredCircle}>
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
          <li className="row col-lg-12">
            <h3 className="col-lg-12">
              Artificial Intelligence
            </h3>
            <figure className="row col-lg-12">
              <picture className="col-6 col-lg-4">
                <img src= {Imgs.brain} alt='Artificial Intelligence (brain picture)'/>
              </picture>
              <figcaption className="col-6">
                Mood and demeanor based on environment stimuli  
              </figcaption>
            </figure>
          </li>

          <li className="row col-lg-12">
            <h3 className="col-lg-12">
              Security System
            </h3>
            <figure className="row col-lg-12">
              <picture className="col-6 col-lg-4">
                <img src= {Imgs.cam} alt='Security System (camera picture)'/>
              </picture>
              <figcaption className="col-6">
                pa
              </figcaption>
            </figure>
          </li>

          <li className="row col-lg-12">
            <h3 className="col-lg-12">
              Household Tasks
            </h3>
            <figure className="row col-lg-12">
              <picture className="col-6 col-lg-4">
                <img src= {Imgs.paint} alt='Household Tasks (paint brush)'/>
              </picture>
              <figcaption className="col-6">
                pa
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>

      <div id='faq' className="row">
        <img src={Imgs.questions} alt='Blade Runner (man smirking)'/>
        <section id='questions' className="row justify-content-center col-lg-5">
          <h2>
            FAQ
          </h2>
          <ul className="row justify-content-evenly">
            <li className="col-5">
              <details>
                <summary>How old is Audrey?</summary>
                at least 8 years old.
              </details>
            </li>
            <li className="col-5">
              <details>
                <summary>What?</summary>
                Yes
              </details>
            </li>
            <li className="col-5">
              <details>
                <summary>What?</summary>
                Yes
              </details>
            </li>
            <li className="col-5">
              <details>
                <summary>What?</summary>
                Yes
              </details>
            </li>
            <li className="col-5">
              <details>
                <summary>What?</summary>
                Yes
              </details>
            </li>
            <li className="col-5">
              <details>
                <summary>What?</summary>
                Yes
              </details>
            </li>
          </ul>
        </section>
      </div>

      <section id="socials">
        <h2>
          Socials
        </h2>
        <ul className="list-group list-group-horizontal justify-content-evenly">
          <li className="col-2">
            <a href="https://twitter.com/xProtocall" aria-label="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
              </svg>
            </a>
          </li>
          <li className="col-2">
            <a href="https://www.linkedin.com/in/marcelino-g/" aria-label="LinkedIn">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
              </svg>
            </a>
          </li>
          <li className="col-2">
            <a href="https://github.com/Marcelino-G" aria-label="Github">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          </li>
        </ul>
      </section>

      <footer id='footerr' className="row">
        <figure>
          <img src={Imgs.altLogo} alt='THE SIBER CORPORATION logo' className="col-2"/>
          <figcaption>
            THE SIBER CORPORATION 
          </figcaption>
        </figure>

        <section className="col-lg-3">
          <h2>
            Mission Statement
          </h2>
          <p>
            /////
          </p>
        </section>

        <form className="col-10 col-lg-3" onSubmit={props.subscribe}>
          <fieldset>
            <legend>Subscribe!</legend>
            <div className="subscribePart">
              <label htmlFor='firstName'>First Name </label>
              <input name='firstName' id='firstName' type='text'></input>
            </div>
            <div className="subscribePart">
              <label htmlFor='lastName'>Last Name </label>
              <input name='lastName' id='lastName' type='text'></input>
            </div>
            <div className="subscribePart">
              <label htmlFor='email'>Email </label>
              <input name='email' id='email' type='email'></input>
            </div>
            <div className="col-6 mx-auto subscribePart">
              <input type='submit' value='submit'></input>
            </div>
          </fieldset>
        </form>

        <address className="row col-lg-3">
          <ul className="col-6">
            <li><a href="#">Contact Us</a></li>
            <li><a href="https://twitter.com/xProtocall">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/marcelino-g/">LinkedIn</a></li>
            <li><a href="https://github.com/Marcelino-G">GitHub</a></li>
          </ul>
          <ul className="col-6">
            <li>999-123-4567</li>
            <li>
              THE SIBER CORPORATION <br/>
              111 Oak Ave <br/>
              Los Angeles, CA 90000 
            </li>
          </ul>
        </address>

        <div id='copyright' className="col-lg-3">
          <p> &copy; 2022 THE SIBER CORPORATION </p>
        </div>
        
      </footer>

    </div>
  );
}

export default App;
