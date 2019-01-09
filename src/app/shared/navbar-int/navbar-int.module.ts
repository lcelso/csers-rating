import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavbarIntComponent } from './navbar-int.component';

@NgModule({
    imports: [ RouterModule, CommonModule ],
    declarations: [ NavbarIntComponent ],
    exports: [ NavbarIntComponent ]
})

export class NavbarIntModule {}
