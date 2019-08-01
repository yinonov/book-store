import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule,
  ],
  exports: [HeaderComponent]
})
export class CoreModule { }
