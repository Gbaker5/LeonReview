//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){



fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        //console.log(data)
      console.log(data.drinks[0])
      //data.drinks.length
      document.querySelector('h2').innerText = data.drinks[0].strDrink
      document.querySelector('img').src = data.drinks[0].strDrinkThumb
      document.querySelector('h3').innerText = data.drinks[0].strInstructions

      //ingredients list
      let ingList = [];
      const keys = Object.keys(data.drinks[0]) //keys of drink object
      //console.log(keys)
      const ingredientKeys = keys.filter( property => property.includes("strIngredient")) //ingredients keys
      //console.log(ingredientKeys) 
    
      ingredientKeys.forEach(ingredientKey => {
        const ingredientValue = data.drinks[0][ingredientKey];
        if (ingredientValue) {
          ingList.push(ingredientValue);
        }
      });
  
      console.log(ingList);

      //li element
      const newLi = document.createElement('li'); //create li element
      newLi.classList.add("slide"); //add class
      newLi.id = "slide1"; //add class
      document.getElementById('data-slides').appendChild(newLi) //append li to ul

      //name

      //image
      const newImg = document.createElement('img'); //create image element
      newImg.src = data.drinks[0].strDrinkThumb; //change source
      document.getElementById('slide1').appendChild(newImg) //append to li (inside)

      //ingredients
      const newIng = document.createElement('p');
      //newIng.innerText = data.drinks[0].


        //instructions
     const newInstruct = document.createElement('p');
     newInstruct.innerText = data.drinks[0].strInstructions;
     document.getElementById('slide1').appendChild(newInstruct)



      //const allDrinks = data.drinks
      //console.log(allDrinks)

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}