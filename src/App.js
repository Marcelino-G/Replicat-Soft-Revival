import Imgs from "./imgs";

function App() {
  return (
    <div className="border border-4 border-primary container-fluid p-0 mx-auto row justify-content-center">

      <header className="row p-0">
        <h1>
          THE SIBER CORPORATION
        </h1>
        <img id="logo" src={Imgs.altLogo}/>

        <nav className="col-4 align-self-center p-0">
          <ul className="list-group list-group-horizontal">
            <li className="flex-fill"><a href="#" >Home</a></li>
            <li className="flex-fill"><a>About</a></li>
            <li className="flex-fill"><a>Featured</a></li>
            <li className="flex-fill"><a>Features</a></li>
            <li className="flex-fill"><a>FAQ</a></li>
            <li className="flex-fill"><a>Contact Us</a></li>
          </ul>
        </nav>
      </header>
      
      <main id='quote' className="row">
        <img src={Imgs.city} />
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
        <ul  className="list-group list-group-horizontal">
          <li className="flex-fill col-3">
            <data value='Hurricane'>
              <figure>
                <picture>
                  <img className="img-fluid" src= {Imgs.modelLeon} />
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

          <li className="flex-fill col-3">
            <data value='Flood'>
              <figure>
                <picture>
                  <img className="img-fluid" src= {Imgs.modelPris} />
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

          <li className="flex-fill col-3">
            <data value='Avalanche'>
              <figure>
                <picture>
                  <img className="img-fluid" src= {Imgs.modelRoy} />
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

      <section id="features">
        <h2>
          Features
        </h2>
        <ul className="list-group">
          <li className="col-12 row">
            <h3 className="col-12">
            ///
            </h3>
            <figure className="col-12 row">
              <picture className="col-4">
                <img src= {Imgs.brain} />
              </picture>
              <figcaption className="col">
              ///
              </figcaption>
            </figure>
          </li>

          <li className="col-12 row">
            <h3 className="col-12">
            ///
            </h3>
            <figure className="col-12 row">
              <picture className="col-4">
                <img src= {Imgs.cam} />
              </picture>
              <figcaption className="col">
              ///
              </figcaption>
            </figure>
          </li>

          <li className="col-12 row">
            <h3 className="col-12">
              ///
            </h3>
            <figure className="col-12 row">
              <picture className="col-4">
                <img src= {Imgs.paint}/>
              </picture>
              <figcaption className="col">
                ///
              </figcaption>
            </figure>
          </li>
        </ul>
      </section>

      <div id='questions' className="row">
        <img src={Imgs.questions} />
        <ul className="col-5">
          <h2>FAQ</h2>
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
          <li>
            <details>
              <summary>What?</summary>
              Yes
            </details>
          </li>
        </ul>
      </div>

      <form>
        <fieldset>
          <legend>Contact Us</legend>
          <label>Name:</label>
          <input type='text' required></input>
          <label>Email:</label>
          <input type='email' required></input>
          <label>Topic:</label>
          <select>
            <option value=''>this...........</option>
            <option value=''>that...</option>
            <option value=''>their...</option>
            <option value=''>here...</option>
          </select>
          <label>Comment:</label>
          <textarea required></textarea>
          
        </fieldset>
      </form>






    </div>
  );
}

export default App;
