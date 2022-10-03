
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

for(let i = 0; i < aboutUsMessage.length; i++){
    if(aboutUsMessage[i] === " "){
        messageArray.push(aboutUsWord)
        aboutUsWord = ''
    }
    aboutUsWord = `${aboutUsWord + aboutUsMessage[i]}`;
}

const AboutUs = () => {
    return (
        <section id='aboutUs' className="border col-8">
            <h2>
                About Us
            </h2>
            <div>
                {
                    messageArray.map((word, wordIndex) => {
                        let wordArray = Array.from(word);
                            return (
                            <div className="d-inline-block"> 
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
        </section>
    )
}

export default AboutUs;