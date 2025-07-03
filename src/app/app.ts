import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UberRating } from "./uber-rating/uber-rating";

@Component({
  selector: 'app-root',
  imports: [UberRating],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'uber-rating-calculator';
}
