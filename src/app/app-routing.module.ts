import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleComponent } from './example.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },
  { path: 'example', component: ExampleComponent },
  { path: 'books', loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  // {
  //   path: '**',
  //   component: ErrorPageComponent,
  //   data: {
  //     code: 404,
  //     message: {
  //       head: 'Page Not Found',
  //       body:
  //         'The page you are looking for was moved or does not exist.<br>Please check your URL or return to the Home Page.'
  //     }
  //   }
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    paramsInheritanceStrategy: 'always'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
