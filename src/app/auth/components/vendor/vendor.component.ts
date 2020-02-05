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

  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
  }



}










