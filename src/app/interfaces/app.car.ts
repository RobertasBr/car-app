import { Component, OnInit } from "@angular/core";
import { model } from "@angular/core";

export interface ICar 
{
carMakes: string[];
selectedMake: string;
models: string[];
selectedModel: string;
}

export class NewCar implements ICar {
    carMakes: string[];
    selectedMake: string;
    models: string[];
    selectedModel: string;

    constructor (carMakes: string[], selectedMake: string, models: string[], selectedModel: string) {
        this.carMakes = carMakes;
        this.selectedMake = selectedMake;
        this.models = models;
        this.selectedModel = selectedModel;
    }
}
