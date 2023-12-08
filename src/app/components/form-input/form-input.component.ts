import { Component, Input } from '@angular/core';
import { FormControlName, FormGroup } from '@angular/forms';
import { formType } from 'src/app/types/formType';

@Component({
  selector: 'app-form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.less']
})
export class FormInputComponent {
  @Input() input: {id: string, name: string, label: string, type: string} = {
    id: '',
    name: '',
    label: '',
    type: ''
  };
  @Input()
  parentForm!: FormGroup;

}
