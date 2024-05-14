import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarSelectorComponent } from './components/car-selector.component';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarSelectorComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'car-app';
}


bootstrapApplication(AppComponent,
  {providers: [provideHttpClient()]}
).catch((err) => console.error(err)) 