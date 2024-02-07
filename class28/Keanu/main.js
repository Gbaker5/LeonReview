
//random number between 0 and 10
let Random = Math.floor(Math.random() * 10)
console.log(Random)

let keanuGifArr = [
    'url(images/keanu1.gif)',
    'url(images/keanu2.gif)',
    'url(images/keanu3.gif)',
    'url(images/keanu4.gif)',
    'url(images/keanu5.gif)',
    'url(images/keanu6.gif)',
    'url(images/keanu7.gif)',
    'url(images/keanu8.gif)',
    'url(images/keanu9.gif)',
    'url(images/keanu10.gif)',
]

document.querySelector('.topHalf').style.backgroundImage = keanuGifArr[Random]


document.querySelector('button').addEventListener('click', getNewKeanu)

count = 0;

function getNewKeanu(){

     // Increment count
   count++;
   console.log("Count:", count);

    //input values
    let width = document.querySelector('#width').value 
    console.log(width)
    let height = document.querySelector('#height').value 
    console.log(height)
    let type = document.querySelector('#type').value
    console.log(type)

    //create source
    let source = "";
    if(width == "" && height == "" && type == ""){ //no entries
        source = 'https://placekeanu.com/200/150'
    }else if(height == "" && type == ""){   //only width entry
        source = `https://placekeanu.com/${width}/150`
    }else if(width == "" && type == ""){ //only height entry
        source = `https://placekeanu.com/200/${height}`
    }else if(width == "" && height == ""){ //only type entry
        source = `https://placekeanu.com/200/150/${type}`
    }else source = `https://placekeanu.com/${width}/${height}/${type}`//entries for all inputs
    
    
    //create element to hold image
    const newLi = document.createElement('li'); //create li element;
    newLi.classList.add('picLi' + count)
    document.querySelector('#holder').appendChild(newLi)

    const newKeImg = document.createElement('img');
    newKeImg.src = source;
    document.querySelector('.picLi' + count).appendChild(newKeImg)

    
    //document.querySelector('.topHalf').style.backgroundImage = <iframe src="https://giphy.com/embed/0lGOCxq1V8N7E1icuQ" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/HBOMax-matrix-trilogy-matrixonhbomax-0lGOCxq1V8N7E1icuQ">via GIPHY</a></p>
}

    