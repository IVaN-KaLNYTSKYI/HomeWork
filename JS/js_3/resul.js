/*
2) Є масив котрий характеризує правила.
    Створити скрипт який ітерує цей масив, та робить кожне правило в окремому блоці.
    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
    Результатом відпрацювання скріпта повинна бути така ж структура яка міститься в файлі rules.html
*!/
*/
/*
let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    }
];

//Header
let divHeader=document.createElement('div');
divHeader.id='content';
document.body.appendChild(divHeader);


let hOne=document.createElement('h1');
hOne.innerText='Правила бойцовского клуба';
document.body.appendChild(hOne);

//Main
let divMain=document.createElement('div')
divMain.id='wrap';
document.body.appendChild(divMain);

for (let i=1;i<rules.length+1;i++){
    let divBox=document.createElement('div')
    divMain.appendChild(divBox);
    divBox.classList.add('rules',`rule${i}`);

    let hTwo=document.createElement('h2')
    divBox.appendChild(hTwo);
    hTwo.innerText=`${rules[i].title}`;

    let tagP=document.createElement('p')
    divBox.appendChild(tagP);
    tagP.innerText=`${rules[i].body}`;

}*/

/*if (usersWithId[i].id===citiesWithId[j].user_id){
    usersWithCities.push()
}*/



/*
З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
    Записати цей об'єкт в новий масив
Example:
    let usersWithCities = [
        {
            id: 1, // <===
            name: 'vasya',
            age: 31,
            status: false,
            address: {
                user_id: 1, // <===
                country: 'Ukraine',
                city: 'Ternopil'
            }
        },
        // TO BE CONTINUED .....
    ]
*/


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];


let usersWithCities=[];
for (let i=0;i<usersWithId.length;i++){
        for (let j=0;j<citiesWithId.length;j++){
            if (usersWithId[i].id===citiesWithId[j].user_id){
                usersWithId[i].addrres=citiesWithId[j]
                usersWithCities.push(usersWithId[i])
            }
        }
}
console.log(usersWithCities);
