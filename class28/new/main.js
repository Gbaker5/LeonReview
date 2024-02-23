



/////////////THIS FUNCTION IS CALLED ON PAGELOAD 
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

  /////////////////////////CHARACTER ALL

document.querySelector('#allButton').addEventListener('click', getAll)

function getAll(){
    let categoryInput = document.querySelector('#category').value
    let pageInput = document.querySelector('#page').value
    console.log(pageInput)

    if( categoryInput == "character" && pageInput == ""){

    url = `https://rickandmortyapi.com/api/${categoryInput}`


    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      //console.log(data); // Do something with the data
      //console.log(data.info)
      //console.log(data.info.next)
      //console.log(data.results)
      document.querySelector('#allResults').innerHTML = ""
  
      let nextPage = data.info.next 
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
  
      let nextButton = document.createElement('button');//create button
      nextButton.innerText = "Next"; //button text next
      nextButton.id = "next"; //id = "next"
      nextButton.setAttribute('data-next-fetch-url', nextPage) //add data attribute to hold url for next page
      document.querySelector('#allResults').appendChild(nextButton) //add to dom
  
      document.querySelector('#next').addEventListener('click', nextFetchCHARACTER ) //add event list to button
  
  
  
  
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });
    ///////////////CHARACTER WITH PAGE
    }else if(categoryInput == "character" && pageInput !== ""){
        
    url = `https://rickandmortyapi.com/api/${categoryInput}/?page=${pageInput}`



    fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    //console.log(data); // Do something with the data
    //console.log(data.info)
    //console.log(data.info.next)
    //console.log(data.results)
    document.querySelector('#allResults').innerHTML = ""

    let nextPage = data.info.next 
    console.log(nextPage)
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

    let nextButton = document.createElement('button');//create button
    nextButton.innerText = "Next"; //button text next
    nextButton.id = "next"; //id = "next"
    nextButton.setAttribute('data-next-fetch-url', nextPage) //add data attribute to hold url for next page
    document.querySelector('#allResults').appendChild(nextButton) //add to dom

    document.querySelector('#next').addEventListener('click', nextFetchCHARACTER ) //add event list to button




  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
}else if(categoryInput == "location" && pageInput == ""){ 
    //////LOCATION SEARCH NO PAGE INPUT/////////////////////////////
    
url = `https://rickandmortyapi.com/api/${categoryInput}`

document.querySelector('#allResults').innerHTML = "";


  let residentsArr = []; // Define residentsArr to store resident names

fetch(url) // First fetch to API that holds all names connected to the current location
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      console.log(data.results)
        let fetchPromises = []; // Array to store promises of individual fetch requests

        data.results.forEach(location => {
            let allResidentsUrl = location.residents;

            allResidentsUrl.forEach((residentUrl) => {
                let fetchPromise = fetch(residentUrl)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        residentsArr.push({ name: data.name, locationId: location.id });
                    })
                    .catch(error => {
                        console.error('There was a problem with the fetch operation:', error);
                    });

                fetchPromises.push(fetchPromise); // Store each fetch promise in the array
            });
        });

        // Wait for all fetch requests to complete
        Promise.all(fetchPromises)
            .then(() => {
                // Now residentsArr has been populated with all resident names
                // You can use residentsArr here or perform any other operation you need
                console.log(residentsArr);
                let nextPage = data.info.next 

                // Iterate through locations and display information
                data.results.forEach(location => {
                    let theId = location.id;
                    let name = location.name;
                    let type = location.type;
                    let theDimension = location.dimension;

                    let newDiv = document.createElement('div');
                    newDiv.classList.add('locationBox');
                    newDiv.classList.add('locationBox' + theId);
                    document.querySelector('#allResults').appendChild(newDiv);

                    let idLi = document.createElement('li');
                    idLi.innerText = "id: " + theId;
                    idLi.classList.add('locationId');
                    idLi.classList.add('locationId' + theId);
                    document.querySelector('.locationBox' + theId).appendChild(idLi);

                    let nameLi = document.createElement('li');
                    nameLi.innerText = "Name: " + name;
                    nameLi.classList.add("locationName");
                    nameLi.classList.add("locationName" + theId);
                    document.querySelector('.locationBox' + theId).appendChild(nameLi);

                    let typeLi = document.createElement('li');
                    typeLi.innerText = "Type: " + type;
                    typeLi.classList.add("locationType");
                    typeLi.classList.add("locationType" + theId);
                    document.querySelector('.locationBox' + theId).appendChild(typeLi);

                    let dimensionLi = document.createElement('li');
                    dimensionLi.innerText = "Dimension: " + theDimension;
                    dimensionLi.classList.add("locationDimension");
                    dimensionLi.classList.add("locationDimension" + theId);
                    document.querySelector('.locationBox' + theId).appendChild(dimensionLi);

                    let newUl = document.createElement('ul');
                    newUl.classList.add("locationResidents");
                    newUl.classList.add("locationResidents" + theId);
                    document.querySelector('.locationBox' + theId).appendChild(newUl);

                    let resTitle = document.createElement('li');
                    resTitle.innerText = "Residents:";
                    resTitle.classList.add("residentTitle");
                    resTitle.classList.add("residentTitle" + theId);
                    document.querySelector('.locationBox' + theId).appendChild(resTitle);

                    residentsArr
                        .filter(resident => resident.locationId === theId)
                        .forEach((resident, index) => {
                            let residentLi = document.createElement('li');
                            residentLi.innerText = resident.name;
                            residentLi.classList.add("locationResident");
                            residentLi.classList.add("locationResident" + index);
                            document.querySelector('.locationResidents' + theId).appendChild(residentLi);
                        });

 
                });
    let nextButton = document.createElement('button');//create button
   nextButton.innerText = "Next"; //button text next
   nextButton.id = "next"; //id = "next"
   nextButton.setAttribute('data-next-fetch-url', nextPage) //add data attribute to hold url for next page
   document.querySelector('#allResults').appendChild(nextButton) //add to dom

   document.querySelector('#next').addEventListener('click', nextFetchLOCATION ) //add event list to button

            })
            .catch(error => {
                console.error('There was a problem with one of the fetch operations:', error);
            });
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    });

//  let allResidentsUrl = data.results[0].residents;
//
//  let fetchPromises = []; // Array to store promises of individual fetch requests
//
//  allResidentsUrl.forEach((url) => {
//      let fetchPromise = fetch(url)
//      .then(response => {
//      if (!response.ok) {
//          throw new Error('Network response was not ok');
//      }
//      return response.json();
//      })
//      .then(data => {
//          residentsArr.push(data.name);
//      })
//      .catch(error => {
//          console.error('There was a problem with the fetch operation:', error);
//      });
//
//          fetchPromises.push(fetchPromise); // Store each fetch promise in the array
//      });
//
//      // Wait for all fetch requests to complete
//      Promise.all(fetchPromises)
//          .then(() => {
//              // Now residentsArr has been populated with all resident names
//              // You can use residentsArr here or perform any other operation you need
//              console.log(residentsArr);
//
//
//
//
//      let theId = data.results[0].id;
//      let name = data.results[0].name;
//      let type = data.results[0].type;
//      let theDimension = data.results[0].dimension;
//      //let allResidentsUrl = data.results[0].residents
//
//
//
//  let newDiv = document.createElement('div') //create div
//  newDiv.classList.add('locationBox') //add resultbox class
//  newDiv.classList.add('locationBox' + theId) //add resultbox + id for js reference appending
//  document.querySelector('#allResults').appendChild(newDiv) //add div to ul
//
//
//  let idLi = document.createElement('li');
//  idLi.innerText = "id: " + theId;
//  idLi.classList.add('locationId');
//  idLi.classList.add('locationId' + theId)
//  document.querySelector('.locationBox' + theId).appendChild(idLi)
//
//
//  let nameLi = document.createElement('li');
//  nameLi.innerText = "Name: " + name;
//  nameLi.classList.add("locationName");
//  nameLi.classList.add("locationName" + theId);
//  document.querySelector('.locationBox' + theId).appendChild(nameLi)
//
//  let typeLi = document.createElement('li');
//  typeLi.innerText = "Type: " + type;
//  typeLi.classList.add("locationType");
//  typeLi.classList.add("locationType" + theId);
//  document.querySelector('.locationBox' + theId).appendChild(typeLi)
//
//  let dimensionLi = document.createElement('li');
//  dimensionLi.innerText = "Dimension: " + theDimension;
//  dimensionLi.classList.add("locationDimension");
//  dimensionLi.classList.add("locationDimension" + theId);
//  document.querySelector('.locationBox' + theId).appendChild(dimensionLi)
//
//  let newUl = document.createElement('ul');
//  //newUl.innerText = "Residents:"
//  newUl.classList.add("locationResidents");
//  newUl.classList.add("locationResidents" + theId);
//  document.querySelector('.locationBox' + theId).appendChild(newUl)
//
//  let resTitle = document.createElement('li');
//  resTitle.innerText = "Residents:";
//  resTitle.classList.add("residentTitle");
//  resTitle.classList.add("residentTitle" + theId);
//  document.querySelector('.locationBox' + theId).appendChild(resTitle)
//
//
//  let count = 0;
//  residentsArr.forEach((name) => {
//      count++
//      let residentLi = document.createElement('li');
//      residentLi.innerText = name;
//      residentLi.classList.add("locationResident");
//      residentLi.classList.add("locationResident" + count);
//      document.querySelector('.locationResidents' + theId).appendChild(residentLi)
//  })
//
//
//
//
//
//
//
//
//
//
//              // Your remaining code goes here...
//          })
//          .catch(error => {
//              console.error('There was a problem with one of the fetch operations:', error);
//          });
//  })
//  .catch(error => {
//      console.error('There was a problem with the fetch operation:', error);
//  });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//fetch(url)
//.then(response => {
//  if (!response.ok) {
//    throw new Error('Network response was not ok');
//  }
//  return response.json();
//})
//.then(data => {
//console.log(data)
//console.log(data.results[0].residents)
//
//let theId = data.results[0].id;
//let name = data.results[0].name;
//let type = data.results[0].type;
//let theDimension = data.results[0].dimension;
//let allResidentsUrl = data.results[0].residents
//
//let residentsArr = []; 
//
//allResidentsUrl.forEach((url) => {
//    fetch(url)
//.then(response => {
//  if (!response.ok) {
//    throw new Error('Network response was not ok');
//  }
//  return response.json();
//})
//.then(data => {
//console.log(data)
//
//residentsArr.push(data.name)
//console.log(residentsArr)
//
//
//})
//.catch(error => {
//  console.error('There was a problem with the fetch operation:', error);
//});
//
//})
////////////
//
//let newDiv = document.createElement('div') //create div
//    newDiv.classList.add('resultbox') //add resultbox class
//    newDiv.classList.add('resultbox' + theId) //add resultbox + id for js reference appending
//    document.querySelector('#allResults').appendChild(newDiv) //add div to ul
//
//
//    let idLi = document.createElement('li');
//    idLi.innerText = "id: " + theId;
//    idLi.classList.add('idNum');
//    idLi.classList.add('idNum' + theId)
//    document.querySelector('.resultbox' + theId).appendChild(idLi)
//
//
//    let nameLi = document.createElement('li');
//    nameLi.innerText = "Name: " + name;
//    nameLi.classList.add("resultName");
//    nameLi.classList.add("resultName" + theId);
//    document.querySelector('.resultbox' + theId).appendChild(nameLi)
//
//    let typeLi = document.createElement('li');
//    typeLi.innerText = "Type: " + type;
//    typeLi.classList.add("resultType");
//    typeLi.classList.add("resultType" + theId);
//    document.querySelector('.resultbox' + theId).appendChild(typeLi)
//
//    let dimensionLi = document.createElement('li');
//    dimensionLi.innerText = "Dimension: " + theDimension;
//    dimensionLi.classList.add("resultDimension");
//    dimensionLi.classList.add("resultDimension" + theId);
//    document.querySelector('.resultbox' + theId).appendChild(dimensionLi)
//
//})
//.catch(error => {
//  console.error('There was a problem with the fetch operation:', error);
//});

}else if(categoryInput == "location" && pageInput !== ""){
    
url = `https://rickandmortyapi.com/api/${categoryInput}/?page=${pageInput}`



fetch(url)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
console.log(data)




})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});

}else if(categoryInput == "episode" && pageInput == ""){
    
    url = `https://rickandmortyapi.com/api/${categoryInput}`

    fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
    console.log(data)
    
    
    
    
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
    });


}else if(categoryInput == "location" && pageInput !== ""){
    
    url = `https://rickandmortyapi.com/api/${categoryInput}/?page=${pageInput}`

    fetch(url)
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
console.log(data)




})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});


}
}
//////////////////////
function nextFetchCHARACTER(){

    //window.onbeforeunload = function () {
        //window.scrollTo(0,0);
    //};
    const nextButton = document.querySelector('#next')
    //console.log(nextButton)
    let nextUrl = nextButton.dataset.nextFetchUrl
    //console.log(nextUrl)



  fetch(nextUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {


    //console.log(data); // Do something with the data
    //console.log(data.info)
    console.log(data.info.next)
    //console.log(data.results)
    document.querySelector('#allResults').innerHTML = ""
    let nextPage = data.info.next 

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

    let nextButton = document.createElement('button');//create button
    nextButton.innerText = "Next"; //button text next
    nextButton.id = "next"; //id = "next"
    nextButton.setAttribute('data-next-fetch-url', nextPage) //add data attribute to hold url for next page
    document.querySelector('#allResults').appendChild(nextButton) //add to dom

    document.querySelector('#next').addEventListener('click', nextFetchCHARACTER ) //add event list to button




  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });






}
//////////////nextbutton for LOCATION
function nextFetchLOCATION(){

  const nextButton = document.querySelector('#next')
    //console.log(nextButton)
    let nextUrl = nextButton.dataset.nextFetchUrl
    //console.log(nextUrl) 


  document.querySelector('#allResults').innerHTML = "";


  let residentsArr = []; // Define residentsArr to store resident names

fetch(nextUrl) // First fetch to API that holds all names connected to the current location
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
      console.log(data.results)
        let fetchPromises = []; // Array to store promises of individual fetch requests

        data.results.forEach(location => {
            let allResidentsUrl = location.residents;

            allResidentsUrl.forEach((residentUrl) => {
                let fetchPromise = fetch(residentUrl)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        residentsArr.push({ name: data.name, locationId: location.id });
                    })
                    .catch(error => {
                        console.error('There was a problem with the fetch operation:', error);
                    });

                fetchPromises.push(fetchPromise); // Store each fetch promise in the array
            });
        });

        // Wait for all fetch requests to complete
        Promise.all(fetchPromises)
            .then(() => {
                // Now residentsArr has been populated with all resident names
                // You can use residentsArr here or perform any other operation you need
                console.log(residentsArr);
                let nextPage = data.info.next 

                // Iterate through locations and display information
                data.results.forEach(location => {
                    let theId = location.id;
                    let name = location.name;
                    let type = location.type;
                    let theDimension = location.dimension;

                    let newDiv = document.createElement('div');
                    newDiv.classList.add('locationBox');
                    newDiv.classList.add('locationBox' + theId);
                    document.querySelector('#allResults').appendChild(newDiv);

                    let idLi = document.createElement('li');
                    idLi.innerText = "id: " + theId;
                    idLi.classList.add('locationId');
                    idLi.classList.add('locationId' + theId);
                    document.querySelector('.locationBox' + theId).appendChild(idLi);

                    let nameLi = document.createElement('li');
                    nameLi.innerText = "Name: " + name;
                    nameLi.classList.add("locationName");
                    nameLi.classList.add("locationName" + theId);
                    document.querySelector('.locationBox' + theId).appendChild(nameLi);

                    let typeLi = document.createElement('li');
                    typeLi.innerText = "Type: " + type;
                    typeLi.classList.add("locationType");
                    typeLi.classList.add("locationType" + theId);
                    document.querySelector('.locationBox' + theId).appendChild(typeLi);

                    let dimensionLi = document.createElement('li');
                    dimensionLi.innerText = "Dimension: " + theDimension;
                    dimensionLi.classList.add("locationDimension");
                    dimensionLi.classList.add("locationDimension" + theId);
                    document.querySelector('.locationBox' + theId).appendChild(dimensionLi);

                    let newUl = document.createElement('ul');
                    newUl.classList.add("locationResidents");
                    newUl.classList.add("locationResidents" + theId);
                    document.querySelector('.locationBox' + theId).appendChild(newUl);

                    let resTitle = document.createElement('li');
                    resTitle.innerText = "Residents:";
                    resTitle.classList.add("residentTitle");
                    resTitle.classList.add("residentTitle" + theId);
                    document.querySelector('.locationBox' + theId).appendChild(resTitle);

                    residentsArr
                        .filter(resident => resident.locationId === theId)
                        .forEach((resident, index) => {
                            let residentLi = document.createElement('li');
                            residentLi.innerText = resident.name;
                            residentLi.classList.add("locationResident");
                            residentLi.classList.add("locationResident" + index);
                            document.querySelector('.locationResidents' + theId).appendChild(residentLi);
                        });

 
                });
    let nextButton = document.createElement('button');//create button
   nextButton.innerText = "Next"; //button text next
   nextButton.id = "next"; //id = "next"
   nextButton.setAttribute('data-next-fetch-url', nextPage) //add data attribute to hold url for next page
   document.querySelector('#allResults').appendChild(nextButton) //add to dom

   document.querySelector('#next').addEventListener('click', nextFetchLOCATION ) //add event list to button

            })
            .catch(error => {
                console.error('There was a problem with one of the fetch operations:', error);
            });
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