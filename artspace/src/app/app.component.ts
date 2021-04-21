import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Lab6';
=======
export class AppComponent implements OnInit {
  title = 'artspace';

  logged = false;
  submitted = false;

  showModalLogin!: boolean;
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService: UserService) { }
  showLogin() {
    this.showModalLogin = true; // Show-Hide Modal Check
  }

  showReg() {
    alert("Sorry, registration is currently closed.");
  }

  hideLogin() {
    this.showModalLogin = false;
  }

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (token) {
      this.logged = true;
    }

    this.loginForm = this.formBuilder.group({
        username: ['', [Validators.required, Validators.minLength(1)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.userService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((data) => {
        localStorage.setItem('token', data.token);
        this.showModalLogin = false;
        this.logged = true;
      });
    }
  }

  logout() {
    if(confirm("Are you sure you want to log out?")) {
      this.logged = false;
      localStorage.removeItem('token');
    }
  }

}
