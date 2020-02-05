import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminComponent } from './components/admin/admin.component';
import { VendorComponent } from 'src/app/auth/components/vendor/vendor.component';
import { AddvendorComponent } from './components/addvendor/addvendor.component';





@NgModule({
    declarations: [LoginComponent, AdminComponent, VendorComponent, AddvendorComponent],
    imports: [
        CommonModule,
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule

    ]
})
export class AuthModule { }
