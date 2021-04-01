/*1) створити функцію яка приймає масив та виводить його
2) створити функцію яка заповнює масив рандомними числами та виводить йогоння . Для виведевикористати попередню функцію.
3) створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
4) створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
5) створити функцію яка повертає найбільше число з масиву
6) створити функцію яка повертає найменьше число з масиву
7) створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.
8) створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
9) Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]
10) Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
EXAMPLE:
    [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]
11) створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
    EXAMPLE:
[1,2,3,4]
    [2,3,4,5]
результат
    [3,5,7,9]*/

/*                                           TASK  1,2,3,4,5,6,7,8,9,10,11                                                   */
/*TASK-1*/

/*
let arry=[1,23,4,56,7,879];
function arryVuvid (arr){
   console.log(arr);
}
arryVuvid(arry);
*/

/* TASK-2*/

/*
let arryOne=[];
function random(ar,m,n){
    for (let iter=0;iter<5;iter++){
        ar.push(Math.floor(Math.random()*m)+n);
    }
    console.log(ar)
}
random(arryOne,23,1);
arryVuvid(arryOne);
*/

/* TASK-3*/

/*
let a="хтось скимсь рівні"
function minNamber(nam1,nam2,nam3){
    if(nam1>nam3&&nam2>nam3){
      return nam3
    }else if(nam1<nam2&&nam3>nam1){
        return nam1
    }
    else if(nam3>nam2&&nam2<nam1) {
        return nam2
    }
    else {
        return a
    }
}
let  minNambe=minNamber(3,4,1)
console.log(minNambe);
*/

/* TASK-4*/

/*
let a="хтось скимсь рівні"
function maxNamber(nam1,nam2,nam3){
    if(nam1>nam3&&nam1>nam2){
        return nam1
    }else if(nam1<nam2&&nam2>nam3){
        return nam2
    }
    else if(nam3>nam2&&nam3>nam1) {
        return nam3
    }
    else {
        return a
    }
}
let  maxNambe=maxNamber(2,1,4)
console.log(maxNambe);
*/


/* TASK-5*/

/*let m=0;
function maxArry(arr){
    for (let i=0;i<arr.length;i++){
        if(arr[i]>m){
           m=arr[i];
        }
    }
    return m
}
let a =maxArry([4,43,54656,7687878])
console.log(a)*/

/* TASK-6*/

/*
function minArry(arr){
    let z=arr[0];
    /!*let z=maxArry(arr)*!/ // так і так може бути
    for (let i=0;i<arr.length;i++){
        if(arr[i]<z){
            z=arr[i];
        }
    }
    return z
}
let q =minArry([5,43,54656,7687878])
console.log(q)
*/

/* TASK-7*/

/*
function  suma(arry){
    let sum=0;
    for (item of arry){
        sum+=item;
    }
    return sum;
}
let sumas = suma([1,2,3,4])
console.log(sumas);*/

/* TASK-8*/

/*function  suma(arry){
    let sum=0;
    for (item of arry){
        sum+=item/arry.length;
    }
    return sum;
}
let sumas = suma([1,4,3,4])
console.log(sumas);*/

/* TASK-9*/

/*
let a=[];
function  item(arry){
    for (let i=0;i<arry.length;i++){
        for (let retro in arry[i]){
          a.push(retro);
        }
    }
    return a;
}
let items = item([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(items);
*/

/* TASK-10*/

/*
let a=[];
function  item(arry){
    for (let i of arry){
        for (let retro in i){
            a.push(i[retro])
        }
    }
    return a;
}
let items = item([{name: 'Dima', age: 13}, {model: 'Camry'}])
console.log(items)
*/

/* TASK-11*/

/*
let sumArr=[];
function  suma(arry,arryTwo){
    let suma=0;
    for (let i=0;i<arry.length;i++) {
      for (let j=0;j<arryTwo.length;j++)  {
          if(i===j){
              sumArr.push(suma=arry[i]+arryTwo[j]);
          }
      }
    }
    return sumArr;
}
let sumas = suma([1,4,3,4,4,10],[1,4,3,4,4,9])
console.log(sumas);*/

/*- створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
- Взяти задачі з завдання 10 та 9 та обєднати їх в одну динамічну функцію.
    Що б я міг сам вибрати повернути мені масив ключів чи масив значень.
- Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"

- Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
Двожина масиву від 2 до 100
Приклад
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]

- Дано список імен.
let n1 = '    Harry       Potter      '
let n2 = '    Ron       Whisley      '
let n3 = '    Hermione       Granger      '
Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
let n1 = 'Harry Potter'
let n2 = 'Ron Whisley'
let n3 = 'Hermione Granger'*/

/*                                           TASK  12,13,14,15                                 */

/*TASK-12*/

/*let m=0;
function maxMinArry(arr){
    let z=arr[0];
    for (let i=0;i<arr.length;i++){
        if(arr[i]>m){
            m=arr[i];
        }
        if(arr[i]<z){                  // через масив
            z=arr[i];
        }
    }
    console.log(m);
    return z
}
let a =maxMinArry([4,43,54,76,2,45,65])
console.log(a)*/

/*
let m=0;
function maxMinArry(){
    let z=arguments[0];
    for (let i=0;i<arguments.length;i++){
        if(arguments[i]>m){
            m=arguments[i];
        }                             // через аргументи

        if(arguments[i]<z){
            z=arguments[i];
        }
    }
    console.log(m);
    return z
}
let a =maxMinArry(4,43,54,76,2,45,65)
console.log(a)*/

/*TASK-13*/

/*let vvidOne=prompt("ключі або значення");
/!*let vvidTwo=confirm("повернути мені масив ключів");*!/
let a=[];
function  item(arry){
    for (let i=0;i<arry.length;i++){
        for (let retro in arry[i]){
            if(vvidOne==="ключі"){
                a.push(retro);
            }                                         //два методи якщо хочете що б ви могли самі вибрати повернути вам масив ключів чи масив значень.
            else if(vvidOne==="значення"){
                a.push(arry[i][retro]);
            }
            else{
            return 0;
            }
          /!*  if(vvidTwo===true){
                a.push(retro);
            }
             else if(vvidTwo===false){
                a.push(arry[i][retro]);
            }
            else{
            return 0;
            }
            *!/
        }
    }
    return a;
}
let items = item([{name: 'Dima', age: 13}, {model: 'Camry'}]);
console.log(items);*/

/*TASK-14*/

/*
let q=0;
function maxMinArry(arr,namber){
    for (let i=0;i<arr.length;i++){
        if(i===namber) {
            p=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=p;
        }
        else {
            return namber;
        }
    }
   return arr
}
let a =maxMinArry([1,2,3,4,5,6],3)
console.log(a)
*/

/*TASK-15*/

/*
let arr1=[1,0,6,0,3];
function numbersInput (inArr){
    for (let i=inArr.length-1;i>=0; i--){
        if(inArr[i] === 0){
            inArr.push(inArr[i]);
            inArr.splice(i,1);          //??????????
        }
    }
    return inArr;
}
let rez = numbersInput(arr1);
console.log(rez);*/


/*TASK-16*/
/*

let n1 = '                     Harry                      Potter              ';
let n2 = '    Ron               Whisley      ';
let n3 = '                   Hermione       Granger      ';

let r=n1.trim();
console.log(r)

/!*let strings = n1.replaceAll(" ","");    //це не треба
console.log(strings);*!/

let o=r.split(" ");
console.log(o)
                                            // ну я це незміг зробити підкажіть
for(let i=0;i<o.length;i++) {
    let q = document.createElement('span');
    document.body.appendChild(q);
    if(o[i]!==''){
        n1=o[0].concat(" Potter")
    }
}
console.log(n1)*/


/*
// ******************* НАЗАД В МИНУЛЕ *********************** //
Створити функцію яка :
    - Додає в боді блок з текстом "Hello owu"
- Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
    Для кожного автомобіля створити свій блок, та додати йогто в елемен, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
- приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
    Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
    Для кожної властивості створити всередені блока автомоблія свій блок
// ******************* НАЗАД В МИНУЛЕ *********************** //*/



/*                                             ?????  незнаю чи зробив гуд???                                                          */


/*function dodavBlok(text){
    document.body.innerText=`${text}`;
}
dodavBlok("Hello owu");*/

/*function dodavBlok(tag,text){
    let pTag=document.createElement(tag);
    document.body.appendChild(pTag);
    pTag.innerText=text;
}
dodavBlok("p","erere");*/


/*
let pTag=document.createElement('div');
document.body.appendChild(pTag);

function dodavBlok(itemAvto,iD){
    for (let items of itemAvto){
        let element = document.createElement('p');
        pTag.appendChild(element);
        pTag.id=iD;
        document.getElementById(iD);
        element.innerText=items;
    }
}
dodavBlok(['mazda','tesla'],'help');*/

/*
let pTag=document.createElement('div');
document.body.appendChild(pTag);

function dodavBlok(itemAvto,iD){
    for (let items of itemAvto){
        let div=document.createElement('div');
        for ( let item in items ){
            let element = document.createElement('div');
            div.appendChild(element);
            element.innerText=`${item}:${items[item]}`;
        }
        pTag.id=iD;
        pTag.appendChild(div);
    }
}
dodavBlok([{marka:'masda',color:'red',active:'true'},
    {marka:'tesla',color:'red',active:'true'}],'help');*/
