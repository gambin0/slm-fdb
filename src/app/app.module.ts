import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { FirebaseModule } from '../firebase/firebase.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material-module/material.module';
import { RecipeEditorComponent } from './recipe-editor/recipe-editor.component';
import { MeasurementEditorComponent } from './measurement-editor/measurement-editor.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
    FirebaseModule,
    FormsModule,
    MaterialModule
  ],
  declarations: [ AppComponent, RecipeEditorComponent, MeasurementEditorComponent, ItemEditorComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
