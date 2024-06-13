import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component'
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { TrainingCardComponent } from './training-card/training-card.component';
import { CommonModule } from '@angular/common';
import { AboutUsComponent } from './about-us/about-us.component';
import { CardioComponent } from './cardio/cardio.component';
import { WorkoutGalleryComponent } from './workout-gallery/workout-gallery.component';
import { MerchComponent } from './merch/merch.component';
import { FooterComponent } from './footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,MatIconModule,NavbarComponent,HeroSectionComponent,TrainingCardComponent,AboutUsComponent,CardioComponent,WorkoutGalleryComponent,MerchComponent,FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  trainings = [
    {
      title: 'CIRCUIT TRAINING',
      description: 'Circuit training combines strength exercises and cardio for a complete, high-intensity workout',
      imageUrl: '/images/img-7.jpg'
    },
    {
      title: 'BODY CONDITIONING',
      description: 'Body conditioning improves overall fitness with strength and cardio exercises',
      imageUrl: '/images/img-8.jpg'
    },
    {
      title: 'GROUP EXERCISE',
      description: 'Group exercise classes improve fitness with structured routines and instructor support.',
      imageUrl: '/images/img-9.jpg'
    }
  ];
}