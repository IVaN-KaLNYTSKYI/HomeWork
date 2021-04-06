

/*                                        TASK   Functions constructors. OOP                                                 */
/*
function Tag(name, action,atribytu){
    this.name=name;
    this.action=action;
    this.atribytu=atribytu;
}

let div=new Tag("div",
               'является блочным элементом',
               [{atribyt:"align",actionAtribyt:"Задает выравнивание содержимого тега."},
                   {atribyt:"title",actionAtribyt:"Добавляет всплывающую подсказку к содержимому."}]);
console.log(div)*/   //для одного створив бо там повторюється все

/*
class Tag{
    constructor(name,action,atribyt) {
        this.name=name;
        this.action=action;
        this.atribyt=atribyt;

    }
}

let div=new Tag("img",
               'редназначен для отображения на веб-странице изображений',
               [{atribyt:"src",actionAtribyt:"Путь к графическому файлу."},
                   {atribyt:"width",actionAtribyt:"Ширина изображения."}]);
console.log(div);*/       //для одного тоже

/*
/!*-- Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car*!/

let cars={
    model:"mazda",
   vurobnuk:'uk',
    year:'2003',
   maxV:300,
    Ob:2
}

function drive (ob){
    console.log(`їдемо зі швидкістю ${ob.maxV} на годину`);
}
 function info (ob){
    console.log(`${ob.model}-${ob.vurobnuk}-${ob.year}-${ob.maxV}-${ob.Ob}`)
}
function increaseMaxSpeed (ob,newSpeed){
    console.log(ob.maxV+=newSpeed);
}
function changeYear(ob,newValue){
    console.log(ob.year = newValue);
}
function addDriver(ob,drivers){
    ob.driver=drivers;
}
let car=cars
console.log(car);
drive(car);
info(car);
increaseMaxSpeed(car,3404);
changeYear(car,43);
addDriver(car,{vodiu:{name:'ivan',age:20}});
console.log(car);*/

/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

function Car(model,vurobnuk,year,maxV,Ob){
    this.model=model;
    this.vurobnuk=vurobnuk;
    this.year=year;
    this.maxV=maxV;
    this.Ob=Ob;

    this.drive=function (){
        console.log(`їдемо зі швидкістю ${this.maxV} на годину`);
    }
    this.info=function (){
        console.log(`${this.model}-${this.vurobnuk}-${this.year}-${this.maxV}-${this.Ob}`)
    }
    this.increaseMaxSpeed=function (newSpeed){
        console.log(this.maxV+=newSpeed);
    }
    this.changeYear=function (newValue){
        console.log(this.year = newValue);
    }
    this.addDriver=function (drivers){
            this.driver=drivers;
    }
}

let car=new Car('mazda','uk','2003',300,2);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(400);
car.changeYear('343');
car.addDriver({vodiu:{name:'ivan',age:20}});
console.log(car);
*/

/*

- Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
-- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
-- info () - яка виводить всю інформацію про автомобіль
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

class Car{
    constructor(model,vurobnuk,year,maxV,Ob) {
        this.model=model;
        this.vurobnuk=vurobnuk;
        this.year=year;
        this.maxV=maxV;
        this.Ob=Ob;
    }
    drive (){
        console.log(`їдемо зі швидкістю ${this.maxV} на годину`);
    }
    info (){
        console.log(`${this.model}-${this.vurobnuk}-${this.year}-${this.maxV}-${this.Ob}`)
    }
    increaseMaxSpeed (newSpeed){
        console.log(this.maxV+=newSpeed);
    }
    changeYear(newValue){
        console.log(this.year = newValue);
    }
    addDriver(drivers){
        this.driver=drivers;
    }
}
let car=new Car('tesla','usa',2018,280,2.1);
console.log(car);
car.drive();
car.info();
car.increaseMaxSpeed(400);
car.changeYear(2021);
car.addDriver({vodiu:{name:'andrii',age:21}});
console.log(car);
*/


/*
/!*
-створити класс попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
-- за допоиоги циклу знайти яка попелюшка повинна бути з принцом*!/


class Pop{
    constructor(name,age,size) {
        this.name=name;
        this.age=age;
        this.size=size;
    }
}
class Princ{
    constructor(name,age,sizeZna) {
        this.name=name;
        this.age=age;
        this.sizeZna=sizeZna;
    }
}
let princ=new Princ("ivan",20,12.4)
console.log(princ)
let populi=[];
let pop=new Pop('dasha',19,12.3);
populi.push(pop);
let pop1=new Pop('masha',19,12.4);
populi.push(pop1);
let pop2=new Pop('karina',15,13.5);
populi.push(pop2);
let pop3=new Pop('polina',34,16.3);
populi.push(pop3);
let pop4=new Pop('olena',23,17.3);
populi.push(pop4);
let pop5=new Pop('kiti',44,11.4);
populi.push(pop5);
let pop6=new Pop('ivanka',7,14.3);
populi.push(pop6);
let pop7=new Pop('error',45,12.8);
populi.push(pop7);
let pop8=new Pop('vika',21,11.9);
populi.push(pop8);
let pop9=new Pop('olesa',46,10.3);
populi.push(pop9);
let pop10=new Pop('tan',98,9.3);
populi.push(pop10);
console.log(populi);

for (let items of populi){
    for (let item in princ){
        if(items.size===princ[item]){
            console.log(items.name);
        }
    }
}*/


/*
/!*-створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
--Створити 10 попелюшок , покласти їх в масив
--Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
-- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить*!/

function Pop(name,age,size){
    this.name=name;
    this.age=age;
    this.size=size;
}

function Princ(name,age,sizeZna){
    this.name=name;
    this.age=age;
    this.sizeZna=sizeZna;
    this.poc=function (arr){
        for (let items of populi){
                if(items.size===this.sizeZna){
                    console.log(items.name);
                }
            }
        }
}

let populi=[];
let pop=new Pop('dasha',19,12.3);
populi.push(pop);
let pop1=new Pop('masha',19,12.4);
populi.push(pop1);
let pop2=new Pop('karina',15,13.5);
populi.push(pop2);
let pop3=new Pop('polina',34,16.3);
populi.push(pop3);
let pop4=new Pop('olena',23,17.3);
populi.push(pop4);
let pop5=new Pop('kiti',44,11.4);
populi.push(pop5);
let pop6=new Pop('ivanka',7,14.3);
populi.push(pop6);
let pop7=new Pop('eror',45,12.8);
populi.push(pop7);
let pop8=new Pop('vika',21,11.9);
populi.push(pop8);
let pop9=new Pop('olesa',46,10.3);
populi.push(pop9);
let pop10=new Pop('tan',98,9.3);
populi.push(pop10);

let princ=new Princ("dima",47,16.3)
console.log(princ)
princ.poc(populi);*/
