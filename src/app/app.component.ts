import { Component } from '@angular/core';
import { CircleComponent } from './circle/circle.component';

@Component({
  selector: 'app-root',
  imports: [CircleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'yt-projeto-v19-ssr';
}
