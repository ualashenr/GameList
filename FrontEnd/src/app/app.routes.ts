// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainpageComponent } from './mainpage/mainpage.component';
import { GamepageComponent } from './gamepage/gamepage.component';

export const APP_ROUTES: Routes = [
  { path: 'lists/:id', component: MainpageComponent },
  { path: 'games/:id', component: GamepageComponent },
  { path: '', redirectTo: 'lists/1', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(APP_ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
