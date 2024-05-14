import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarSelectorComponent } from './components/car-selector.component';
import { HttpClientModule} from '@angular/common/http';
//import { bootstrapApplication } from '@angular/platform-browser-dynamic'; 
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarSelectorComponent, HttpClientModule, NgbDropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-app';

  selectedMake: string = '';
  selectedModel: string = '';

  constructor() {}

  onMakeChange(): void {
}

/*
bootstrapApplication(AppComponent,
  {providers: [provideHttpClient()]}
).catch((err) => console.error(err)) */
}