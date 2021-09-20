import {makeObservable, action, observable, computed} from 'mobx';

class OrderStore {
    formData = {
        name: {
            label: 'Name',
            type: 'name',
            value: '',
        },
        email: {
            label: 'Email',
            type: 'email',
            value: '',
        },
        phone: {
            label: 'Phone',
            type: 'tel',
            value: '',
        },
    }

    get isValid() {
        return Object.values(this.formData).every(field =>field.value !== '');
    }

    get userName() {
        return this.formData.name.value;
    }

    change = (name, value) => {
        this.formData[name].value = value.trim();
    }

    constructor() {
        makeObservable(this, {
            formData: observable,
            isValid: computed,
            change: action,
        })
    }
}

export default new OrderStore();
