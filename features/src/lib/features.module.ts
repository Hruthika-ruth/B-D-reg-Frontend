import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const FEATURES_MODULE: Route[] = [
  {
    path: 'navbar',
    component: NavbarComponent,
  },
  {
    path: 'footer',
    component: FooterComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(FEATURES_MODULE)],
  exports: [RouterModule],
})
export class FeaturesModule {}
