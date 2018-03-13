import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireModule } from 'angularfire2';

@NgModule({
  exports: [
    AngularFireModule,
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule,
     // imports firebase/storage only needed for storage features
  ],
  declarations: []
})
export class FirebaseModule { }
