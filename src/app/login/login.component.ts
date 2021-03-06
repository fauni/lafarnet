import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoggedin() {
    localStorage.setItem('isLoggedin', 'true');
  }
}
