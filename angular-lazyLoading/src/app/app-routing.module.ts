import { ModuleWithProviders   } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [{
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'gallery',
    loadChildren: 'app/dashboard/components/gallery/gallery.module#GalleryModule'
  },
  {
    path: 'about',
    loadChildren: 'app/dashboard/components/about/about.module#AboutModule'

  },
  {
    path: '**',
    redirectTo: '/'
  },
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(routes);
