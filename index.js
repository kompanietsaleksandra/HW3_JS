
//1 ( Estimated time 40 min; Actual time = 50 min; )


function arrSum() {
    let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6'];
    let sum = 0;
    for (let i = 0; i <= arr.length; i++) {
        if(parseInt(arr[i])) {
            sum = sum + +arr[i];
            // sum += i;
        }
    }
    alert('Сумма:' + ' ' + sum);
}
arrSum();

//2

let arr = [];
while(arr.length < 8) {
    const r = Math.floor(Math.random()*99) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
for (let i = 0; i <= arr.length; i++) {
}
arrSquare = arr.map(function (i){return i*i*i*i*i;});



//3 ( Estimated time 30 min; Actual time = 30 min;)

let arr = ['AngularJS', 'jQuery'];
arr.unshift('Backbone.js');
arr.push("ReactJS’ и ‘Vue.js");
arr.splice(1, 0, "CommonJS");
const elIndex = arr.findIndex(function(el) {
    return el === 'jQuery';
});
alert(arr[elIndex] + ' - ' + `Это здесь лишнее`);
arr.splice(elIndex, 1);
console.log(arr);

//4 ( Estimated time 50 min; Actual time = 60 min;)

function getWords() {
    const str = "Как однажды Жак звонарь сломал фонарь головой";
    let arr = str.split(' ');
    const elIndex = arr.findIndex((el) => el === 'Жак');
    let cutElem = arr.splice(elIndex, 2);
    arr.splice(1, 0, cutElem);
    arr = arr.join(' ').replace(/,/g, ' ');
    alert( arr + '; ' + str );
}
getWords();

//5 ( Estimated time 60 min; Actual time = 60 min;)

let person = {"name": "John", "surname": "Dou", "age": "25"};
let a = prompt("Укажите свойство", "name");
if (a in person ) {
    alert(a);
} else {
    let b = prompt("Напишите значение для нового свойства", "John");
    person[a] = b;
}

//6 ( Estimated time 50 min; Actual time = 40 min;)

let br = prompt("Укажите бренд", "Samsung");
let col = prompt("Укажите цвет", "Черный");
let mod = prompt("Укажите модель", "x-340");
let g = {"brand": br, "color": col, "model": mod};
person["gadjet"] = g ;
console.log(person);

//7//8 ( Estimated time 2 h; Actual time = 3 h;)

const nowDate = new Date();
const nowDate_dd = nowDate.getDate();
const nowDate_mm = nowDate.getMonth()+1;
const nowDate_yyyy = nowDate.getFullYear();
const nowD = new Date(nowDate_yyyy + '-' + nowDate_mm + '-' + nowDate_dd);

const yearAgoDate = new Date(nowDate.setDate(nowDate.getDate() - 365));
const yearAgoDate_dd = yearAgoDate.getDate();
const yearAgoDate_mm = yearAgoDate.getMonth()+1;
const yearAgoDate_yyyy = yearAgoDate.getFullYear();
const yearAgoD = new Date(yearAgoDate_yyyy + '-' + yearAgoDate_mm + '-' + yearAgoDate_dd);

const checkDate = new Date(prompt("Введите дату", 'yyyy-MM-dd'));
const dates = {
    nowDate,
    yearAgoDate
};
if (yearAgoD < checkDate && nowD > checkDate) {
    alert(checkDate.toDateString() + ' входит в диапазон дат');
} else {
    alert(checkDate.toDateString() + ' не входит в диапазон дат');
}

//8 ( Estimated time 50 min; Actual time = 50 min;)

function getSum() {
    let arr = [];
    let sum = 0;
    for( let i = 0; i <= 6; i++) {
        let n = prompt("Напишите число", "2");
        arr.push(n);
        if(parseInt(arr[i])) {
            sum = sum + +arr[i];
        }
    }
    alert(sum);
}
getSum();


//9 ( Estimated time 100 min; Actual time = 120 min;)

function getMultiply() {
    let arr = [];
    for (let i = 1; i <= 10; i++) {
        arr.push([]);
        for (let j = 1; j <= 10; j++) {
            arr[i-1].push(i + ' * ' + j + ' = ' + i * j);
        }
    }
    console.log(arr);
}
getMultiply();

//10( Estimated time 30 min; Actual time = 30 min;)

// Пример структуры img на примере JSON обьекта
const image = {
    tagName: 'img',
    link: 'https://www.google.com.ua/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    altName: '',
    styles: {
        0: 'border: 1px solid #ccc'
    },
    widthParam: '200'
};

