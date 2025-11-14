import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-registration-modal',
  standalone: true,
  templateUrl: './registration-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationModalComponent {
  @Input() course!: Course;  // Курс, на который регистрируются
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }
}