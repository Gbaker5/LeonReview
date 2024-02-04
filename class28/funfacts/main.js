
document.querySelector('button').addEventListener('click', getNewKeanu)

function getNewKeanu(){
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
    newLi.classList.add('picLi')
    document.querySelector('#holder').appendChild(newLi)

    const newKeImg = document.createElement('img');
    newKeImg.src = source;
    document.querySelector('.picLi').appendChild(newKeImg)
}

    