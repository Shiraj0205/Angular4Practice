import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {

  form = new FormGroup({
    username : new FormControl('', [Validators.required]),
    oldpassword : new FormControl('', [Validators.required]),
    newpassword : new FormControl('', [Validators.required]),
  });

}
