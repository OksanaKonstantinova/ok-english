import { Component, ChangeDetectionStrategy, input, output, OnInit, signal } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ModalComponent implements OnInit {
  course = input.required<Course>();
  close = output<void>();
  showDetails = signal(false);

  ngOnInit(): void {
  }

  onClose(): void {
    this.close.emit();
  }

  toggleDetails(): void {
    this.showDetails.set(!this.showDetails());
  }
}