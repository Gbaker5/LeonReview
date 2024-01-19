//ch7
const musketeer = ["Athos", "Porthos", "Aramis"]

for(mk=0;mk< musketeer.length;mk++){
    console.log(musketeer[mk])
}
musketeer.pop();
console.log(musketeer)

musketeer.push("D'Artagnan");
console.log(musketeer)

musketeer.forEach(musket => {
    console.log(musket)
})

for(const muskies of musketeer){
    console.log(muskies)
}


const values = [3, 11, 7, 2, 9, 10];
const add = values.reduce((c,acc) => c + acc)
console.log(add)

console.log(Math.min(...values))

//function sayStop(){
   // wordArr = [];
    //let word = prompt("type any word, I'll stop asking when you say stop")
    //console.log(word)
    //while(word.toLowerCase() !== "stop"){
        //wordArr.push(word);
        //word = prompt("type any word, I'll stop asking when you say stop")
        
    //} console.log(wordArr)
//}

//sayStop()

const aurora = {
    health:150,
    strength:25,
    xp:0,

    describe(){
        return `Aurora has ${this.health} health points, ${this.strength} as strength and ${this.xp} xp points`
    }
};

// TODO: create the character object here

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;



console.log(aurora.describe());


// TODO: create the dog object here
const dog ={
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark (){
        return "bark!"
    }
}


console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
const circle = {
    circumference(){
       return (Math.PI)*(2 * r)
    },
    area(){
       return (r*r) * (Math.PI)
    }
}

console.log(`Its circumference is ${circle.circumference()}`);
console.log(`Its area is ${circle.area()}`);