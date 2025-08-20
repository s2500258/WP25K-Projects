const animals = [{name: "Karhu", type: "Nisäkäs"},
                 {name: "Kilpikonna", type: "Matelija"},
                 {name: "Strutsi", type: "Lintu"},
                 {name: "Kettu", type: "Nisäkäs"},
                 {name: "Pingviini", type: "Lintu"},
                 {name: "Gekko", type: "Matelija"},
                 {name: "Rupikonna", type: "Sammakkoeläin"}, 
                 {name: "Lempakko", type: "Nisäkäs"},
                 {name: "Ilves", type: "Nisäkäs"},
                 {name: "Hai", type: "Kala"},
                 {name: "Pellekala", type: "Kala"}
];

const emojis = {"Nisäkäs": "&#128004;",
                "Matelija": "&#128010;",
                "Lintu": "&#128019;",
                "Sammakkoeläin": "&#128056;",
                "Kala": "&#128032;"};

const animalList = document.getElementById("animalList");

let filteredAnimals = [];

document.addEventListener("DOMContentLoaded", function (){    
        printAnimals(animals);
});

function printAnimals(array) {
    document.getElementById("animalList").innerHTML = "";
    array.forEach((item,index) => {
        const ul = document.createElement('ul');
        ul.innerHTML = `Nimi: <b>${item.name}</b> tyypi: ${item.type} ${emojis[item.type]} <button class="deleteBtn" value="${index}">Pois</button>`;
        animalList.appendChild(ul);
    });
};

document.getElementById("addAnimal").addEventListener("click", function() {
        let newName = document.getElementById("newAnimalName").value;
        let newType = document.getElementById("newAnimalType").value;
      //  let newNum = animals.length;
     /*   animals.forEach(function (item){
            if (newNum == item.num) {newNum++};
        });*/
       
        animals.push({name:newName, type:newType});
        printAnimals(animals);
        document.getElementById("newAnimalName").value = "";
        document.getElementById("searchAnimal").value = "";
        document.getElementById("filterType").value = "Kaikki";
});

document.getElementById("filterType").addEventListener("change", function(){
        filterZoo();
});

document.getElementById("searchAnimal").addEventListener("input", function(){
        filterZoo();
});

function filterZoo(){
        let search = document.getElementById("searchAnimal").value.toUpperCase();
        let filter = document.getElementById("filterType").value;
        if (document.getElementById("filterType").value == "Kaikki"){
    filteredAnimals = animals.filter(item => 
    (item.name.toUpperCase().includes(search)));
        } else {
    filteredAnimals = animals.filter(item => 
    (item.type == filter && item.name.toUpperCase().includes(search)));
        };
    printAnimals(filteredAnimals);
    if (filteredAnimals.length == 0){
        alert("Eläimiä ei löytynyt.");    
    }
};

document.body.addEventListener('click', function(event) {
        if (event.target && event.target.classList.contains('deleteBtn')) {
    animals.splice(parseInt(event.target.value),1);
        printAnimals(animals);
        document.getElementById("searchAnimal").value = "";
        document.getElementById("filterType").value = "Kaikki";
    }
});

document.getElementById("sortAnimals").addEventListener('click', function(){
    animals.sort((a,b) => {
    const titleA = a.name.toUpperCase(); 
    const titleB = b.name.toUpperCase(); 
    if (titleA < titleB) {
      return -1;
    }
    if (titleA > titleB) {
      return 1;
    }
    return 0;
});
    printAnimals(animals);
});