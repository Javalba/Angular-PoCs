import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { ChildFormComponent } from './components/child-form/child-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { UserService } from './services/user.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    ChildFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
