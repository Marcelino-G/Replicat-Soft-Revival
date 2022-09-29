import Imgs from "../imgs";

const Footer = () => {

    const handleOnSubmit = (e) =>{
        e.preventDefault();
      }

    return (
        <footer id='footerr' className="row">
            <figure>
                <img src={Imgs.altLogo} alt='THE SIBER CORPORATION logo' className="col-2 col-md-1"/>
                <figcaption>
                    THE SIBER CORPORATION 
                </figcaption>
            </figure>

            <section className="col-lg-3">
                <h2>
                    Mission Statement
                </h2>
                <p className="col-11 col-sm-10 col-md-9 col-lg-11">
                    To reform the bond between man and machine once more, proving
                    that they can coexist and benefit from one another in harmony.
                </p>
            </section>

            <form className="col-10 col-lg-4" onSubmit={handleOnSubmit}>
                <fieldset>
                    <legend>Subscribe!</legend>
                    <div className="subscribePart col-sm-10">
                        <label htmlFor='firstName'>First Name</label>
                        <input name='firstName' id='firstName' type='text'></input>
                    </div>
                    <div className="subscribePart col-sm-10">
                        <label htmlFor='lastName'>Last Name</label>
                        <input name='lastName' id='lastName' type='text'></input>
                    </div>
                    <div className="subscribePart col-sm-10">
                        <label htmlFor='email'>Email</label>
                        <input name='email' id='email' type='email'></input>
                    </div>
                    <div className="subscribePart col-6 col-sm-4">
                        <input type='submit' value='SUBMIT'></input>
                    </div>
                </fieldset>
            </form>

            <address className="row col-lg-5">
                <ul className="col-6">
                    <li><a href="https://twitter.com/xProtocall" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    <li><a href="https://www.linkedin.com/in/marcelino-g/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    <li><a href="https://github.com/Marcelino-G" target="_blank" rel="noopener noreferrer">GitHub</a></li>
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

            <div id='copyright'>
                <p> &copy; 2022 THE SIBER CORPORATION </p>
            </div>

        </footer>
    )
}

export default Footer;