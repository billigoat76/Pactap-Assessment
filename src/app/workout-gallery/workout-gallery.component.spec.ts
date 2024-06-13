import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkoutGalleryComponent } from './workout-gallery.component';

describe('WorkoutGalleryComponent', () => {
  let component: WorkoutGalleryComponent;
  let fixture: ComponentFixture<WorkoutGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkoutGalleryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkoutGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
