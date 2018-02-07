import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";

//Container
import { PassengerDashboardComponent } from './container/passenger-dashboard/passenger-dashboard.component';

//Presentational Components
import { PassengerActionsComponent } from './components/passenger-actions/passenger-actions.component';
import { PassengerCountComponent } from './components/passenger-count/passenger-count.component';
import { PassengerDetailComponent } from './components/passenger-detail/passenger-detail.component';
import { PassengerInfoComponent } from './components/passenger-info/passenger-info.component';

@NgModule({
  declarations:[PassengerDashboardComponent, PassengerActionsComponent, PassengerCountComponent, PassengerDetailComponent, PassengerInfoComponent],
  imports:[
    CommonModule
  ],
  exports: [
    PassengerDashboardComponent //The rest of components are referred internally.
  ]
})

export class PassengerDashboardModule {}
