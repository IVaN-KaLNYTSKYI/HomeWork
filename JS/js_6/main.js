/*
1) Створити масив з 20 чисел та:
    a) відсортувати його від меншого до більшого.
    b) відсортувати його від більшого до меншого.
    c) Відфілтрувати числа які є кратними 3.
d) Відфілтрувати числа які є більшими за 10.
e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
f) За допомогою map збільшити кожен елемент в масиві в три рази.
    g) Порахувати загальну суму всіх елментів у масиві (reduce)
    */


/*let arr=[18,2,5,4,3,10,7,56,5,6,36,12,23,53,28,16,20,98,19,17];*/

/*
let sort=arr.sort((i, j)=> i-j);
console.log(sort);
let sortOne=arr.sort((i, j)=> j-i);
console.log(sortOne);*/


/*let filterZero=arr.filter((value)=>{ return value%3===0} );
console.log(filterZero)
console.log('*************************')
let filterOne=arr.filter((value)=>{return value>10})
console.log(filterOne)*/

//
///*let forE=arr.forEach((namber)=>document.write(`<br>${namber}`));*/
//

/*
let mapIter=arr.map((namber)=>namber*3);
console.log(mapIter);
*/

/*
let suma=arr.reduce((i,j)=>i+j)
console.log(suma)*/


/*
2) Створити масив з 20 стрічок та:
    a) Відсортувати його в алфавітному порядку
b) Відсортувати в зворотньому порядку
c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)
d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'*/


/*
let arrString=["ivanq","dima","olena","petro","maks","yra","slavko","retro","mini","index","car","apre","dfd","volvo","lviv","barca","uve","uk","teere","ronaldo"];
*/

/*
let sortString=arrString.sort((i,j)=>{
    if(i>j){
        return 1
    }
    return -1
});
console.log(sortString)*/

/*
let sortString=arrString.sort((i,j)=>{
    if(i<j){
        return 1
    }
    return -1
});
console.log(sortString)*/

/*let filterString=arrString.filter((i)=>i.length>4);
console.log(filterString);*/
/*
let mapString=arrString.map((i)=> `Sam says ${i}`)
console.log(mapString)*/


/*
3) Все робити тільки за допомогою методів масивів!
    Дано масив :
    const users = [
        {name: 'vasya', age: 31, isMarried: false},
        {name: 'petya', age: 30, isMarried: true},
        {name: 'kolya', age: 29, isMarried: true},
        {name: 'olya', age: 28, isMarried: false},
        {name: 'max', age: 30, isMarried: true},
        {name: 'anya', age: 31, isMarried: false},
        {name: 'oleg', age: 28, isMarried: false},
        {name: 'andrey', age: 29, isMarried: true},
        {name: 'masha', age: 30, isMarried: true},
        {name: 'olya', age: 31, isMarried: false},
        {name: 'max', age: 31, isMarried: true}
    ];
a) відсортувати його за  віком (зростання , а потім окремо спадання)
b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)
c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
та зберегти це в новий масив (первинний масив залишиться без змін)
d) відсортувати його за індентифікатором
e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)*/


/*
const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];
*/


/*
let sortUsers=users.sort((i,j)=>i.age-j.age)
console.log(sortUsers);

let sortUsersOne=users.sort((i,j)=>j.age-i.age)
console.log(sortUsersOne);*/

/*
let sortUsers=users.sort((i,j)=>{
    if(i.name>j.name){
        return 1
    }
    return -1
});
console.log(sortUsers)
let sortUsers0ne=users.sort((i,j)=>{
    if(i.name<j.name){
        return 1
    }
    return -1
});
console.log(sortUsersOne)*/
/*
let mapUsers=users.map((i,l)=> {
    i.id=l+1;
    return i
})
console.log(mapUsers)
                                                     //два способи
/!*let mapUsers = users.map((name, index) => {
  return {
    id: index + 1,
    name
  }
});
console.log(mapUsers)*!/*/

/*
let sortUsers=users.sort((i,j)=>j.id-i.id)
console.log(sortUsers);*/

/*
let redUsers=users.reduce((i,j)=>{
if(j.isMarried===true){
    j.kva=true;
    i.push(j)
}
return i;
} ,a=[])

console.log(redUsers)
console.log(users)
console.log(a)*/



/*const cars = [
    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
];*/
/*

Відфільтрувати масив за наступними крітеріями :
    - двигун більше 3х літрів
- двигун = 2л
- виробник мерс
- двигун більше 3х літрів + виробник мерседес
- двигун більше 3х літрів + виробник субару
- сили більше ніж 300
- сили більше ніж 300 + виробник субару
- мотор серіі ej
- сили більше ніж 300 + виробник субару + мотор серіі ej
- двигун меньше 3х літрів + виробник мерседес
- двигун більше 2л + сили більше 250
- сили більше 250  + виробник бмв*/

/*let filt=cars.filter((i)=>i.volume>3);
console.log(filt);*/

/*let filt=cars.filter((i)=>i.volume===2);
console.log(filt)*/

/*let filt=cars.filter((i)=>i.producer==="mercedes")
console.log(filt)*/

/*
let filt=cars.filter((i)=>i.producer==="mercedes" && i.volume>3)
console.log(filt)
*/

/*
let filt=cars.filter((i)=>i.producer==="subaru" && i.volume>3)
console.log(filt)*/

/*let filt=cars.filter((i)=>i.power>300)
console.log(filt)*/
/*
let filt=cars.filter((i)=>i.producer==="subaru" && i.power>300)
console.log(filt)*/

/*
let filt=cars.filter((i)=>i.engine.startsWith("ej"))
console.log(filt)
*/

/*
let filt=cars.filter((i)=>i.producer==="subaru" && i.power>300&&i.engine.startsWith("ej"))
console.log(filt)
*/

/*
let filt=cars.filter((i)=>i.producer==="mercedes" && i.volume<3)
console.log(filt)
*/

/*
let filt=cars.filter((i)=>i.power>250 && i.volume>2)
console.log(filt)*/

/*
let filt=cars.filter((i)=>i.power>250 && i.producer==="bmw")
console.log(filt)*/


/*const usersWithAddress = [
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
];*/
/*

-- Відсортувати їх по ID
-- Відсортувати їх по ID в зворотньому порядку
-- Відсортувати по віку
-- Відсортувати по віку в зворотньому порядку
-- Відсорутвати по імені
-- Відсорутвати по назві вулиці
-- Відсорутвати по номеру будинку
-- Залигити тільки тих, хто молодший ніж 30 (filter)
-- Залишити тільки одружених
-- Залишити тільки одружених, які молодні за 30
-- Залишити лише тих, в кого парні номери будинків.
-- Порахувати загальний вік всіх людей. (reduce)
-- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)
*/

/*let sort=usersWithAddress.sort((i, j)=> i.id-j.id);
console.log(sort);*/

/*
let sortOne=usersWithAddress.sort((i, j)=> j.id-i.id);
console.log(sortOne);
*/

/*
let sortOnes=usersWithAddress.sort((i, j)=> j.age-i.age);
console.log(sortOnes);

*/

/*
let sortOne=usersWithAddress.sort((i, j)=> i.age-j.age);
console.log(sortOne);*/

/*
let sortOne=usersWithAddress.sort((i, j)=> j.name<i.name);
console.log(sortOne);*/

/*
let sortOne=usersWithAddress.sort((i, j)=> j.address.street<i.address.street);
console.log(sortOne);*/

/*
let sortOne=usersWithAddress.sort((i, j)=> i.address.number>j.address.number);
console.log(sortOne);
*/

/* let filt=usersWithAddress.filter((i)=>i.age<30)
 console.log(filt);*/

/*
let filt=usersWithAddress.filter((i)=>i.isMarried)
 console.log(filt);
*/

/*
let filt=usersWithAddress.filter((i)=>i.age<30&&i.isMarried===true)
 console.log(filt);
*/

/*
let filt=usersWithAddress.filter((i)=>i.address.number%2===0)
 console.log(filt);
*/

/*
let suma=usersWithAddress.reduce((i,j)=> {
       return  i+j.age
    },0
)
console.log(suma)*/

/*
let redUsers=usersWithAddress.reduce((i,j)=>{
    if(j.isMarried===true&&j.age>30){
        j.child=true;
        i.push(j)
    }
    return i;
} ,[])

console.log(redUsers);*/


/*Для початку вкладіть всі наші створені автомобілі в масив cars.
    Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
    то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
    Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі*/
/*const cars = [
    {vlasnuk:{name:"ivan",age:18,yearC:2},model: "wrx",year: 2010,volume: 2,power: 400},
    {vlasnuk:{name:"dima",age:32,yearC:1},model: "legacy",year: 2007, volume: 3,power: 250},
    {vlasnuk:{name:"maks",age:22,yearC:4},model: "tribeca",year: 2011, volume: 2,power: 300},
    {vlasnuk:{name:"kyza",age:20,yearC:2},model: "impreza",year: 2014, volume: 2,power: 200},
    {vlasnuk:{name:"andrii",age:28,yearC:3},model: "outback",year: 2014, volume: 2,power: 165},
    {vlasnuk:{name:"slavko",age:34,yearC:6},model: "115",year: 2013,volume: 1.5,power: 120},
    {vlasnuk:{name:"petro",age:43,yearC:8},model: "315",year: 2010,volume: 1.5, power: 120},
    {vlasnuk:{name:"maksim",age:48,yearC:2},model: "650",year: 2009,volume: 6,power: 350},
    {vlasnuk:{name:"oleh",age:23,yearC:2},model: "320",year: 2012,volume: 2,power: 180},
    {vlasnuk:{name:"pasha",age:54,yearC:10},model: "e200",year: 1990,volume: 2,power: 180},
    {vlasnuk:{name:"voza",age:64,yearC:20},model: "e63",year: 2017,volume:3,power: 400},
    {vlasnuk:{name:"patrik",age:19,yearC:1},model: "c250",year: 2017, volume: 2.5,power: 23012}
    ]*/

/*Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%*/
/*let forE=cars.map((i,j)=>{
 if (j%2 ===0){
     i.volume=i.volume+((i.volume * 10) / 100);
     i.power=i.power+((i.volume * 10) / 100);
 }
    return i
})
console.log(forE)*/
/*Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
    то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.*/

/*let maps=cars.map((i,l)=>{
    if(i.vlasnuk.yearC<5&&i.vlasnuk.age>25){
        i.vlasnuk.yearC+=1;
    }
    return i;
})
console.log(maps)
console.log(cars)*/
/*Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі*/
/*
let redCars=cars.reduce((i,j)=>{
    return i+j.power;
} ,0)
console.log(redCars);
*/

