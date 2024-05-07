import{Observer} from "./observer.js"

export class Notifier{
    #observers

    constructor(){
        this.#observers=[];
    }
    addObserver(_observer){
    this.#observers.push(_observer);
    }
    notify(){
        for(let observer in this.#observers){
            this.#observers.notify();
        }
    }


}