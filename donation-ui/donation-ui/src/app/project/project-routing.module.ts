import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ProjectDetailComponent} from "./project-detail/project-detail.component";

const routes: Routes = [
  { path: 'project/:id', component: ProjectDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProjectRoutingModule {}
