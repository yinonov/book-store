import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full'
  },
  { path: 'search', loadChildren: () => import('./search/search.module').then(m => m.SearchModule) },
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
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
