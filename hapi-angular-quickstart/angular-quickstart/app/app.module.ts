import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { LoginService } from './login/login.service'
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeService } from './employee/employee.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

@NgModule({
    imports: [
        BrowserModule,RouterModule,AppRoutingModule,HttpModule
    ],
    declarations: [AppComponent, LoginComponent, EmployeeComponent],
    bootstrap: [AppComponent],
    providers: [LoginService, EmployeeService]
})
export class AppModule {}


 