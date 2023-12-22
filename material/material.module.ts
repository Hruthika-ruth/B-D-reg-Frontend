import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

const MATERIAL_MODULES = [MatSidenavModule, MatListModule];
@NgModule({ exports: [MATERIAL_MODULES] })
export class MaterialModule {}
