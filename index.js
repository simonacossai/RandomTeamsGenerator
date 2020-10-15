let teams= document.querySelector("select");
    let names= document.querySelector("textarea");
    let button = document.querySelector(".btn");
    let btn = document.querySelector(".toggle-person");
    let availableDiv = document.querySelector(".available");
    const printValue=()=>{
    let namesArray = names.value.split(" ");
    availableDiv.innerHTML=namesArray;
    let row= document.querySelector(".teams");
    let divs=[];
    let numberOfDivs= teams.value;
    for(let i=0; i<numberOfDivs; i++){
        let randomDiv = document.createElement("div");
        randomDiv.classList.add("col");
        divs.push(randomDiv);     
    }

    for(let i=0; i<divs.length; i++){
        row.appendChild(divs[i]);
    }
    teams.value=""
    names.value=""
}


const takeRandomPerson=()=>{
    let arrayOfPerson = availableDiv.innerHTML.split(",")
    let teamDivs = document.querySelectorAll(".col");
    let randomIndex = Math.floor(Math.random() * arrayOfPerson.length);
    let randomItem = arrayOfPerson.splice(randomIndex, 1)[0];
    console.log(randomItem)
    availableDiv.innerHTML=arrayOfPerson;
    let randomDiv = Math.floor(Math.random() * teamDivs.length);
   
    teamDivs[randomDiv].innerHTML+=randomItem+ ", ";
}

const Reset=()=>{
    teams.value=""
    names.value=""
    let availableDiv = document.querySelector(".available");
    availableDiv.innerHTML="";
    let divs=[];
    divs = document.querySelectorAll(".col");
    for(let i=0; i<divs.length; i++){
        divs[i].remove();
    }
}