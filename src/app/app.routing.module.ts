import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ExampleComponent } from './example/example.component';
import { GetStartedComponent } from './example/get-started/get-started.component';
import { StyleGuideComponent } from './example/style-guide/style-guide.component';


const appRoutes: Routes = [
  {path: 'example', component: ExampleComponent},
  {path: 'get-started', component: GetStartedComponent},
  {path: 'style-guide', component: StyleGuideComponent},
  {path: '', redirectTo: '/example', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutes {
}
