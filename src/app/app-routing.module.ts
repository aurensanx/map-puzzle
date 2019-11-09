import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MapComponent} from "./components/map/map.component";

const routes: Routes = [

  {path: '', component: HomeComponent},
  {path: "map/:id", component: MapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
