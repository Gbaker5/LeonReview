

document.querySelector('#getTime').addEventListener('click', getSun)


function getSun(){



fetch('https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400')
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