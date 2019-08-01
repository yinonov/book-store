import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { PortalModule } from '@angular/cdk/portal';
import { SearchBooksComponent } from '@books/components/search-books/search-books.component';

@NgModule({
  declarations: [HeaderComponent, NavigationComponent, SearchBooksComponent],
  imports: [
    CommonModule,
    RouterModule,
    ClarityModule,
    PortalModule
  ],
  exports: [HeaderComponent],
  entryComponents: [SearchBooksComponent]
})
export class CoreModule { }
