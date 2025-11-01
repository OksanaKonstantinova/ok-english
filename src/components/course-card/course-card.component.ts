import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  course = input.required<Course>();
  detailsClick = output<void>();

  onDetailsClick(): void {
    this.detailsClick.emit();
  }
}
