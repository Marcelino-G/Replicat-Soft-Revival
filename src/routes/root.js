import Imgs from "../imgs";
import {Outlet} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";


const Root = (props) => {
    
    return(
        <div>
            <header className="row justify-content-around justify-content-md-evenly m-0 px-0">
                <button aria-label="Hamburger nav" id="hamburger" onClick={props.hamburger} className="col-1 p-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
                </button>
                <h1 className="col-10 col-md-12 p-0 pe-md-4">
                THE SIBER CORPORATION
                </h1>
                <img id="logo" src={Imgs.altLogo} alt='THE SIBER CORPORATION logo'/>
            
                <nav className="col-md-10 pt-2 px-0 mx-auto mt-1 m-md-0 p-md-0">
                <ul onClick={props.hamburger} className="p-0">
                    <li onClick={props.scroll}><Link to={'Replicat-Soft-Revival'}>Home</Link></li>
                    <li><Link to={'About-Us'}>About Us</Link></li>
                    <li><Link to={'Replicat-Soft-Revival#featured'}>Featured</Link></li>
                    <li><Link to={'Replicat-Soft-Revival#features'}>Features</Link></li>
                    <li><Link to={'Replicat-Soft-Revival#faq'}>FAQ</Link></li>
                    <li><Link to={'Replicat-Soft-Revival#footerr'}>Contact Us</Link></li>
                </ul>
                </nav>
            </header>
            <Outlet/>
        </div>
    )




}

export default Root;