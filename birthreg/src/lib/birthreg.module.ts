import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BirthRegRoutes } from './birthreg.routes';
import { BirthregComponent } from './birthreg/birthreg.component';

@NgModule({
  imports: [CommonModule, BirthRegRoutes],
  declarations: [BirthregComponent],
})
export class BirthRegModule {}
