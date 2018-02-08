import { DashboardComponent } from './../../dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from './gallery.component';
import { galleryRouter } from './gallery.router';

@NgModule({
  imports: [
    CommonModule,
    galleryRouter
  ],
  declarations: [GalleryComponent]
})
export class GalleryModule { }
