import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.css'],
  standalone: true
})
export class TrainingCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';
}
