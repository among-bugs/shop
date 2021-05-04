"use strict";

let allSmartphones = {};
const thisListGroup = document.querySelector('.list-group');

fetch("data/smartphones.json")
    .then(response => response.json())
    .then(data => {
        allSmartphones = (data);
    });

function RAMset(item) {
    let result = '';
    switch(item.RAM) {
        case 2048: result = '2';
            break;
        case 3072: result = '3';
            break;
        case 4096: result = '4';
            break;
    }
    return result;
}



function images(item) {
    let thisss = '';
    item.links.img.forEach(itm => {
        thisss += `<img  height="200px" src="${itm}" alt="">`;
    });
    return thisss;
}

function funct() {
    allSmartphones.brands.Xiaomi.forEach(item => {
        thisListGroup.innerHTML += (`<li class="list-group-item">
        ${images(item)} <br>
        модель: ${item.model}, <br>процессор: ${item.CPU.model}, <br>частота: ${item.CPU.frequency} Мгц,<br> ОЗУ: ${
            RAMset(item) 
        }gb,<br>memory: ${item.memory}gb, <br>SIM: ${item.SIM}, <br>цвет: ${item.color.join(', ')}
        </li>`);
    });
}

// ,
//         "Samsung": [
//             {
//                 "model": "",
//                 "OS": "Android ",
//                 "CPU": {
//                     "model": "",
//                     "frequency": 
//                     },
//                 "RAM": ,
//                 "memory": ,
//                 "SIM": "nano SIM, 2 SIM-карта",
//                 "color": ["brown"],
//                 "display": {
//                     "diagonal": ,
//                     "size":""
//                     },
//                 "camera": {
//                     "main": [, , , ],
//                     "frontal": ,
//                     "fps": 
//                 },
//                 "battery": ,
//                 "links": {
//                     "img": [
//                         "",
//                         "",
//                         "",
//                         ""
//                     ],
//                     "video": ""
//                 },
//                 "price": ,
//                 "rating": ""
//             },
//         ]
     // "Samsung": [

        // ],
        // "Apple": [

        // ],
        // "Oppo": [

        // ],
        // "Huawei": [

        // ],
        // "Meizu": [

        // ],
        // "Nokia": [

        // ],
        // "LG": [

        // ],
        // "OnePlus": [

        // ],
        // "Haier": [

        // ],
        // "Google": [

        // ],
        // "HTC": [

        // ]

