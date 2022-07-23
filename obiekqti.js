let prop = 'model'

let car = {
    img:'https://static.my.ge/myauto/photos/4/6/4/0/6/thumbs/75604649_1.jpg?v=1',
    model:'toyota',
    year:2020
}
console.log(car[prop]);

let value = Object.values(car);
console.log(value); 
car.year = 2021;
Object.freeze(car);
// Object.isFrozen(car);
console.log(Object.isFrozen(car));
car.year = 2022;

let keys = Object.keys(car);
console.log(keys );

for (const key in car) {
    const element = car[key];
    console.log(element);
}

let users2 = `
<div class="card col-lg-4 mx-auto">
    <img src="${car.img}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title">${car.model}</h5>
        <p class="card-text">გამოშვების წელი ${car.year}</p>
    </div>
</div>
`
document.getElementById('user').innerHTML = users2;

let MyUsers = [

    {
        name:'admin1',
        age:45,
        role:'admin'
    },
    {
        name:'momxmarebeli',
        age:20,
        role:'manager'
    },
    {
        name:'momxmarebeli',
        age:20,
        role:'manager'
    }
]


 let finduser = MyUsers.forEach(el=>{
    let users = `
<div class = "row">
    <div class="col">
        <div class="card col-lg-4 mx-auto">
            <div class="card-body">
            <h5 class="card-title">${el.name}</h5>
                <p class="card-text">გამოშვების წელი: ${el.age}</p>
                <p class="card-text">როლი:${el.role}</p>
            </div>
        </div>
    </div>
</div>

`
document.getElementById('user').innerHTML += users;
})
console.log(finduser);

let sak = [
    {
        img:'https://static.my.ge/myauto/photos/4/6/4/0/6/thumbs/75604649_1.jpg?v=1',
        text:'somebody',
        text2:'somebody2',
        bigtext:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' 
    },
    {
        img:'https://static.my.ge/myauto/photos/4/6/4/0/6/thumbs/75604649_1.jpg?v=1',
        text:'somebody',
        text2:'somebody2',
        bigtext:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' 
    },
    {
        img:'https://static.my.ge/myauto/photos/4/6/4/0/6/thumbs/75604649_1.jpg?v=1',
        text:'somebody',
        text2:'somebody2',
        bigtext:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.' 
    }
]


let saklaso = sak.forEach(el=>{
    let sakla = `
<div class="row row-cols-1 row-cols-md-3 g-4">
  <div class="col">
    <div class="card">
      <img src="${el.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${el.text}</h5>
        <h5 class="card-title">${el.text2}</h5>
        <p class="card-text">${el.bigtext}</p>
      </div>
    </div>
  </div>
</div>
    `
document.getElementById('user').innerHTML += sakla;
})
