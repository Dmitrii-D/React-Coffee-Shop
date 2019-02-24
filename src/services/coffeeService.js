
// class CoffeeService {
//     constructor() {
//         this._data = '/db.json';
//     }
//     getAllData = async () => {
//         const res = await fetch(`${this._data}`);
//         return await res.json();
//     }
// }

// const got = new CoffeeService();

// got.getCoffee()
//     .then(res => console.log(res.coffee[0].country));


export default class CoffeeService {

    constructor () {
        this._data = '/db.json';
    }

    getAllData = async () => {
        const res =  await fetch (`${this._data}`);
        return res.json();
    }

    getBestItems = async () => {
        const res =  await this.getAllData();
        return res.bestsellers;
    }

    getShop = async () => {
        const res =  await this.getAllData();
        return res.coffee;
    }

    getGoods = async () => {
        const res =  await this.getAllData();
        return res.goods;
    }
}