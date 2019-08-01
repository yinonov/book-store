import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WISH_LIST_FEATURE_KEY } from './shared/wish-list/data-access/reducers';
import { BOOKS_FEATURE_KEY } from './shared/books/data-access/reducers';


const routes: Routes = [
  {
    path: '',
    redirectTo: `/${BOOKS_FEATURE_KEY}`,
    pathMatch: 'full'
  },
  { path: BOOKS_FEATURE_KEY, loadChildren: () => import('./books/books.module').then(m => m.BooksModule) },
  { path: WISH_LIST_FEATURE_KEY, loadChildren: () => import('./wish-list/wish-list.module').then(m => m.WishListModule) },
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
