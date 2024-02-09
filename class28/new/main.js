




    let nameArray =[];
    let statusArray = [];
    let genderArray = [];
    let speciesArray = [];
    let typeArray = [];

function pageLoad(){


for(i=1;i<42;i++){
fetch(`https://rickandmortyapi.com/api/character?page=${i}`)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {

   
    //let nameArray2 = []
    
    
    for(k=0;k<data.results.length;k++){
    //console.log(data); // Do something with the data
    //console.log(data.results)
    nameArray.push(data.results[k].name)
    statusArray.push(data.results[k].status)
    genderArray.push(data.results[k].gender)
    speciesArray.push(data.results[k].species)
    typeArray.push(data.results[k].type)
    
    }
  
    //console.log(statusArray)
    //let uniqueStatusArray = statusArray.filter((item, index) => statusArray.indexOf(item) == index)
    //console.log(uniqueStatusArray)

    //console.log(genderArray)
    //let uniqueGenderArray = genderArray.filter((item, index) => genderArray.indexOf(item) == index)
    //console.log(uniqueGenderArray)

    //console.log(speciesArray)
    //let uniqueSpecieseArray = speciesArray.filter((item, index) => speciesArray.indexOf(item) == index)
    //console.log(uniqueSpecieseArray)

    //Filter character Results for options

     //console.log(nameArray)
     let allNames = nameArray.join(" ").split(" ")
     //console.log(allNames)
     let uniqueNameArray = allNames.filter((item, index) => allNames.indexOf(item) == index)
     //console.log(uniqueNameArray)
     let nameOrdered = uniqueNameArray.sort()
     //console.log(nameOrdered)

    
    //console.log(typeArray)
    let uniqueTypeArray = nameArray.filter((item, index) => nameArray.indexOf(item) == index)
    //console.log(uniqueTypeArray)
    let typeOrdered = uniqueTypeArray.sort()
    //console.log(typeOrdered)

    /////////
    populateDropdown('#filterName', nameOrdered, "--name--");
    populateDropdown('#type', typeOrdered, "--type--");
    

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}
}

function populateDropdown(selector, dataArray, placeholder) {
    const dropdown = document.querySelector(selector);
    dropdown.innerHTML = ''; // Clear previous options
    const firstOption = document.createElement('option');
    firstOption.innerText = placeholder;
    dropdown.appendChild(firstOption);
    dataArray.forEach(item => {
        const option = document.createElement('option');
        option.innerText = item;
        option.value = item.toLowerCase();
        dropdown.appendChild(option);
    });
}

// Call pageLoad when the DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    pageLoad();
});



//////////////////////THIS IS WHERE THE INPUTS AND BUTTONS START


//if categoryinput == "vfsv" {this fetch} else if(categoryInput == "dfvsf"){do this fetch}

  /////////////////////////

document.querySelector('#allButton').addEventListener('click', getAll)

function getAll(){
    let categoryInput = document.querySelector('#category').value
    let pageInput = document.querySelector('#page').value
    console.log(pageInput)

    if(pageInput == ""){
        url = `https://rickandmortyapi.com/api/${categoryInput}`
    }else url = `https://rickandmortyapi.com/api/${categoryInput}/?page=${pageInput}`



    fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Do something with the data
    console.log(data.info)
    console.log(data.results)
    document.querySelector('#allResults').innerHTML = ""

    for(i=0;i<data.results.length;i++){
    
   let theId = data.results[i].id //id - 1
   let image = data.results[i].image//image 
   let name = data.results[i].name //name - "Rick Sanchez"
   let location = data.results[i].location.name //location - "Rick Citadel"
   let gender = data.results[i].gender//gender = "Male"
   let status = data.results[i].status//status = "Alive"
   let species = data.results[i].species//species = "human"
   let type = data.results[i].type//type = ""
   let origin = data.results[i].origin.name//origin - "Earth"


    //id
    //name
    //gender
    //species
    //type
    //origin
    //location
    //status

    let newDiv = document.createElement('div') //create div
    newDiv.classList.add('resultbox') //add resultbox class
    newDiv.classList.add('resultbox' + theId) //add resultbox + id for js reference appending
    document.querySelector('#allResults').appendChild(newDiv) //add div to ul

    

    let imageLi = document.createElement('li'); //create li for image
    imageLi.classList.add('resultImage'); //add "resultImage" class
    imageLi.classList.add('resultImage' + theId) //add '.resultImage1'
    document.querySelector('.resultbox' + theId).appendChild(imageLi) //add li to resultbox 1
    
    let newImage = document.createElement('img') //create img tag
    newImage.src = image; //change source
    document.querySelector('.resultImage' + theId).appendChild(newImage) //add to li

    



    let idLi = document.createElement('li');
    idLi.innerText = "id: " + theId;
    idLi.classList.add('idNum');
    idLi.classList.add('idNum' + theId)
    document.querySelector('.resultbox' + theId).appendChild(idLi)


    let nameLi = document.createElement('li');
    nameLi.innerText = "Name: " + name;
    nameLi.classList.add("resultName");
    nameLi.classList.add("resultName" + theId);
    document.querySelector('.resultbox' + theId).appendChild(nameLi)

    let genderLi = document.createElement('li');
    genderLi.innerText = "Gender: " + gender;
    genderLi.classList.add("resultGender");
    genderLi.classList.add("resultGender" + theId);
    document.querySelector('.resultbox' + theId).appendChild(genderLi)

    let speciesLi = document.createElement('li');
    speciesLi.innerText = "Species: " + species;
    speciesLi.classList.add("resultSpecies");
    speciesLi.classList.add("resultSpecies" + theId);
    document.querySelector('.resultbox' + theId).appendChild(speciesLi)


    let typeLi = document.createElement('li');
    typeLi.innerText = "Type: " + type;
    typeLi.classList.add("resultType");
    typeLi.classList.add("resultType" + theId);
    document.querySelector('.resultbox' + theId).appendChild(typeLi)

    let originLi = document.createElement('li');
    originLi.innerText = "Origin: " + origin;
    originLi.classList.add("resultOrigin");
    originLi.classList.add("resultOrigin" + theId);
    document.querySelector('.resultbox' + theId).appendChild(originLi)

    let locationLi = document.createElement('li');
    locationLi.innerText = "Location: " + location;
    locationLi.classList.add("resultLocation");
    locationLi.classList.add("resultLocation" + theId);
    document.querySelector('.resultbox' + theId).appendChild(locationLi)

    let statusLi = document.createElement('li');
    statusLi.innerText = "Status: " + status;
    statusLi.classList.add("resultStatus");
    statusLi.classList.add("resultStatus" + theId);
    document.querySelector('.resultbox' + theId).appendChild(statusLi)
   
    
    }

    




  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}


///////////////////
document.querySelector('#specificButton').addEventListener('click', getSpecificCharacters)

function getSpecificCharacters(){
    fetch('https://rickandmortyapi.com/api/character?name=sanchez')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Do something with the data

    

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}



////////////////////////
document.querySelector('#filterButton').addEventListener('click', getFilterCharacters)

function getFilterCharacters(){
    fetch('https://rickandmortyapi.com/api/character?name=sanchez')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Do something with the data

    

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}