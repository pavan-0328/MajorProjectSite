import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchPlateComponent } from './search-plate/search-plate.component';

const routes: Routes = [{
  path: "searchPlate", component: SearchPlateComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
