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
        label: 'email',
        value: ''
      },
      {
        type: 'password',
        name: 'password',
        id: 'password',
        label: 'password',
        value: ''
      },
      {
        type: 'submit',
        name: 'submit',
        id: 'submit',
        label: 'login',
        value: ''
      }
    ],
    options: {
      headers: {}
    }
  }

  public submitForm(data: any) {
    // TODO: add authentication service and pass the data
    if (data.email !== "" && data.password !== "")
      console.log(data);
    else
      console.log("please fill the form");
      
  }
}
