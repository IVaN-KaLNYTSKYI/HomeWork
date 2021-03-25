/*TASK-1,2,3,4*/

/*let masNumber=[25,26,27,28,29];
console.log(masNumber);

let masName=['ivan','dima','petro','lola','andrii'];
console.log(masName);

let masActive=[true,false,false,true,true];
console.log(masActive);

let masIndex=[];
masIndex[0]='retro';
masIndex[1]=234;
masIndex[2]=true;
masIndex[3]='citi';
masIndex[4]='ivan';
console.log(masIndex);*/

/*TASK-5,6,7,8*/
/*
for (let name=0; name<10;name++){
    document.write(`<div>ivan</div>`);
}

for (let name=0; name<10;name++){
    document.write(`<div>ivan-${name}</div>`);
}

let name=0;
while (name<20){
    document.write(`<h1>ivan</h1>`);
    name++;
}

let name=0;
while (name<20){
    document.write(`<h1>ivan--${name}</h1>`);
    name++;
}
*/
/*TASK-9,10,11*/
/*
let number=[1,276,3,45,5,35,7,8,9,10];
for (let items=0;items<number.length;items++){
    console.log(number[items]);
}
for (items of number){
    console.log(
       items
    )
}

let char=['audi','retro','pol','papik','okten','ukr','real','milan','barca','ivan'];
for (let items=0;items<char.length;items++){
    console.log(char[items]);
}
for (items of char){
    console.log(
       items
    )
}

let raz=['213',454,'polend',true,'ok10',343.565,false,'puvo',45,'paps'];
for (let items=0;items<raz.length;items++){
    console.log(raz[items]);
}
for (items of raz){
    console.log(
        items
    )
}
*/

/*TASK-12,13,14*/
/*
let rizne=[12,false,'dsfe',34.32,'retro',true,false,344,'rere',false];
for (let item=0;item<rizne.length;item++){
    if(typeof rizne[item]==='boolean'){
        console.log(rizne[item]);
    }
}

for (let item=0;item<rizne.length;item++){
    if(typeof rizne[item]==='number'){
        console.log(rizne[item]);
    }
}
for (let item=0;item<rizne.length;item++){
    if(typeof rizne[item]==='string'){
        console.log(rizne[item]);
    }
}*/

/*TASK-15,16,17*/
/*
for (let j=0;j<10;j=j+1){
    console.log(j);
    document.write(`${j}`);
}

for (let j=0;j<100;j=j+1){
    console.log(j);
    document.write(`<h3>${j}</h3>`);
}
for (let j=0;j<100;j=j+2){
    console.log(j);
    document.write(`<h4>${j}</h4>`);
}
*/

/*TASK-18,19*/
/*
for (let numberTwo=0;numberTwo<100;numberTwo++){
    if (numberTwo%2===0){
        console.log(numberTwo);
        document.write(`<h6>${numberTwo}</h6>`);
    }
}

for (let numberNotTwo=0;numberNotTwo<100;numberNotTwo++){
    if (numberNotTwo%2!==0){
        console.log(numberNotTwo);
        document.write(`<h6>${numberNotTwo}</h6>`);
    }
}*/

/*TASK-20,21*/
/*
for (let xv=0;xv<=2;xv++){
    for (let cc=0;cc<60;cc++){
        console.log('хвилини-'+ xv +'секунди-'+cc);
    }
}
for (let hod = 0; hod <= 2; hod++) {
    for (let xv = 0; xv <= 60; xv++) {
        for (let cc = 0; cc < 60; cc++) {
            console.log('години-'+hod+'хвилини-' + xv + 'секунди-' + cc);
        }
    }
}*/

/*--------------------Додатково--------------------*/
/*- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.*/
/*TASK-1,2,3*/
/*
let char=[ 'a', 'b', 'c'];
let slovo='';
for (let items=0;items<char.length;items++){
    slovo+=char[items];
}
console.log(slovo);
let char=[ 'a', 'b', 'c'];
let  item=0
let slovo='';
while (item<3){
    slovo+=char[item];
    item++
}
console.log(slovo);

let char=[ 'a', 'b', 'c'];
let slovo='';
for (let items of char){
    slovo+=items;
}
console.log(slovo);
*/

/*TASK-22*/
/*
let bykvu=['a','d','c'];
for (let item=1;item<4;item++){
    bykvu.push(item);
}
console.log(bykvu);
/!*зробив двома варіантамі*!/
let bykvu=['a','d','c'];
let dodatu=1
for (let item=3;item<6;item++){
    bykvu[item]=dodatu++;
}
console.log(bykvu);*/

/*TASK-23,24,25*/
/*
let numbers=[1,2,3];
let novNumbers=[];
for (let a=numbers.length-1;a>=0;a--){
    novNumbers.push(numbers[a]);
}
console.log(novNumbers);

let numbers=[1,2,3];
for (let a=4;a<7;a++){
   numbers.push(a);
}
console.log(numbers);

let numbers=[1,2,3];
for (let a=4;a<7;a++){
    numbers.unshift(a);
}
console.log(numbers);
*/

/*TASK-26,27*/
/*
let cumvol=['js', 'css', 'jq'];
let oneCumvol=cumvol.shift();
console.log(oneCumvol);

let threeCumvol=cumvol.pop();
console.log(threeCumvol);
*/

/*TASK-28,29,30,31,32*/
/*
let number=[1,2,3,4,5];

console.log(number.slice(3,5));//28

console.log(number.slice(0,2));//29

let delet=number.splice(1,2);
console.log(number);//30

let dodatu=number.splice(3,0,'a', 'b', 'c');
console.log(number);//31

let dodatuOne=number.splice(1,0,'a', 'b', 'c');
let dodatuTwo=number.splice(7,0, 'c');
let dodatuThree=number.splice(9,0, 'e');
console.log(number);//32
*/

/*TASK-33,34,35*/
/*let arry=[1,2,3,4,5,6,7,8,9,10];
for (let  i=0;i<arry.length;i++){
    if(arry[i]%2===0){
        console.log(arry[i]);              //33
    }
}

let arryTwo=[];
for (let  i=0;i<arry.length;i++){         //34
    arryTwo.push(arry[i]);
}
console.log(arryTwo);

let arryThree=[];
for (let  i=0;i<arry.length;i++){         //35
   arryThree[i]=arry[i]
}
console.log(arryThree);*/

/*----------------------------------------------------------------------------------------------------------------------*/
/*зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
    1. перебрати його циклом while
    2. перебрати його циклом for
    3. перебрати циклом while та вивести  числа тільки з непарним індексом
4. перебрати циклом for та вивести  числа тільки з непарним індексом
5. перебрати циклом while та вивести  числа тільки парні  значення
6. перебрати циклом for та вивести  числа тільки парні  значення
7. замінити кожне число кратне 3 на слово "okten"
8. вивести масив в озвортньому порядку.
9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
10
створити пустий масив та :
    - заповнити його 50 парними числами за допомоги циклу.
- заповнити його 50 непарними числами за допомоги циклу.*/

/*let number=[2,17,13,6,22,31,45,66,100,-18];
let i=0
while (i<10){
    console.log(number[i]);
    i++;
}


let number=[2,17,13,6,22,31,45,66,100,-18];
for (let i=0;i<number.length;i++){
    console.log(number[i]);
}


let number=[2,17,13,6,22,31,45,66,100,-18];
let i=0
while (i<10){
    if(number[i]%2!==0){
    console.log(number[i]);}
    i++;
}


let number=[2,17,13,6,22,31,45,66,100,-18];
for (let i=0;i<number.length;i++){
    if(number[i]%2!==0){
        console.log(number[i]);
    }
}


let number=[2,17,13,6,22,31,45,66,100,-18];
let i=0
while (i<10){
    if(number[i]%2===0){
        console.log(number[i]);}
    i++;
}


let number=[2,17,13,6,22,31,45,66,100,-18];
for (let i=0;i<number.length;i++){
    if(number[i]%2===0){
        console.log(number[i]);
    }
}


let number=[2,17,13,6,22,31,45,66,100,-18];
for (let i=0;i<number.length;i++){
    if(number[i]%3===0){
        number[i]='okten';
    }
    console.log(number[i])
}


let number=[2,17,13,6,22,31,45,66,100,-18];
for (let i=number.length-1;i>=0;i--){
    console.log(number[i]);
}


let number=[2,17,13,6,22,31,45,66,100,-18];
let i=9
while (i>=0){
    console.log(number[i]);
    i--;
}


let number=[2,17,13,6,22,31,45,66,100,-18];
let i=9
while (i>=0){
    if(number[i]%2!==0){
        console.log(number[i]);}
    i--;
}


let number=[2,17,13,6,22,31,45,66,100,-18];
for (let i=number.length-1;i>=0;i--){
    if(number[i]%2!==0){
    console.log(number[i]);}
}


let number=[2,17,13,6,22,31,45,66,100,-18];
let i=9
while (i>=0){
    if(number[i]%2===0){
        console.log(number[i]);}
    i--;
}


let number=[2,17,13,6,22,31,45,66,100,-18];
for (let i=number.length-1;i>=0;i--){
    if(number[i]%2===0){
        console.log(number[i]);}
}


let number=[2,17,13,6,22,31,45,66,100,-18];
for (let i=number.length-1;i>=0;i--){
    if(number[i]%3===0){
        number[i]='okten'
        }
    console.log(number[i]);
}*/

/*----------------------------------------------------------------------------------------------------------------------*/

/*1
створити пустий масив та :
    1. заповнити його 50 парними числами за допомоги циклу.
2. заповнити його 50 непарними числами за допомоги циклу.
3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
    диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
2. вывести на консоль  каждый третий елемент
3. вывести на консоль  каждый третий елемент
но при условии что его значение является парным.
4. вывести на консоль  каждый третий елемент
но при условии что он имеет парное значение и
записать их в другой массив.
5. Вывести каждый елемент массива у которого соседний с права элемент - парный
5 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.

3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
додати його в інший масив.*/

/*let arri=[];
for (let iter=1;iter<101;iter++){
    if(iter%2===0){
       arri.push(iter);
    }
}
console.log(arri);
*/

/*
let arri=[];
for (let iter=1;iter<101;iter++){
    if(iter%2!==0){
        arri.push(iter)}
}
console.log(arri);
*/

/*
let arri=[];
for (let iter=0;iter<10;iter++){
  arri.push(Math.random())
}
console.log(arri);
*/

/*let arriRan=[];
for (let iter=0;iter<10;iter++){
    arriRan.push(Math.floor(Math.random()*731)+8);
}
console.log(arriRan);
*/

/*
for (let i=0;i<50;i+=2){
    console.log(arri[i]);
}
*/

/*
for (let i=0;i<10;i+=2){
    if (arriRan[i]%2===0){
        console.log(arriRan[i]);
    }
}
*/

/*
let arriRanDobav=[];
for (let i=0;i<10;i+=2){
    if (arriRan[i]%2===0){
        arriRanDobav.push(arriRan[i]);
    }
}
console.log(arriRanDobav);
*/

/*
for (let i=0;i<10;i+=2){
    if (arriRan[i+1]%2===0){           /////------- ?
        console.log(arriRan[i]);
    }
}
*/

/*
let arriNumber=[100,250,50,168,120,345,188];
let res=0
for (let i=0;i<arriNumber.length;i++){
    res+=arriNumber[i];
}
console.log(res)
*/

/*
let arriRandom=[];
for (let iter=0;iter<5;iter++){
    arriRandom.push(Math.floor(Math.random()*731)+8);
}
console.log(arriRandom);
let fiveArri=[];
for (i of arriRandom){
    fiveArri.push(iters*5);
}
console.log(fiveArri);
*/


/*
let arriRizne=['213',454,'polend',true,'ok10',343.565,false,'puvo',45,'paps'];
let arriNum=[];
for (let i=0;i<arriRizne.length;i++){
    if (typeof arriRizne[i]==='number'){
        arriNum.push(arriRizne[i]);
    }
}
console.log(arriNum);
*/
