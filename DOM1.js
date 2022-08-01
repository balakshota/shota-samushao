//let element = document.getElementById('root'); //abrunebs elements id-is mixedvit 
//let list = document.getElementsByClassName('mylist'); abrunebs elements klasis mixedvit
//let list = document.getElementsByTagName('li') //abrunebs elements tagis mixedvit
//let list = document.querySelectorAll('li'); //abrunebs elementebis masivs css eleqtoris mixedvit
//let selec = document.querySelector('.mylist'); //abrunebs elementis obieqts css seleqtoris mixedvit


// list.forEach(el=>{
//    el.innerText = el.innerText.length < 9 ?el.innerText : 'dasashveb simboloze metia '

// })


// for (let index = 0; index < list.length; index++) {
//     const el = list[index];
//      el.innerText = el.innerText.length < 9 ?el.innerText : 'dasashveb simboloze metia '
// }

// function changeText(el) {
//     el.innerHTML = 'ტექსტი ჩანაცვლდა'
// }

// list.forEach(el=>{
//     el.onclick = ()=>{
//         el.innerHTML = `<h1> ${el.innerHTML} </h1>`
//     }
// })
// list.forEach(el =>{
//     el.addEventListener('click', function(){
//         this.innerHTML = `<h1> ${this.innerHTML} </h1>`
//     })
// })

let plus = document.querySelector('.btn-success');
let minus = document.querySelector('.btn-warning');
let update = document.querySelector('#update');
let count = 1;

plus.addEventListener('click', function(){
    update.value = ++count;
})
minus.addEventListener('click',function(){
    update.value = count > 1 ? --count : 1 
})


let decrease = document.querySelector('#decrease');
let reset = document.querySelector('#reset');
let increase = document.querySelector('#increase');

decrease.addEventListener('click', () =>{ 
    number.innerHTML--;
})
reset.addEventListener('click', ()=>{
    number.innerHTML = 0
})

increase.addEventListener('click', ()=>{
    number.innerHTML++;
})

if(number.innerHTML > 0){
    document.getElementById('number').style.color="green"
}if (number.innerHTML < 0) {
    document.getElementById('number').style.color="red"
}