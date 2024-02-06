



let categoryInput= document.querySelector('#category').value
let pageInput= document.querySelector('#page').value

//if categoryinput == "vfsv" {this fetch} else if(categoryInput == "dfvsf"){do this fetch}

fetch('https://rickandmortyapi.com/api/character')
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