




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
    
   let theId = data.results[0].id //id - 1
   let image = data.results[0].image//image 
   let name = data.results[0].name //name - "Rick Sanchez"
   let location = data.results[0].location.name //location - "Rick Citadel"
   let gender = data.results[0].gender//gender = "Male"
   let status = data.results[0].status//status = "Alive"
   let species = data.results[0].species//species = "human"
   let type = data.results[0].type//type = ""
   let origin = data.results[0].origin.name//origin - "Earth"


    //id
    //name



    let newLiId = document.createElement('li');
    newLi.innerText = data.results[0].id ;
    newLi.classList.add();


    
    let newLiImage = document.createElement('li');
    newLi.classList.add('');
    let newImage = document.createElement('img')
    newImage.src = data.results[0].image
    


    




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