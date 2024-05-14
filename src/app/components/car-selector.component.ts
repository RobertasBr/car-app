import { Component, OnInit } from '@angular/core';
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

  constructor(private carService: CarServiceService) {}

  ngOnInit() {
    this.getCarMakes();
  }

  getCarMakes(): void {
    this.carService.getCarMakes().subscribe(
      (response: any) => {
        this.carMakes = response.data.map((make: any) => make.name);
        console.log(this.carMakes); 
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching car makes:', error);
      }
    );
  }

  onMakeChange(make: string): void {
    this.selectedMake = make;
    this.carService.getCarModels(make).subscribe(
      (data: any) => {
        this.carModels = data.data.map((model: any) => model.model_display);
        this.selectedModel = '';
      },
      (error: HttpErrorResponse) => {
        console.error('Error fetching car models:', error);
      }
    );
  }
}