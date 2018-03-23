import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { ItemName } from '../models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.less']
})
export class ItemEditorComponent implements OnInit {
  itemNamesCollection: AngularFirestoreCollection<ItemName>;
  //itemNames: Observable


  constructor() { }

  ngOnInit() {
  }

}
