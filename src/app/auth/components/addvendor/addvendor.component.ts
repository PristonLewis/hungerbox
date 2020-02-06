import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addvendor',
  templateUrl: './addvendor.component.html',
  styleUrls: ['./addvendor.component.sass']
})
export class AddvendorComponent implements OnInit {

  addvendor: FormGroup;
  submitted = false;



  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router) { }
  ngOnInit() {

    this.addvendor = this.formBuilder.group({

      vendorName: ['', Validators.required],
      userid: [1]




    });

  }
  get f() { return this.addvendor.controls; }
  onSubmit() {


    this.submitted = true;

    console.log(this.addvendor.value);
    this.httpService.postRequest('/vendor/addVendor', this.addvendor.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

    // stop here if form is invalid
    if (this.addvendor.invalid) {
      return;
    }

  }

}
