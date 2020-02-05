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

  Roledetails: any = ['Admin', 'Vendor', 'user'];



  constructor(private formBuilder: FormBuilder, private httpService: HttpService, ) {


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


    console.log(this.registerForm.value)


    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }


}




