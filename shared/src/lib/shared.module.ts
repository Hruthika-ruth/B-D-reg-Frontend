import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedRoutes } from './shared.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, SharedRoutes],
  declarations: [LayoutComponent, DashboardComponent],
  exports: [],
})
export class SharedModule {}
