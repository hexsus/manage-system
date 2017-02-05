import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {UserInfoService} from "../user-info.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userInfoService: UserInfoService, private router: Router) {
  }

  ngOnInit() {
  }

  onSubmit(email, password) {
    this.userInfoService.loginUser(email, password).subscribe((res) => {
      let token = Array.from(res.headers._headers)[2][1][0];
      localStorage.setItem('token', token);
      this.router.navigate(['/dashboard']);
    });
  }
}
