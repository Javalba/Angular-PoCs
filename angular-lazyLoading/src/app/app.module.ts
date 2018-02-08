import { BrowserModule } from '@angular/platform-browser'; //imports CommonModule
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { appRouter } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    appRouter //lazy modules
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
