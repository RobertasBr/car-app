import { Component, OnInit, NgModule } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { CarServiceService } from '../services/car-service.service';

@Component({
  selector: 'app-car-selector',
  standalone: true,
  imports: [CommonModule, FormsModule, NgbDropdownModule],
  templateUrl: './car-selector.component.html',
  styleUrls: ['./car-selector.component.css'],
})
export class CarSelectorComponent implements OnInit {
    carMakes: string[] = [];
    carModels: string[] = [];
    selectedMake: string = '';
    selectedModel: string = '';
    isLoadingMakes: boolean = false;
    engineSpecs: any[] = [];
    showEngineSpecs: boolean = false;

  constructor(private carService: CarServiceService) {}

  ngOnInit() {
    this.getCarMakes();
    this.showEngineSpecs = false;
  }

  getCarMakes(): void {
    this.isLoadingMakes = true;
    this.carService.getCarMakes().subscribe(
      (response: any) => {
        this.carMakes = response.data.map((make: any) => make.name);
        console.log('Car Makes:', this.carMakes);
        this.isLoadingMakes = false; //Data has been loaded
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching car makes:', error);
        this.isLoadingMakes = false; //There was an error loading the data
      }
    );
  }

  onMakeChange(make: string): void {
    this.selectedMake = make;
    this.carModels = []; // Clear previous car models
  
    this.carService.getCarModels(make).subscribe(
      (res: any) => {
        if (res.data) {
          this.carModels = res.data.map((model: any) => model.name); // Assuming the model property is 'name'
          console.log('Car models:', this.carModels); 
        } else {
          console.error('Car models data is missing or not in the expected format:', res);
        }
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching car models:', error);
      }
    );
  }

  onModelChange(model: string): void {
    this.selectedModel = model;

    this.carService.getEngineSpecs(this.selectedMake, this.selectedModel).subscribe(
        (res: any) => {
            if (res.data) {
                this.engineSpecs = res.data;
                this.showEngineSpecs = true; // Show engine specs
                console.log('Engine specs:', this.engineSpecs);
            } else {
                console.error('Car models data is undefined or null:', res);
            }
        },
        (error: HttpErrorResponse) => {
            console.error('Error fetching car models:', error);
        }
    );
}
}