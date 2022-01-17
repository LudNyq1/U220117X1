'use strict';

console.log('Im alive, JS');

let dataURL = './javascripts/cars.json';
let res = new XMLHttpRequest();
res.open('GET', dataURL);
res.responseType = 'json';
res.send();

res.onload = () => {
    const data = res.response;
    const Cars = data['Cars'];
    const list = document.getElementById('list'); //Gets the list element from the dom

    Cars.forEach(car => {
        let item = document.createElement('li');
        item.innerText = car.Make;
        list.appendChild(item);
        console.log(car.Make);
    });
}