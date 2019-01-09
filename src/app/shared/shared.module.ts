import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MethodsFirebaseService } from '../services/methodsFirebase.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  declarations: [
  ],
  providers: [
    MethodsFirebaseService,
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
  ]
})
export class SharedModule { }
