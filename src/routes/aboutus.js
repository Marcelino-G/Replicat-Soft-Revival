// const handleOnClickMes = (e) => {
//     let eldonMes = document.getElementById('eldonMessage')
//     let mes = e.target.textContent
//     let mesArray = Array.from(mes)

//     for(let i=0; i<mesArray.length; i++){
//       let letter = document.createElement('p')
//       if (mesArray[i] === " "){
//         letter.textContent = '\u00A0';
//       } else {
//         letter.textContent = mesArray[i]
//       }

//       if (i % 6 === 0){
//         letter.classList.add('fun')
//       } else if (i % 5 === 0) {
//         letter.classList.add('fun1')
//       } else if (i % 4 === 0){
//         letter.classList.add('fun2')
//       } else if (i % 3 === 0){
//         letter.classList.add('fun3')
//       } else if (i % 2 === 0){
//         letter.classList.add('fun4')
//       } else if (i % 1 === 0){
//         letter.classList.add('fun5')
//       }

//       eldonMes.append(letter)
//     }
//   }




const AboutUs = () => {

    return (
        <section id='aboutUs' className="border col-8">
            <h2>
                About Us
            </h2>
            <p>
                hello there
            </p>
        </section>
    )
}

export default AboutUs;