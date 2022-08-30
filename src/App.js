import Imgs from "./imgs";

function App(props) {
  return (
    <div className="border border-4 border-primary container-fluid p-0 mx-auto row justify-content-center">

      <header className="row m-0 p-0 bg-white justify-content-between">
        <button className="col-1 p-0 border border-dark" onClick={props.hamburger} >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <h1 className="p-0 col-7 border border-dark">
          THE SIBER CORPORATION
        </h1>
        <img className="border border-dark" id="logo" src={Imgs.altLogo} alt='THE SIBER CORPORATION logo'/>
        
        
        
        <nav className="col-lg-4 align-self-center p-0 border border-dark">
          <ul className="list-group list-group-horizontal-lg">
            <li className="flex-fill"><a>Home</a></li>
            <li className="flex-fill"><a>About</a></li>
            <li className="flex-fill"><a href="#featured">Featured</a></li>
            <li className="flex-fill"><a href="#features">Features</a></li>
            <li className="flex-fill"><a href="#faq">FAQ</a></li>
            <li className="flex-fill"><a>Contact Us</a></li>
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

      <section id='featured'>
        <h2>
          NEXUS Replicats
        </h2>
        <ul  className="list-group list-group-horizontal border">
          <li className="flex-fill col-lg-3 replicat">
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

          <li className="flex-fill col-lg-3 replicat">
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

          <li className="flex-fill col-lg-3 replicat">
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
      </section>

      <section id="features" className="border">
        <h2>
          Features
        </h2>
        <ul className="list-group border">
          <li className="col-lg-12 row border">
            <h3 className="col-lg-12">
              Artificial Intelligence
            </h3>
            <figure className="col-lg-12 row border">
              <picture className=" col-4 col-lg-4">
                <img src= {Imgs.brain} alt='Artificial Intelligence (brain picture)'/>
              </picture>
              <figcaption className="col">
                <ul>
                  <li>
                    Mood and demeanor based on environment stimuli  
                  </li>
                  <li>
                    Pa
                  </li>
                  <li>
                    Pa
                  </li>
                </ul>
              </figcaption>
            </figure>
          </li>

          <li className="col-lg-12 row">
            <h3 className="col-lg-12">
              Security System
            </h3>
            <figure className="col-lg-12 row">
              <picture className=" col-4 col-lg-4">
                <img src= {Imgs.cam} alt='Security System (camera picture)'/>
              </picture>
              <figcaption className="col">
                <ul>
                  <li>
                    Pa  
                  </li>
                  <li>
                    Pa
                  </li>
                  <li>
                    Pa
                  </li>
                </ul>
              </figcaption>
            </figure>
          </li>

          <li className="col-lg-12 row">
            <h3 className="col-lg-12">
              Household Tasks
            </h3>
            <figure className="col-lg-12 row">
              <picture className="col-4 col-lg-4">
                <img src= {Imgs.paint} alt='Household Tasks (paint brush)'/>
              </picture>
              <figcaption className="col">
                <ul>
                  <li>
                    Pa  
                  </li>
                  <li>
                    Pa
                  </li>
                  <li>
                    Pa
                  </li>
                </ul>
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>

      <div id='faq' className="row border">
        <img src={Imgs.questions} alt='Blade Runner (man smirking)'/>
        <section id='questions' className="row col-5 col-lg-5 border">
          <h2>
            FAQ
          </h2>
          <ul>
            <li>
              <details>
                <summary>How old is Audrey?</summary>
                at least 8 years old.
              </details>
            </li>
            <li>
              <details>
                <summary>What?</summary>
                Yes
              </details>
            </li>
            <li>
              <details>
                <summary>What?</summary>
                Yes
              </details>
            </li>
            <li>
              <details>
                <summary>What?</summary>
                Yes
              </details>
            </li>
            <li>
              <details>
                <summary>What?</summary>
                Yes
              </details>
            </li>
          </ul>
        </section>
      </div>

      <section>
        <h2>
          Socials
        </h2>
        <ul>
          <li>
            Twitter
          </li>
          <li>
            LinkedIn
          </li>
          <li>
            GitHub
          </li>
        </ul>
      </section>

      <footer id='footerr' className="row">
        <figure>
          <img src={Imgs.altLogo} alt='THE SIBER CORPORATION logo' />
          <figcaption>
            THE SIBER CORPORATION 
          </figcaption>
        </figure>

        <div id='copyright' className="col-lg-3">
          <p> &copy; 2022 THE SIBER CORPORATION </p>
        </div>

        <div className="col-lg-3">
          <p>Mission Statement</p>
        </div>
        
        <form className="col-lg-3">
          <fieldset>
            <legend>Subscribe!</legend>
            <div className="subscribePart">
              <label>First Name: </label>
              <input type='text'></input>
            </div>
            <div className="subscribePart">
              <label>Last Name: </label>
              <input type='text'></input>
            </div>
            <div className="subscribePart">
              <label>Email: </label>
              <input type='email'></input>
            </div>
            <div className="subscribePart">
              <input type='submit'></input>
            </div>
          </fieldset>
        </form>

        <address className="col-lg-3">
          <ul>
            <li><a href="#">Contact Us</a></li>
            <li><a href="https://twitter.com/xProtocall">Twitter</a></li>
            <li><a href="https://www.linkedin.com/in/marcelino-g/">LinkedIn</a></li>
            <li><a href="https://github.com/Marcelino-G">GitHub</a></li>
          </ul>
          <ul>
            <li>999-123-4567</li>
            <li>
              THE SIBER CORPORATION <br/>
              111 Oak Ave <br/>
              Los Angeles, CA 90000 
            </li>
          </ul>
        </address>
      </footer>

    </div>
  );
}

export default App;
