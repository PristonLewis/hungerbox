import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router'

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
      itemType: ['', Validators.required],
      price: ['', Validators.required],
      quantity: ['', Validators.required],
      userId: [2]
    });


  }

  get f() { return this.additems.controls; }
  onSubmit() {


    this.submitted = true;

    console.log(this.additems.value);
    this.httpService.postRequest('/items/addItem', this.additems.value).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )

    // stop here if form is invalid
    if (this.additems.invalid) {
      return;
    }

  }

}










