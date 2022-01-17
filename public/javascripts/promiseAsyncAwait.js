'use strict';

console.log('Im alive, JS');

const writeList = (data) => {
    const Cars = data['Cars'];

    const list = document.getElementById('list'); //Gets the list element from the dom

    Cars.forEach(car => {
        let item = document.createElement('li');
        item.innerText = car.Make;
        list.appendChild(item);
        console.log(car.Make);
    })

}

const fetchFunction = async () => {
    let response = await fetch('./javascripts/cars.json');

    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    let data = await response.json();
    return data;
}

fetchFunction()
.then(data => writeList(data));

// .catch(console.log('Error occured, check code'));

// const Cars = carsData['Cars'];

// console.log(Cars[0].Make);


// let dataURL = './javascripts/cars.json';
// let res = new XMLHttpRequest();
// res.open('GET', dataURL);
// res.responseType = 'json';
// res.send();

// res.onload = () => {
//     const data = res.response;
//     const Cars = data['Cars'];
//     const list = document.getElementById('list'); //Gets the list element from the dom

//     Cars.forEach(car => {
//         let item = document.createElement('li');
//         item.innerText = car.Make;
//         list.appendChild(item);
//         console.log(car.Make);
//     });
// }