import { Component } from '@angular/core';
import { formType } from 'src/app/types/formType';
import {AuthService} from "../../../services/auth/auth.service";
import {User} from "../../../interfaces/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {

  private user: User | undefined;
  public error: string = "";

  constructor(private _authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.user = this._authService.getUser();
  }
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
    this.error = "";
    // TODO: add authentication service and pass the data
    if (data.email !== "" && data.password !== "")
      this._authService.login(data.email, data.password).subscribe((res) => {
        if (res !== undefined){
          this._authService.setUser(res);
          this.router.navigate(['/dashboard']).then(r => console.log(r));
        }
        else
          this.error = "wrong email or password";
      }
    );
    else
      this.error = "please fill the form";

  }
}
