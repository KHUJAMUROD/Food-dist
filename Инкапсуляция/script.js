'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this_age = age;
    }

    #surname = 'Petrychenko';


    say = () => {
        console.log(`Имя пользователя: ${this.name}${this.surname} возраст ${this_age}`);

    }

    get age() {
        return this_age;
    };



    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this_age = age;
        } else {
            console.log('Недопустимое значение!');

        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.surname);

ivan.say();