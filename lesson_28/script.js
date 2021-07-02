'use strict';

// const output = document.getElementById('output');

// const getData = (url) => {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.open('GET', url);
//         request.addEventListener('readystatechange', ()=>{
//             if(request.readyState !== 4){
//                 return;
//             }
//             if(request.status === 200){
//                 const response = JSON.parse(request.responseText);
//                 resolve(response);
//             }else{
//                 reject(request.statusText);
//             }
//         });
//         request.send();
//     });
    
// };

// const outputPhotos = (data) => {
//     data.forEach(element => {
//         output.insertAdjacentHTML('afterbegin', `<h4>${element.title}</h4>
//     <img src = '${element.thumbnailUrl}' alt = 'element.title'>`); 
//     });
// };

// const urlPhotos = 'https://jsonplaceholder.typicode.com/photos';

// const oneImg = getData('https://jsonplaceholder.typicode.com/photos/1'),
//     twoImg = getData('https://jsonplaceholder.typicode.com/photos/2');


//     Promise.all([oneImg, twoImg])
//     .then(outputPhotos)
//     .catch(error => console.error(error));


const sendForm = () =>{

const button = document.querySelector('button'),
    form = document.querySelector('form'),
    wrapper = document.querySelector('wrapper');


    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const formData = new FormData(form);
        let data = {};
        formData.forEach((val, key) => {
            data[key] = val;
    });

    sendData(data)
    .then(console.log('Отправлено'))
    .catch(error => console.error(error));
    });



const sendData = (data) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        
        request.addEventListener('readystatechange', ()=>{
            if(request.readyState !== 4){
                return;
            }
            if(request.status === 200){
                resolve(data);
            }else{
                reject(request.statusText);
            }
        });
        request.open('POST', './server.php');
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify(data));
    });
    
};
};
sendForm();
