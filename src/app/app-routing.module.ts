import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsPageComponent } from './news-page/news-page.component';
import { HomeComponent } from './home/home.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:'/home',pathMatch:'full'
  },
  {
    path:'news-page/:id',
    pathMatch: 'full',
    component: NewsPageComponent,
    styleUrls: [
       'https://www.w3schools.com/w3css/4/w3.css'
   ],
  },
  {
    path:'home',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
