
const chickenPic = document.getElementById('chicken')
const chickenShade = document.getElementById('chickenshade')
const chickenText = document.getElementById('chickentext') 


chickenPic.addEventListener('click', function chickenShow() {
    chickenShade.style.visibility = 'visible' 
    chickenText.style.visibility = 'visible'
})

//chickenPic.addEventListener('mouseout', function chickenHide() {
    //chickenShade.style.visibility = 'hidden' 
    //chickenText.style.visibility = 'hidden'
//})

const noodlePic = document.getElementById('noodle')
const noodleShade = document.getElementById('noodleshade')
const noodleText = document.getElementById('noodletext')

noodlePic.addEventListener('mouseover', function noodleShow(){
    noodleShade.style.visibility = 'visible'
    noodleText.style.visibility = 'visible'
})







//const noodleShade = document.getElementById('noodleshade')


//document.getElementById('chicken').addEventListener('click', chickenToggle)
//document.querySelector('#noodle').addEventListener('click', noodleToggle)


//function chickenToggle(){
    //chickenShade.classList.remove('hidden')
    //chickenText.classList.remove('hidden')
//}

//function noodleToggle(){
    //noodleShade.classList.remove('hidden')
//}