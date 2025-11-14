import { Component, ChangeDetectionStrategy, output } from '@angular/core';

@Component({
  selector: 'app-registration-modal',
  standalone: true,
  templateUrl: './registration-modal.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationModalComponent {
  close = output<void>();

  onClose(): void {
    this.close.emit();
  }
}