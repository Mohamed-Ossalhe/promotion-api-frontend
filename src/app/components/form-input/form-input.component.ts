import { Component, Input } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import { formType } from 'src/app/types/formType';

// input type will be moved to types
type formInput = { id: string, name: string, label: string, type: string, value: string | number };

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.less']
})
export class FormInputComponent {
  @Input() input!: formInput;
  @Input()
  parentForm!: FormGroup;

}
