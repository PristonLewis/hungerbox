import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/shared/http.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  private vendors;
  constructor(private httpService: HttpService, private formBuilder: FormBuilder, private router: Router) {

  }



  ngOnInit() {

    this.httpService.getRequest('/vendor/vendors').subscribe((data: any) => {
      this.vendors = data.vendors;
      console.log(this.vendors);
    });
  }

  addUser(): void {
    this.router.navigate(['/addvendor']);
  };

  deleteUser(id) {
    console.log(id)
    this.httpService.delRequest('/vendor/deleteVendor/' + id).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)

    )

  }

}
