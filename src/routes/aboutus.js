
const aboutUsMessage = "Over a decade ago, the incendent between man and machine left\
 people all around the world questioning the advancements of technology.\
 While the majority was regressing to a past time type of living, THE SIBER CORPORATION was\
 working day and night to prove that this descent was not the answer. After countless trials and errors\
 to accomplish the perfect machine, the first lineup of REPLICATS were made.\
 This is a reintroduction to the machine that was previously poorly maintained by\
 a company who lacked the integrity and knowledge to be developing and distributing\
 such an instrument. This is only a sample of what's to come and is the beginning\
 of the machine's soft revival. ";

let aboutUsWord = '';
const messageArray = [];

// creates an array of individual words from the 'aboutUsMessage'
for(let i = 0; i < aboutUsMessage.length; i++){
    if(aboutUsMessage[i] === " "){
        messageArray.push(aboutUsWord)
        aboutUsWord = ''
    }
    aboutUsWord = `${aboutUsWord + aboutUsMessage[i]}`;
}

const AboutUs = () => {
    return (
        <section id='aboutUs' className="col-11">
            <h2>
                About Us
            </h2>
            <div>
                {
                    messageArray.map((word, wordIndex) => {
                        let wordArray = Array.from(word);
                            return (
                            <div  key={wordIndex} className="d-inline-block"> 
                                {wordArray.map((letter, letterIndex) => {
                                    if (letterIndex % 6 === 0){
                                        return (<span key={letterIndex + letter} className='rain' >{letter}</span>)
                                    } else if (letterIndex % 5 === 0) {
                                        return (<span key={letterIndex + letter} className='rain1'>{letter}</span>)
                                    } else if (letterIndex % 4 === 0){
                                        return (<span key={letterIndex + letter} className='rain2'>{letter}</span>)
                                    } else if (letterIndex % 3 === 0){
                                        return (<span key={letterIndex + letter} className='rain3'>{letter}</span>)
                                    } else if (letterIndex % 2 === 0){
                                        return (<span key={letterIndex + letter} className='rain4'>{letter}</span>)
                                    } else if (letterIndex % 1 === 0){
                                        return (<span key={letterIndex + letter} className='rain5'>{letter}</span>)
                                    }
                                })}
                                &nbsp;
                            </div>
                        )
                    })
                }
            </div>
            <button aria-label="Up arrow" id="upArrow" className="col-2">
                <a aria-label="To the top" href="#top">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-arrow-up-circle" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"/>
                    </svg>
                </a>
            </button>
        </section>
    )
}

export default AboutUs;