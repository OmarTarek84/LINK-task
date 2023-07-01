import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';

const COMPONENTS = [
  NavbarComponent,
  FooterComponent
];


@NgModule({
  declarations: [
    NotFoundComponent,
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [...COMPONENTS]
})
export class CoreModule { }
