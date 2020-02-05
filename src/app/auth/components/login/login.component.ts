import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  Roledetails: any = ['admin', 'Vendor', 'user'];



  constructor(private httpService: HttpService, private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({

      uName: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
      roleName: ['', [Validators.required]]

    });
  }
  get f() { return this.registerForm.controls; }

  onSubmit() {


    this.submitted = true;

    this.httpService.postRequest('users/login', this.registerForm.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

    console.log(this.registerForm.value);




    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }


  }


}




