import { Component, OnInit } from '@angular/core';

export class Transaction {
    _id: string;
    name: string;
    price: string;
    email: string;
    plan: string;
    startDate: Date;
    endDate: Date;
    constructor(_id: string, name: string, price: string, email: string,
        plan: string, startDate: Date, endDate: Date,
    ) {
        this._id = _id;
        this.name = name;
        this.price = price;
        this.email = email;
        this.plan = plan;
        this.startDate = startDate;
        this.endDate = endDate;

    }
}

