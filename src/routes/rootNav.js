import Imgs from "../imgs";
import {Outlet} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { useEffect } from "react";

const RootNav = (props) => {

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
    const handleOnClickHamburgerAndNavLinks = (e) => {
        if(!props.smWindowWidth.matches){
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
    props.landScapeOR.addEventListener('change', (media) => {
        setHamToggle(null)
        if(media.matches && props.smWindowWidth.matches){
            navHamAppearanceToggles('none')
        } else if (media.matches && !props.smWindowWidth.matches){
            navHamAppearanceToggles('initial')
        } 
    })
    props.portraitOR.addEventListener('change', (media) => {
        setHamToggle(null)
        if (media.matches && props.smWindowWidth.matches){
            navHamAppearanceToggles('none')
        } else if (media.matches && !props.smWindowWidth.matches){
            navHamAppearanceToggles('initial')
        }
    })
    props.smWindowWidth.addEventListener('change', (media) => {
        setHamToggle(null)
        if(media.matches && props.landScapeOR.matches){
            navHamAppearanceToggles('none')
        } else if (media.matches && props.portraitOR.matches){
            navHamAppearanceToggles('none')
        } else if (!media.matches && props.landScapeOR.matches){
            navHamAppearanceToggles('initial')
        } else if (!media.matches && props.portraitOR.matches){
            navHamAppearanceToggles('initial')
        }
    })

    
    return(
        <div>
            <header className="row justify-content-around justify-content-md-evenly m-0 px-0">
                <button aria-label="Hamburger nav" id="hamburger" onClick={handleOnClickHamburgerAndNavLinks} className="col-1 p-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                </button>
                <h1 className="col-10 col-md-12 p-0 pe-md-4">
                    THE SIBER CORPORATION
                </h1>
                <img id="logo" src={Imgs.altLogo} alt='THE SIBER CORPORATION logo'/>
            
                <nav className="col-md-10 pt-2 px-0 mx-auto mt-1 m-md-0 p-md-0">
                    <ul onClick={handleOnClickHamburgerAndNavLinks} className="p-0">
                        <li><Link to={'Replicat-Soft-Revival'}>Home</Link></li>
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

export default RootNav;