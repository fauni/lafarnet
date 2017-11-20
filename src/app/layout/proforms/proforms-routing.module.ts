import { Routes, RouterModule } from '@angular/router';
import { ProformsComponent } from './proforms.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: ProformsComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProformsRoutingModule { 
}