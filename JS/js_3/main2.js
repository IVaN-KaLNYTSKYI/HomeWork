/*
1) Напишіть код, який :
a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
b) робить шириниу елементу ul 400px
c) робить шириниу всіх елементів з класом linkList шириною 50%
d) отримує текст який зберігається в елементі з класом listElement2
e) отримує всі елементи li та змінює ім колір фону на сірий
f) отримує всі елементи 'a' та додає їм клас anchor
g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
l) отримати елементи p та змінити їм padding на 20px
m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
*/
/*TASK-1,2,3,4,5,6,7,8,9,10,11,12,13*/

/*
let idMainHeader=document.getElementById('main_header');
idMainHeader.innerText='mon-2021';
idMainHeader.style.color='red';
*/

/*
let tagUl=document.getElementsByTagName('ul');
перший спосіб
/!*tagUl[0].style.width='400px';
tagUl[0].style.border='1px solid silver'; //щоб бачити ширинy 400px*!/
другий спосіб
for (let i=0;i<tagUl.length;i++){
    tagUl[i].style.width='400px';
    tagUl[i].style.border='1px solid silver';
}
*/


/*
let clasLink=document.getElementsByClassName('linkList');
for (let i=0;i<clasLink.length;i++){
    clasLink[i].style.width='50%';
    clasLink[i].style.border='1px solid silver'; //щоб бачити ширинy
}
*/

/*
let clasLink=document.getElementsByClassName('listElement2');
for (let i=0;i<clasLink.length;i++){
    console.log(clasLink[i].innerText);   //тут ???????
}
*/

/*
let tagLi=document.getElementsByTagName('li');
for (let i=0;i<tagLi.length;i++){
    tagLi[i].style.backgroundColor='silver';
}*/

/*
let tagA=document.getElementsByTagName('a');
for (let i=0;i<tagA.length;i++){
   tagA[i].classList.add('anchor')
}
*/

/*
let tagA=document.getElementsByTagName('a');
for (let i=0;i<tagA.length;i++){
   if(tagA[i].innerText==='link3'){
       tagA[i].style.fontSize='40px';
   }
}*/

/*
let tagA=document.getElementsByTagName('a');
for (let i=0;i<tagA.length;i++){
    tagA[i].classList.add(`element_${tagA[i].innerText}`);
}
*/

/*
let clasSub=document.getElementsByClassName('sub-header');
for (let i=0;i<clasSub.length;i++){
    clasSub[i].style.backgroundColor=prompt('колір фону:');
}
*/

/*
let clasSub=document.getElementsByClassName('sub-header');
for (let i=0;i<clasSub.length;i++){
   if (clasSub[i].innerHTML==='content 2 segment'){
       clasSub[i].style.color=prompt('Колір:')
   }
}
*/

/*
let clasSub=document.getElementsByClassName('content_1');
for (let i=0;i<clasSub.length;i++){
   clasSub[i].innerText=prompt('Текст:')
}
*/

/*
let elementP=document.getElementsByTagName('p');
for (let i=0;i<elementP.length;i++){
    elementP[i].style.padding='20px'
}
*/

/*
let clasSub=document.getElementsByClassName('text2');
for (let i=0;i<clasSub.length;i++){
    clasSub[i].innerText='mon-2021';
}
*/
