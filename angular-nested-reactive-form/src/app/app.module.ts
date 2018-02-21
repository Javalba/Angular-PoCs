//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './/app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { ChildFormComponent } from './components/child-form/child-form.component';

//Services
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    ParentFormComponent,
    ChildFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
