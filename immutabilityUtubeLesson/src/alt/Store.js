import  { observable, action } from 'mobx';

class Store {
    @observable numbers = [];

    @action add() {
        const value = Math.floor(Math.random() * 10) + 1;
        this.numbers.push({ value, someProp: 1, otherProp: 2 });
    }

    @action double(i) {
        this.numbers[i].value *= 2;
    }
}

export default new Store();
