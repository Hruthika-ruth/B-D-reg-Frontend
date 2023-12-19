import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DeathregComponent } from './deathreg/deathreg.component';
import { DeathRegRoutes } from './deathreg.routes';

@NgModule({
  imports: [CommonModule, DeathRegRoutes],
  declarations: [DeathregComponent],
})
export class DeathRegModule {}
