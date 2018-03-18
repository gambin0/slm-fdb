import { NgModule } from '@angular/core';
import {MatButtonModule,
  MatCheckboxModule,
  MatSidenavModule,
  MatRippleModule,
  MatToolbarModule} from '@angular/material';

@NgModule({
  // imports: [MatButtonModule, MatCheckboxModule],
  exports:
    [MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatButtonModule,
    MatRippleModule,
    MatToolbarModule
  ],
})
export class MaterialModule { }
