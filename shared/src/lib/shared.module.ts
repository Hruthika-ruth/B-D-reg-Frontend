import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutComponent } from './pages/layout/layout.component';
import { SharedRoutes } from './shared.routes';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { MaterialModule } from '@material';

@NgModule({
  imports: [CommonModule, MaterialModule, SharedRoutes],
  declarations: [LayoutComponent, DashboardComponent],
  exports: [],
})
export class SharedModule {}
