import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  login: boolean;
  password: string;
  name: string;

  constructor() {
    this.login = false;
  }


  ngOnInit() { }

  loginAutenticated() {
    if (this.password === '' && this.name === '') {
      alert('no señor');
    }
  }

}
