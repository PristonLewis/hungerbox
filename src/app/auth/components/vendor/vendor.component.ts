import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.sass']
})
export class VendorComponent implements OnInit {

  additems: FormGroup;
  submitted = false;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {



    this.additems = this.formBuilder.group({

      itemName: ['', Validators.required],
      itemType: ['Select Role', Validators.required],
      price: ['', Validators.required],
      userId: ['2'],
      quantity: ['', Validators.required],




    });


  }

  get f() { return this.additems.controls; }
  onSubmit() {


    this.submitted = true;

    console.log(this.additems.value);
    this.httpService.postRequest('/item/addItem', this.additems.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

    // stop here if form is invalid
    if (this.additems.invalid) {
      return;
    }

  }

}










