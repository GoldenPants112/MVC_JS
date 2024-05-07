import { Observer } from "../pattern/observer.js"
import { Controller } from "../contollers/controllers.js"
import { Counter } from "../models/counter.js";

export class View extends Observer{
    #controller
    
    constructor(_controller){
        super();
        _controller= new Controller;
        
        this.#controller= _controller;
        const increment = document.querySelector("button#btn-increment");
        increment.addEventListener("click",()=>{this.#controller.incrementCounter();});
    }
    
    notify(){
        let conteur2 = this.#controller.getCounterValue();
        let notif = document.querySelector("p#txt-counter");

        notif.innerText = conteur2;

    }

}