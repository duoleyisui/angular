import { NgModule } from '@angular/core';
import { ListComponent } from './list/list';
import { BlankComponent } from './blank/blank';

@NgModule({
	declarations: [ListComponent,
    BlankComponent],
	imports: [],
	exports: [ListComponent,
    BlankComponent]
})
export class ComponentsModule {}
