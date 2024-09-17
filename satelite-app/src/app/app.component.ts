import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'satelite-app';

  constructor() {
    
  }

  ngOnInit(): void {
    const iframe = <HTMLIFrameElement>document.getElementById('micro-frontend-container');
    iframe.src = "http://localhost:3000";
  }
}
