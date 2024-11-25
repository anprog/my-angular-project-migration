import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from '@angular/material/dialog';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-row-details-modal',
  templateUrl: './row-details-modal.component.html',
  styleUrl: './row-details-modal.component.css',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatDialogActions,
    MatDialogClose,
    MatButton,
    MatDialogTitle,
    MatDialogContent,
    MatLabel
  ],
})
export class RowDetailsModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}

}
