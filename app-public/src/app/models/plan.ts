export class Plan {
      _id: string;
    name: string;
    price: string;
    features: object;

    constructor(_id: string, name: string, price: string, features:object
    ) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.features=features;
    }
}

