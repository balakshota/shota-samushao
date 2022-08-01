let useARR =[
    1,
    2,
    3
]

for (const x of useARR) {
    console.log(x);
}

let trywhile =true;
let zs = 0;
while (trywhile ) {
    if (zs == 10){
        trywhile = false
        console.log('dasrulda');
    }else{
        console.log('gameorda ' + zs);
    }

    zs++
}

// let o = 0;
// let to = true;
// do {
//     o++
//     if (o == 10){
//         to = false
//     }

// console.log(o);    
// } while (to);

let empty = [];

let match = true
while(match){
    let curr = Math.round(Math.random() * 20)
    if(!empty.includes(curr )){ 
        empty.push(curr +'ss')
    }
    if (empty.length == 9) {
        match = false
     }
}
console.log(empty);