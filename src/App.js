import Imgs from "./imgs";

function App() {
  return (
    <div className="">
      
      <h1 className=''>Hiz</h1>

      <nav>
        <ul>
          <li><a>Home</a></li>
          <li><a>About</a></li>
          <li><a>Featured</a></li>
          <li><a>Features</a></li>
          <li><a>FAQ</a></li>
          <li><a>Contact Us</a></li>
        </ul>
      </nav>

      <figure id='quote'>
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

      <ul>
        <h2>
          NEXUS Replicats
        </h2>
        <li>
          <data value='Hurricane'>
            <h3>
              Hurricane
            </h3>
            <figure>
              <picture>
                <img src= {Imgs.modelLeon} />
              </picture>
              <figcaption>
                Expect the filtration of poisoned air
              </figcaption>
            </figure>
          </data>
        </li>

        <li>
          <data value='Flood'>
            <h3>
              Flood
            </h3>
            <figure>
              <picture>
                <img src= {Imgs.modelPris} />
              </picture>
              <figcaption>
                Expect the cleansing of stained concrete
              </figcaption>
            </figure>
          </data>
        </li>

        <li>
          <data value='Avalanche'>
            <h3>
              Avalanche
            </h3>
            <figure>
              <picture>
                <img src= {Imgs.modelRoy} />
              </picture>
              <figcaption>
                Expect the rearranging of mountains
              </figcaption>
            </figure>
          </data>
        </li>
      </ul>

      <ul>
        <h2>
          Features
        </h2>
        <li>
          <h3>
          ///
          </h3>
          <figure>
            <picture>
              <img src= {Imgs.brain} />
            </picture>
            <figcaption>
            ///
            </figcaption>
          </figure>
        </li>

        <li>
          <h3>
          ///
          </h3>
          <figure>
            <picture>
              <img src= {Imgs.cam} />
            </picture>
            <figcaption>
            ///
            </figcaption>
          </figure>
        </li>

        <li>
          <h3>
            ///
          </h3>
          <figure>
            <picture>
              <img src= {Imgs.paint} />
            </picture>
            <figcaption>
              ///
            </figcaption>
          </figure>
        </li>
      </ul>

      <ul>
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
