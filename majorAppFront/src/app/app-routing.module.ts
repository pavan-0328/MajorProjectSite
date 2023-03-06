import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapHelpComponent } from './map-help/map-help.component';
import { MapPageComponent } from './map-page/map-page.component';
import { SearchPlateComponent } from './search-plate/search-plate.component';

const routes: Routes = [{
  path: "searchPlate", component: SearchPlateComponent,
  
},
{path: "map-page",component: MapPageComponent},
{path: "maphelp",component: MapHelpComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
