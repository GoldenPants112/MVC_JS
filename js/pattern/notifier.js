import{Observer} from "./observer.js"

export class Notifier{
    #observers

    constructor(){
        this.#observers = new Observer;
        this.#observers=[];
    }
    addObserver(_observer){
    this.#observers.push(_observer);
    }
    notify(){
        this.#observers.notify();
    }


}