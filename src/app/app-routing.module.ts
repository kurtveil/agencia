import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
// Components
import { LoginComponent } from './../components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
      { path: 'login', component: LoginComponent },
    ]
  },
  {
    path: 'register', loadChildren: () => import('../pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'home', loadChildren: () => import('../pages/home/home.module').then(m =>
      m.HomePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
