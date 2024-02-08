




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
  
    //console.log(nameArray)
    //let allNames = nameArray.join(" ").split(" ")
    //console.log(allNames)
    //let uniqueNameArray = allNames.filter((item, index) => allNames.indexOf(item) == index)
    //console.log(uniqueNameArray)
    //let nameOrdered = uniqueNameArray.sort()
    //console.log(nameOrdered)
    
    
    //console.log(statusArray)
    
    //let uniqueStatusArray = statusArray.filter((item, index) => statusArray.indexOf(item) == index)
    //console.log(uniqueStatusArray)
//
    //console.log(genderArray)
    //let uniqueGenderArray = genderArray.filter((item, index) => genderArray.indexOf(item) == index)
    //console.log(uniqueGenderArray)
//
    //console.log(speciesArray)
    //let uniqueSpecieseArray = speciesArray.filter((item, index) => speciesArray.indexOf(item) == index)
    //console.log(uniqueSpecieseArray)
//
    console.log(typeArray)
    let uniqueTypeArray = nameArray.filter((item, index) => nameArray.indexOf(item) == index)
    console.log(uniqueTypeArray)
    

  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

}



}

pageLoad()


let categoryInput= document.querySelector('#category').value
let pageInput= document.querySelector('#page').value
//if categoryinput == "vfsv" {this fetch} else if(categoryInput == "dfvsf"){do this fetch}

  /////////////////////////

document.querySelector('#allButton').addEventListener('click', getAll)

function getAll(){
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


///////////////////
document.querySelector('#allButton').addEventListener('click', getSpecificCharacters)

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
document.querySelector('#allButton').addEventListener('click', getFilterCharacters)

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