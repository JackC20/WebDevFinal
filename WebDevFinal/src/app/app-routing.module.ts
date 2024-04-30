import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MacrosComponent } from './components/macros/macros.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  { path: 'macro', component: MacrosComponent },
  { path: 'user', component: UserComponent },
  { path: '', redirectTo: '/macro', pathMatch: 'full' },
  { path: '**', redirectTo: '/macro' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]  
})
export class AppRoutingModule { }