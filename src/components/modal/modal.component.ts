import { Component, ChangeDetectionStrategy, input, output } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent {
  course = input.required<Course>();
  close = output<void>();

  onClose(): void {
    this.close.emit();
  }
}
