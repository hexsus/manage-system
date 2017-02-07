import {Component, OnInit} from '@angular/core';
import {UserInfoService} from "../user-info.service";
import {Router} from "@angular/router";
import {MdSnackBar} from "@angular/material";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private userInfoService: UserInfoService, private router: Router, public snackBar: MdSnackBar) {

  }

  ngOnInit() {
  }

  openSnackBar(message: string, action?: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onSubmit(email, password) {
    console.log('Submitting', email, password);
    this.userInfoService.signInUser(email, password).subscribe(res => {
      console.log(res);
      this.router.navigate(['/login']);
    }, err => {
      console.log(err);
      this.openSnackBar('error');
    });

  }
}
