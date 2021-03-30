/*
1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :
a) отримує текст з параграфа з id "content"
b) отримує текст з блоку з id "rules"
c) замініть текст параграфа з id 'content' на будь-який інший
d) замініть текст параграфа з id 'rules' на будь-який інший
e) змініть кожному елементу колір фону на червоний
f) змініть кожному елементу колір тексту на синій
g) отримати весь список класів елемента з id=rules і вивести їх в console.log
h) отримати всі елементи з класом fc_rules
i) поміняти колір тексту у всіх елементів fc_rules на червоний
*/
/*TASK-1,2,3,4,5,6,7,8,9*/
/*let idContent=document.getElementById('content');
console.log(idContent);
console.log(idContent.innerText);*/

/*let idRules=document.getElementById('rules');
console.log(idRules);
console.log(idRules.innerText);*/

/*
let idContentText=document.getElementById('content');
idContentText.innerText='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis cupiditate deleniti\n' +
    '    molestias mollitia pariatur porro saepe!';
console.log(idContentText.innerText);*/

/*
let idRulesText=document.getElementById('rules');
idRulesText.innerText='Первое правило Бойцовского клуба: никому не рассказывать о Бойцовском клубе.';
console.log(idRulesText.innerText);*/

/*
let colContent=document.getElementById('content');
let colRules = document.getElementById('rules');
let colFcRules = document.getElementsByClassName('fc_rules');
colContent.style.backgroundColor='red';
colRules.style.backgroundColor='red';

for (let i=0;i<colFcRules.length;i++){
    colFcRules[i].style.backgroundColor='red';
}
*/

/*let colContent=document.getElementById('content');
let colRules = document.getElementById('rules');
let colFcRules = document.getElementsByClassName('fc_rules');
colContent.style.color='blue';
colRules.style.color='blue';

for (let i=0;i<colFcRules.length;i++){
    colFcRules[i].style.color='blue';
}
*/

/*let idRules=document.getElementById('rules');
console.log(idRules.classList);
*/

/*
let elemFcRules = document.getElementsByClassName('fc_rules');
console.log(elemFcRules);
*/

/*let colFcRules = document.getElementsByClassName('fc_rules');
for (let i=0;i<colFcRules.length;i++){
    colFcRules[i].style.color='red';
}*/


/*----------------------------------------------------------------------------------------------*/

/*
2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    Вставити цей блок на сторінку
3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
*/
/*TASK-10,11*/

/*
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

for (let i=0;i<users.length;i++){
    const creat=document.createElement('div');
    creat.style.backgroundColor='red';
    creat.style.margin='10px';
    creat.innerText=`${users[i].name}
    ${users[i].age}
    ${users[i].status}
    ${users[i].address.city}
    ${users[i].address.country}
    ${users[i].address.houseNumber}
    ${users[i].address.street}
    `
    document.body.appendChild(creat);
    console.log(creat);
}
*/

/*let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
    name: 'max',
    age: 30,
    status: true,
    address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
    name: 'max',
    age: 31,
    status: true,
    address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

for (let i=0;i<users.length;i++){
    const creat=document.createElement('div');
    creat.style.backgroundColor='red';
    creat.style.margin='10px';
    creat.innerText=`${users[i].name}
    ${users[i].age}
    ${users[i].status}`;

    const creatAdd=document.createElement('div');
    creatAdd.style.backgroundColor='blue';


    const creatP1=document.createElement('p');
    creatP1.style.color='red';
    creatP1.innerText=`${users[i].address.city}`;
    const creatP2=document.createElement('p');
    creatP2.style.color='red';
    creatP2.innerText=`${users[i].address.country}`;
    const creatP3=document.createElement('p');
    creatP3.style.color='red';
    creatP3.innerText=`${users[i].address.street}`;
    const creatP4=document.createElement('p');
    creatP4.style.color='red';
    creatP4.innerText=`${users[i].address.houseNumber}`;

    document.body.appendChild(creat);
    creat.appendChild(creatAdd);
    creatAdd.appendChild(creatP1);
    creatAdd.appendChild(creatP2);
    creatAdd.appendChild(creatP3);
    creatAdd.appendChild(creatP4);
}*/

