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
          <li><a>Contact</a></li>
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
        </li>

        <li>
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
        </li>

        <li>
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
        </li>
      </ul>




    </div>
  );
}

export default App;
