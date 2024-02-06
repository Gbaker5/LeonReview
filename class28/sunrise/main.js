

document.querySelector('#getTime').addEventListener('click', getSun)
let latitudeInputArr = [];
let longitudeInputArr = [];

function getSun(){
 //
let latitudes = document.querySelector('#latitude').value
let longitudes = document.querySelector('#longitude').value

latitudeInputArr.push(latitudes)
longitudeInputArr.push(longitudes)

console.log(latitudeInputArr)
console.log(longitudeInputArr)

let lastLatEntry = latitudeInputArr[latitudeInputArr.length - 1] //last input of 
let lastLongEntry = longitudeInputArr[longitudeInputArr.length - 1]

console.log(lastLatEntry)
console.log(lastLongEntry)

fetch('https://api.sunrise-sunset.org/json?lat=21.276154&lng=-157.827140&tzid=America/Denver') //if i wanrt optimize i can do a drop down to select tzid from a list in html
//fetch(`https://api.sunrise-sunset.org/json?lat=${lastLatEntry}&lng=${lastLongEntry}`)
.then(res => res.json()) // parse response as JSON
.then(data => {
  console.log(data)  
    let sunrise = data.results.sunrise;
    let sunset = data.results.sunset;
    console.log(sunrise)
    console.log(sunset)


})
.catch(err => {
    console.log(`error ${err}`)
});

}