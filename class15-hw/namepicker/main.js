document.querySelector('button').addEventListener('click', otherV)
document.querySelector('#resetButton').addEventListener('click', reset)

function otherV(){
   let numberOne = document.querySelector('#thisValue').value
   let numberTwo = document.querySelector('#thisValue2').value
   let numberThree = document.querySelector('#thisValue3').value
   let numberFour = document.querySelector('#thisValue4').value
   let numberFive = document.querySelector('#thisValue5').value
    
   let nums = [numberOne, numberTwo, numberThree, numberFour, numberFive]
   console.log(nums) 
   
   let numArray = nums.map(Number)
   console.log(numArray)

   let positiveNums = numArray.filter(nums => nums > 0)
   console.log(positiveNums)
    
   let sumNums = 0;

   for(let i = 0; i < positiveNums.length; i++){
       sumNums += positiveNums[i]
   }
   
      
    document.querySelector('#resultText').innerText = sumNums
    
}


function reset(){
    document.querySelector('#thisValue').value = ""
    document.querySelector('#thisValue2').value = ""
    document.querySelector('#thisValue3').value = ""
    document.querySelector('#thisValue4').value = ""
    document.querySelector('#thisValue5').value = ""
    document.querySelector('#resultText').innerText = ""
}