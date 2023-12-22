import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from 'features/src/lib/components/navbar/navbar.component';

@Component({
  selector: 'reg-angular-signup',
  standalone: true,
  imports: [CommonModule, NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  title = 'reg-angular';
  signupForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phonenumber: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl('', Validators.required),
  });

  get email() {
    return this.signupForm.get('email');
  }
}
