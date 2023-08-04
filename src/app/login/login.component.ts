import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm!: FormGroup
  loginError: boolean = false;
  isLoggingIn: boolean = false;
  InvalidLogin: boolean = false;
  AccessToken = 'your_fake_access_token'
  constructor(private FormBuilder: FormBuilder, private router: Router, private http: HttpClient) { }
  ngOnInit(): void {
    this.loginForm = this.FormBuilder.group({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    })
  }
  login(val: any) {
    if (this.loginForm.valid) {
      console.log(val)
      let body = {
        'username': this.loginForm.value.username,
        'password': this.loginForm.value.password,
      }
      this.isLoggingIn = true
      this.http.post("https://demo.credy.in/api/v1/usermodule/login/", body).subscribe((response: any) => {
        if (response.is_success == true) {
          console.log("hi")
          localStorage.setItem('access_token', response.data.token);
          console.log(response.data.token)
          this.router.navigate(['/movielist'])
          this.loginError = false
        }
        else if (response.is_success == false) {
          console.log("Not logged in")
          this.loginError = true
          this.isLoggingIn = true
        }
        (error: any) => {
          this.loginError = true;
        }
      }
      )
    } else {
      this.InvalidLogin = true
      alert("Please fill the username and password")
    }
  }
}


