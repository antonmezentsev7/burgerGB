class Setting {
    constructor(element) {
        this.name = element.value;
        this.price = +element.dataset["price"];
        this.calories = +element.dataset["calories"];
    }
}


class Burger {
    constructor(size, add, topping) {
        this.size = new Setting(this._selectSetting(size));
        this.add = new Setting(this._selectSetting(add));
        this.topping = this._selectTopping(topping);
    }

    _selectSetting(name) {
        return document.querySelector(`input[name=${name}]:checked`);
    }

    _selectTopping(name) {
        let result = [];
        this._selectAllToppings(name).forEach(item => result.push(new Setting(item)));
        return result;
    }

    _selectAllToppings(name) {
        return [...document.querySelectorAll(`input[name=${name}]:checked`)];
    }

    _getPrice() {
        let sum = this.size.price + this.add.price;
        this.topping.forEach(item => sum += item.price );
        return sum;
    }

    _getCalories() {
        let sum = this.size.calories + this.add.calories;
        this.topping.forEach(item => sum += item.calories);
        return sum;
    }

    _displaySum(price, calories) {
        document.querySelector(price).textContent =  this._getPrice();
        document.querySelector(calories).textContent =  this._getCalories();
    }
}


