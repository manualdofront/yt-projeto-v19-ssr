import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-circle',
  imports: [],
  templateUrl: './circle.component.html',
  styleUrl: './circle.component.scss',
})
export class CircleComponent implements OnInit {
  ngOnInit(): void {
    console.log('foi carregado.');
  }
}
