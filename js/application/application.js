import { Counter } from "./../models/counter.js"

function display(){
    const counter1= new Counter();
    
    console.log(counter1.number);
}
window.addEventListener("load",display());
//this is a comemnt