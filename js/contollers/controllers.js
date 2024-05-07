import { Notifier } from "../pattern/notifier";

class Controller extends Notifier{
    #counter;
    constructor(){
        super();
        this.#counter= new Controller();
        const notify1= new Notifier();
    }
    incrementCounter(){
        this.notify1.addObserver(this.#counter);
        this.notify1.notify();
        this.#counter++;
    }
    decrementCounter(){
        this.#counter--;
    }
    getCounterValue(){
        return this.#counter; 
    }

}