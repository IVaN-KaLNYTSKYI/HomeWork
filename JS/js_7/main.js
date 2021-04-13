/*/!*
- Создать произвольный елемент с id = text. Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".*!/
const div=document.createElement("div");
document.body.append(div);
div.style.height='100px';
div.style.width='100px';
div.style.backgroundColor='red';
div.setAttribute("id","text");

const byt=document.getElementById('btn');
byt.onclick=(ev)=>{
    ev.preventDefault();
    div.style.display="none";
}*/

/*/!*
- Создайте кнопку, при клике на которую, она будет скрывать сама себя.*!/

const div=document.createElement("input");
div.setAttribute("type","submit");
document.body.append(div);
div.onclick=(ev)=>{
    ev.preventDefault();
    div.style.display="none"
}*/

/*/!*
- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
    При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
*!/

const input=document.createElement("input");
input.setAttribute("type","text");
document.body.append(input);

const div=document.createElement("input");
div.setAttribute("type","submit");
div.setAttribute("value","Перевірка")
document.body.append(div);

div.onclick=(ev)=>{
    if(input.value<18){
        alert("вік менше за 18")
    }else alert("можна дорослі сайти")
    console.log(input.value);
}*/

/*/!*
- Создайте меню, которое раскрывается/сворачивается при клике*!/

const forms=document.forms.form;
forms.style.display='none'
const divs=document.createElement("input");
divs.setAttribute("type","submit");
divs.setAttribute("value","forms")
document.body.append(divs);
let resalt=true;
divs.addEventListener('click' , (ev)=>{
    ev.preventDefault()
    resalt?forms.style.display="":forms.style.display="none";
    resalt?divs.value="forms yes":divs.value="forms no";
    resalt= !resalt;
})*/

/*/!*
- Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
    Вывести список комментариев в документ, каждый в своем блоке.
    Добавьте каждому комментарию по кнопке для сворачивания его body.*!/

const coment=[
    {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem1', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem2', body:'lorem ipsum dolo sit ameti'},
    {title : 'lorem3', body:'lorem ipsum dolo sit ameti'}
]

for (let coments of coment){
    const div=document.createElement("div");
    document.body.append(div);
    div.innerText=`${coments.title} ${coments.body} `;
    const but=document.createElement("button");
    but.innerText="скрити";
    document.body.append(but);
    but.onclick=()=>{
        div.style.display='none'
    }

}*/

/*/!*
- Створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
    Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.*!/

const forms=document.forms.formOne;
const formsTwo=document.forms.formTwo;

const but=document.createElement("button");
document.body.append(but);
but.innerText="считати дані";

but.onclick=()=>{
    console.log(forms.someText.value);
    console.log(forms.someTextOne.value);
    console.log(formsTwo.someZero.value);
    console.log(formsTwo.someOne.value);
}*/

/*
/!*
- Створити функцію, яка генерує таблицю.
    Перший аргумент визначає кількість строк.
    Другий параметр визначає кліькіть ячеєк в кожній строці.
    Третій параметр визначає елемент в який потрібно таблицю додати.
    *!/

function  gener(stro,ret,tag){
    let tabl=document.createElement("table");
    for (let i=0;i<stro;i++){
        let tr=document.createElement("tr");
        tabl.appendChild(tr);
        for (let j=0;j<ret;j++){
            let th=document.createElement("th");
            th.innerText="hello";
            tr.appendChild(th);
        }
    }
    let tagName=document.createElement(tag);
    document.body.append(tagName);
    tagName.appendChild(tabl);
}

gener(2,2,'div')*/

/*- Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.*/

/*                                          РОБОТА В АУДИТОРІЇ                                    */

/*
/!*
- Сворити масив нецензцрних слів.
    Сворити інпут текстового типу.
    Якщо людина вводить слово і воно міститься в масиві нецензурних слів кинути алерт з попередженням.
    Перевірку робити при натисканні на кнопку*!/

const arr=["сука","лох","підер"];

const input=document.createElement("input");
input.setAttribute("type","text");
document.body.append(input);

const but=document.createElement("button");
document.body.append(but);
but.innerText="перевірка";

but.onclick=()=>{

   arr.filter((v)=>{
       if(v===input.value){
           return alert("no");
       }
       return 0;
   })
}
*/

/*/!*Сворити масив нецензцрних слів.
    Сворити інпут текстового типу.
    Потрібно перевіряти чи не містить ціле речення в собі погані слова.
    Кинути алерт з попередженням у випадку якщо містить.
    Перевірку робити при натисканні на кнопку*!/

const arr=["сука","лох","підер"];

const input=document.createElement("input");
input.setAttribute("type","text");
document.body.append(input);

const but=document.createElement("button");
document.body.append(but);
but.innerText="перевірка";

but.onclick=()=>{
    arr.filter((v)=>{
        input.value.split(" ").filter((i)=>{
            if (v===i){
                return alert("no");
            }
             return 0
        })
    })
}*/

/*-- Взяти масив юзерів
Створити три чекбокси. Кожний з них активує фільтр для вищевказаного масиву. Фільтри можуть працювати як разом так і окремо.
1й - відфільтровує юзерів зі статусом false (залишає зі статусом false)
2й - залишає старших 29 років включно
3й - залишає тих в кого місто Київ
Дані виводить в документ*/

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];


const forma = document.forms.form;
forma.check1.onclick = () => {
    let div = document.createElement("div");
    document.body.append(div);
    if (forma.check1.checked) {
        usersWithAddress.filter((v) => {
            if (v.isMarried === false) {
                let p = document.createElement("p");
                div.appendChild(p)
                p.innerText = `${v.id} ${v.name} ${v.age} ${v.isMarried} ${v.address.city} ${v.address.street} ${v.address.number}`;
            }
        })
    }
}
forma.check2.onclick = () => {
    let div = document.createElement("div");
    document.body.append(div);
    if (forma.check2.checked) {
        usersWithAddress.filter((v) => {
            if (v.age > 29) {
                let p = document.createElement("p");
                div.appendChild(p)
                p.innerText = `${v.id} ${v.name} ${v.age} ${v.isMarried} ${v.address.city} ${v.address.street} ${v.address.number}`;
            }
        })
    } else div.style.display = 'none'
}
forma.check3.onclick = () => {
    let div = document.createElement("div");
    document.body.append(div);
    if (forma.check3.checked) {
        usersWithAddress.filter((v) => {
            if (v.address.city === 'Kyiv') {
                let p = document.createElement("p");
                div.appendChild(p)
                p.innerText = `${v.id} ${v.name} ${v.age} ${v.isMarried} ${v.address.city} ${v.address.street} ${v.address.number}`;
            }
        })
    }
}


/*    ось  це неззззз */

/*- Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.*/

/*
Створити скрипт, котрий бере зчитує на сторінці (rules.html) текст і робить збоку меню-зміст по всіх заголовках які є в тексті.
    При кліку на пункт заголовку ви маєте відправлятись  до цього пункту в тексті
    */
