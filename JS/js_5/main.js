

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
        if(items.size===princ.sizeZna){
            console.log(items.name);
        }
}
*/


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



/*                                       це  нове дз                                                  */

/*

/!*Реалізовуємо свій компютерний магазин.
===
Необхідно реалізувати базовий клас комютера. Який має лише параметри:
    Оперативна память.
    Потужність процесора. (цифра від 0 до 1000)
Назва.
    В кожного компютера має бути метод включання.
===
Від базового компютрера треба реалізувати ноутбук.
    Він має нову властивість дюймаж монітора.

    У нього зявляється нова змінна роботи батареї. Ця змінна визначається як потужність / (дюйми * оперативку)
===
Від ноутбука потрібно зробити ультрабук.
    Він має нову змінну ваги.
    При включенні ультрабуку має видаватися помилка, якшо вага більша за 2кг та батарея тримаж менше ніж 4 години.
===
Від базвого класу потрібно створити базовий ПК.
    В нього має бути новий метод запуску ігор.
    Кількість FPS визначається як потужність / опервтивку.
    Example: `You are playing *GAME_NAME* with *FPS_COUNT* FSP`

Компютер можна апгрейдити.
    Потужність процесора можна збільшувати максимум на 10%. Зменшувати її не можна.
    Оперативку можна збільшити лише в 2 рази. Зменшувати її не можна.
    Для зміни характеритик мають бути свої методи. Мняти змінну "в лоб" заборонено.
===
// Від базового ПК необхідно зробити ігнорий ПК.
//     Кількість ФПС має бути рівно в 2 рази більший ніж в звичайного ПК.
//     При запуску однієї гри потужніть процесора має падати на 0.1%.
// Якшо потужність процесора менша ніж 500. І оперативка менша за 8 потрібно ивдати помилку,
//     що на цьому відрі ігри не запускаються.*!/

class Computer{
    constructor(opera,poty,name,) {
        this.name=name;
        this.opera=opera;
        this.poty=poty;
    }

    vkl(){
       let  include=confirm("Включений-");
        if(include){
            console.log('YES');
        }else {
            console.log("NO");
        }
    }
}
class Noyt extends Computer{
    constructor(opera,poty,name,dum) {
        super(opera,poty,name);
        this.dum=dum;
        this.batari=poty/(dum*opera);
    }

}
class UltraNout extends Noyt{
    constructor(opera,poty,name,dum,vag) {
        super(opera,poty,name,dum);
        this.vag=vag;
    }
    vkl() {
            if(this.vag<2 && this.batari>4){
                console.log("все ок")
            }else console.log("Error");
    }
}

class BasicPk extends Computer{
    constructor(opera,poty,name) {
        super(opera,poty,name);
        this.fps=poty/opera;
    }

    vklGame(nameGame){
        console.log(`You are playing ${nameGame} with ${this.fps} FSP`);
    }
}

class Abgred extends Computer{
    constructor(opera,poty,name) {
        super(opera,poty,name);
    }

    increment(persent){
        if (persent<=10) {
            let a = (this.poty * persent) / 100;
            this.poty = this.poty + a
            return this.poty
        }
        else return console.log(`максимум на 10%,а ти збільшив на ${persent}`);
    }
    incrementOpera(namber){
        if(namber<=2){
            this.opera=this.opera*namber;
            console.log(this.opera);
        }

    }
}

class GamePk extends BasicPk{
    constructor(opera,poty,name) {
        super(opera,poty,name,);
        this.fps1=this.fps*2;
    }
    game(namberGame){
        if (namberGame>0){
            let a = (this.poty * (namberGame*0.1)) / 100;
            this.poty = this.poty -a
            console.log(this.poty);
        }
        else console.log(`В тебе не має запущених ігор`);

    }
    potProcessor(){
        if(this.poty>500&&this.opera>8){
            console.log("все ок")
        }
        else console.log("на цьому відрі ігри не запускаються")
    }

}

let computer=new Computer(8,400,"hp");
console.log(computer)
computer.vkl()

let noyt=new Noyt(8,400,'hp',16,);
console.log(noyt);


let ynoyt=new UltraNout(4,400,'hp',16,1);
console.log(ynoyt)
ynoyt.vkl();

let basic=new BasicPk(8,400,'hp');
console.log(basic);
basic.vklGame("fifa");

let abgred=new Abgred(8,400,"hp")
console.log(abgred);
abgred.increment(9);
console.log(abgred);
abgred.incrementOpera(2);
console.log(abgred);



let basicP=new GamePk(7,400,'mak');
console.log(basicP)
basicP.game(1);
basicP.potProcessor();

*/



