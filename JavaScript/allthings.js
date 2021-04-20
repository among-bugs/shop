"use strict";

let allSmartphones = {};
const thisListGroup = document.querySelector('.list-group');

fetch("JavaScript/smartphones.json")
    .then(response => response.json())
    .then(data => {
        allSmartphones = (data)
    })

function RAMset(item) {
    if (item.RAM == 3072) {
        return 3;
    }
}

function images(item) {
    let thisss = '';
    item.links.img.forEach(itm => {
        thisss += `<img width="200px" src="${itm}" alt="">`;
    })
    console.log(thisss);
    return thisss;
}

function funct() {
    allSmartphones.brands.Xiaomi.forEach(item => {
        thisListGroup.innerHTML += (`<li class="list-group-item">
        ${images(item)} <br>
        модель: ${item.model}, <br>процессор: ${item.CPU.model}, <br>частота: ${item.CPU.frequency} Мгц,<br> ОЗУ: ${
            RAMset(item) 
        } gb,<br>memory: ${item.memory} gb, <br>SIM: ${item.SIM}, <br>цвет: ${item.color.join(', ')}
        </li>`)
    })
}


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


            // {
            //     "model": "",
            //     "OS": "Android ",
            //     "CPU": {
            //         "model": "",
            //         "frequency": 
            //         },
            //     "RAM": ,
            //     "memory": ,
            //     "SIM": "nano SIM, 2 SIM-карта",
            //     "color": ["dark", "black"],
            //     "display": {
            //         "diagonal": ,
            //         "size":""
            //         },
            //     "camera": {
            //         "main": [, , ],
            //         "frontal": ,
            //         "fps": 
            //     },
            //     "battery": ,
            //     "links": {
            //         "img": [
            //             "",
            //             "",
            //             "",
            //             ""
            //         ],
            //         "video": ""
            //     } 
            // }
