import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProformsRoutingModule } from './proforms-routing.module';
import { ProformsComponent } from './proforms.component';
@NgModule({
    imports: [CommonModule, ProformsRoutingModule],
    declarations: [ProformsComponent]
})
export class ProformsModule {}