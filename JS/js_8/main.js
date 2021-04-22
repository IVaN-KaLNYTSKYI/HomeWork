/*
/!*
- Дана textarea.
    В неё вводится текст.
    Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.*!/

const text=document.getElementById("text");
text.oninput=(ev)=>{
    console.log(text.value);
    localStorage.setItem('text', text.value);
}
const textOne=localStorage.getItem("text");
text.innerText=textOne;
*/

/*/!*
- Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
    Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
    Сделайте ваш скрипт как можно более универсальным.*!/


const inputOne=document.getElementById("inp")
inputOne.oninput=(ev)=>{
    localStorage.setItem("inputOne",inputOne.value);
}
const inputSaveOne=localStorage.getItem("inputOne");
inputOne.value=inputSaveOne;

const text=document.getElementById("text");
text.oninput=(ev)=>{
    localStorage.setItem('text', text.value);
}
const textSave=localStorage.getItem("text");
text.innerText=textSave;

const checkBox=document.getElementById("checkbox");
checkBox.onclick=(ev)=>{
    localStorage.setItem("checkBox",checkBox.checked);
}
const checkBoxSave=JSON.parse(localStorage.getItem("checkBox"));
checkBox.checked=checkBoxSave;

const radio=document.getElementById("radio");
radio.onclick=(ev)=>{
    localStorage.setItem("radio",radio.checked);
}
const radioSave=JSON.parse(localStorage.getItem("radio"));
radio.checked=radioSave;

const select=document.getElementById("select")
select.oninput=(ev)=>{
    localStorage.setItem("select",select.value);
}
const selectSave=localStorage.getItem("select");
select.value=selectSave;*/

/*
-Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
Требование : хранить историю своих изменений (даже после перезагрузки страницы).
Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
*/

const text=document.getElementById("text");
const butt=document.getElementById("button");
const buttOne=document.getElementById("buttonHic");
let all=[];
butt.onclick=(ev)=>{
    all.push(text.value)
    localStorage.setItem('text',JSON.stringify(all));
}
const textOne=JSON.parse(localStorage.getItem("text"));

const sel=document.createElement("select");
buttOne.onclick=()=>{
for(let i=0;i<textOne.length;i++){
    const op=document.createElement("option")
    op.innerText=text.value=textOne[i];
    sel.appendChild(op);
}
document.body.append(sel);
}
sel.oninput=()=>{
   text.value=sel.value
}

/*

- Реализуйте записную книгу, хранящую данные в локальном хранилище.
    Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
Данные вводить через соответсвующую форму.
--Каждому контакту добавить кнопку для удаления контакта.


--Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта*/

/*

const form = document.getElementById("form");
const inp = document.getElementById("inp");
const inpOne = document.getElementById("inpOne");
const button = document.getElementById("button");
const butDel = document.createElement("button");
butDel.innerText = "REMOVE";
const butUpd = document.createElement("button");
butUpd.innerText = "UPD";
let a=[];
button.onclick = () => {
    let obj={
       User:`${inp.value}`
    }
    a.push(obj);
    localStorage.setItem("USER",JSON.stringify(a));
}
const inputSave = localStorage.getItem("USER");

   /!* const div = document.createElement("div");
    document.body.append(div);
    div.innerText = `${inputSave}`;
    div.append(butDel);
    div.append(butUpd);
    butDel.onclick = () => {
        localStorage.removeItem("USER")
        div.style.display = "none"
    }
    butUpd.onclick = () => {
    }*!/

*/
