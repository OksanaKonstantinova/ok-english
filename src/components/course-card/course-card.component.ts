import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent {
  @Input() course!: Course;
  @Output() detailsClick = new EventEmitter<void>();
  @Output() registrationClick = new EventEmitter<Course>();

  onDetailsClick(): void {
    this.detailsClick.emit();
  }

  onRegistrationClick(): void {
    this.registrationClick.emit(this.course);
  }
}