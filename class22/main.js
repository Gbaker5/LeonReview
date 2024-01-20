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


