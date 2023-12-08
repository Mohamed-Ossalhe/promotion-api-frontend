import { Component } from '@angular/core';
import { formType } from 'src/app/types/formType';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  public form: formType = {
    method: 'GET',
    formInputs: [
      {
        type: 'email',
        name: 'email',
        id: 'email',
        label: 'email'
      },
      {
        type: 'password',
        name: 'password',
        id: 'password',
        label: 'password'
      },
      {
        type: 'submit',
        name: 'submit',
        id: 'submit',
        label: 'login'
      }
    ],
    options: {
      headers: {}
    }
  }
}
