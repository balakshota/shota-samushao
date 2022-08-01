let date = new Date();
let day = date.getDate();//abrunebs ricxvs
date.setDate(day + 17)
let uptday = date.getDate();


let currday = date.getDay();//abrunebs kviris dres
let month = date.getMonth() +1;//abrunebs tves
let year = date.getFullYear();//abrunebs wels

let hour = date.getHours();//abrunebs saatebs
let min = date.getMinutes();//abrunebs wutebs
let sec = date.getSeconds();//abrunebs wamebs
let milsec = date.getMilliseconds();//abrunebs milliwamebs
let datestr = date.toLocaleDateString(); //abrunebs dgevandel dges
let timestr = date.toLocaleTimeString(); //abrunebs mtlian dros
let localstr = date.toLocaleString(); //abrunebs dris da dges


console.log(month);

console.log(uptday + '/' + month + '/' +year);


let startdate = new Date();
let enddate = new Date('2022/7/27')
startdate = startdate.getTime();
enddate = enddate.getTime();

let milsec2 = enddate - startdate;

let sec2 = Math.floor(milsec2 /1000);
let min2 = Math.floor(sec2 / 60);
let hour2 = Math.floor(min2 / 60);
let days2 = Math.floor(hour2 /24);
if(days2 == 0){
    console.log('bozo');
}
console.log(days2);
// console.log(convert);

// function convert() {
//     let hours3 =  hour2 - (days2 * 24);
//     let min3 = min2 - (hours3*60);
// }

let obj = [
    {
        name:'blog',
        description:'description',
        date:'2022/7/26',
        category:'category',
        active:true,
        num:'ნახვა:1000',
    },
    {
        name:'blog',
        description:'description',
        date:'2022/7/26',
        category:'category',
        active:true,
        num:'ნახვა:1000'
    },
    {
        name:'blog',
        description:'description',
        date:'2022/7/26',
        category:'category',
        active:true,
        num:'ნახვა:1000'
    }

]

let blog = obj.forEach(el => {
    let blogs=`
<div class="card">
  <div class="card-body">
    <h5 class="card-title">დასახელება: ${el.name}</h5>
    <h5 class="card-title">აღწერა: ${el.description}</h5>
    <h5 class="card-title">დღე: ${el.date}</h5>
    <h5 class="card-title">ნახვა: ${el.num}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    `
document.getElementById('data').innerHTML += blogs;
})

let dd = [
    {
        year:'2022',
        month:'07',
        day:'26'
    }
]
let dd2 = dd.forEach(el =>{
    let dd3 =`
    <div class="card">
  <div class="card-body">
    <h5 class="card-title">${el.year}/${el.month}/${el.day}</h5>
  </div>
</div>
    `
document.getElementById('data').innerHTML += dd3; 
})

let date_1 = new Date('1995/5/26');
let date_2 = new Date();
 let diff = date_2.getTime() - date_1.getTime();
 
 let sec3 = Math.floor(diff /1000);
let min3 = Math.floor(sec3 / 60);
let hour3 = Math.floor(min3 / 60);
let days3 = Math.floor(hour3 /24);

let week = days3 % 7;
if (week == 4) {
    document.getElementById('data').innerHTML = 'პარასკევი'
}
console.log(week);

let date_3 = new Date('2005/3/11');
let date_4 = new Date('2005/3/24');
 let diff2 = date_4.getTime() - date_3.getTime();
 
 let sec4 = Math.floor(diff2 /1000);
let min4 = Math.floor(sec4 / 60);
let hour4 = Math.floor(min4 / 60);
let days4 = Math.floor(hour4 /24);
console.log(days4);

//if else
let test = 1 == 2 ? 'true' : 'false';

let day5 = startdate.getDay();
let strday;

switch (day) {
    case 0:
        strday = 'kvira'
        break;

        case 1:
        strday = 'orshabati'
        break;

        case 2:
        strday = 'samshabati'
        break;

        case 3:
        strday = 'otxshabati'
        break;

        case 4:
        strday = 'xutshabati'
        break;

        case 5:
        strday = 'paraskevi'
        break;

        case 6:
        strday = 'shabati'
        break;

    default:
        break;
}