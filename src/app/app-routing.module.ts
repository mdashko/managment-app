import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TrainListComponent } from "./components/train-list/train-list.component";
import { TrainDetailsComponent } from "./components/train-details/train-details.component";

const routes: Routes = [
    { path: '', redirectTo: 'train-list', pathMatch: 'full' },
    { path: 'train-list', component: TrainListComponent },
    { path: 'train-edit', component: TrainDetailsComponent },
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {
}