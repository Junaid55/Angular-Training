import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'slider';
  defaultVal=0;
  minVal=0;
  maxVal=100;
  stepVal=1;
}
