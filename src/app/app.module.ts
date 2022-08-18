import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AddComponent } from './add/add.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'
import { EmployeesService } from './employees.service';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    HomeComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [EmployeesService],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
