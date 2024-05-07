import { Counter } from "./../models/counter.js"
import { Controller } from "./../contollers/controllers.js"
import { View } from "./../views/view.js"

function display(){
    const counter1= new Counter();
    
    console.log(counter1.number);
    
}
function controllerView(){
    const controlleur = new Controller;
    const view = new View;
}

window.addEventListener("load",display());

//this is a comemnt