//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
let isFetchedCalled = false;

document.querySelector('button').addEventListener('click', getDrink)

function getDrink(){

if(isFetchedCalled){
    console.log("Cannot Fetch Again!")
}else 

fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=y')
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        //console.log(data)
      //console.log(data.drinks[0])
      //console.log(data.drinks.length)
      //document.querySelector('h2').innerText = data.drinks[0].strDrink
      //document.querySelector('img').src = data.drinks[0].strDrinkThumb
      //document.querySelector('h3').innerText = data.drinks[0].strInstructions

      for(i=0;i<data.drinks.length;i++){

      
      //li element
      const newLi = document.createElement('li'); //create li element
      newLi.classList.add("slide"); //add class
      newLi.id = "slide" + [i]; //add class
      document.getElementById('data-slides').appendChild(newLi) //append li to ul

      //name
      const newDrinkName = document.createElement('h2');
      newDrinkName.innerText = data.drinks[i].strDrink
      document.getElementById('slide' + [i]).appendChild(newDrinkName)

      //image
      const newImg = document.createElement('img'); //create image element
      newImg.src = data.drinks[i].strDrinkThumb; //change source
      document.getElementById('slide' + [i]).appendChild(newImg) //append to li (inside)

      //ingredients
            //ingredients list
            let ingredientList = [];
            const keys = Object.keys(data.drinks[i]) //keys of drink object
            //console.log(keys)
            const ingredientKeys = keys.filter( property => property.includes("strIngredient")) //ingredients keys
            //console.log(ingredientKeys) 
    
            ingredientKeys.forEach(ingredientKey => {
                const ingredientValue = data.drinks[0][ingredientKey];
                if (ingredientValue) {
                ingredientList.push(ingredientValue);
                }
            });
  
            console.log(ingredientList);

            const ingredientsString = ingredientList.join(", ")
            console.log(ingredientsString)
      

      const newIngredients = document.createElement('p'); //create p element
      newIngredients.innerText = `Ingredients: ${ingredientsString}`;// insert text
      document.getElementById('slide' + [i]).appendChild(newIngredients)// add to Li
      


        //instructions
     const newInstruct = document.createElement('p'); //create p element
     newInstruct.innerText = 'Instructions: ' + data.drinks[i].strInstructions;// insert text
     document.getElementById('slide' + [i]).appendChild(newInstruct)// add to Li



      //const allDrinks = data.drinks
      //console.log(allDrinks)

      isFetchedCalled = true;
    }

    })
    .catch(err => {
        console.log(`error ${err}`)
    });

}


// Select all elements with the attribute [data-carousel-button] and store them in the 'buttons' constant
const buttons = document.querySelectorAll('[data-carousel-button]')

// Iterate over each button using forEach
buttons.forEach(button => {
    // Add a click event listener to each button
    button.addEventListener('click', () => {
        // Determine the offset based on the value of the 'data-carouselButton' attribute
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;

        // Find the closest ancestor with the attribute [data-carousel]
        const slides = button
            .closest("[data-carousel]")
            .querySelector('[data-slides]');
            //console.log(slides)

        // Find the currently active slide within the 'slides'
        const activeSlide = slides.querySelector('[data-active]');

        // Calculate the index of the new slide using the offset
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        let newIndex2 = [...slides.children]
        console.log(newIndex)

        // Ensure the index stays within the bounds of the slides array
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        // Set the 'data-active' attribute on the new slide and remove it from the active slide
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});