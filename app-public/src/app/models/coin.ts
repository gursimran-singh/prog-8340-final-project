import { Component, OnInit } from '@angular/core';

export class coin {
    _id: string;
    name: string;
    price: number;
    marketCap: number;
    volume: number;
    quantity: number;
    image: string;
    abbre: string;
    isFeatured:Boolean;

    constructor(_id: string, name: string, price: number, marketCap: number, volume: number,
        quantity: number, image: string, abbre: string,isFeatured:Boolean
    ) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.marketCap = marketCap;
        this.volume = volume;
        this.quantity = quantity;
        this.image = image;
        this.abbre = abbre;
        this.isFeatured = isFeatured;
    }
}

