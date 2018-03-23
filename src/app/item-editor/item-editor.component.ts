import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { ItemName } from '../models';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-item-editor',
  templateUrl: './item-editor.component.html',
  styleUrls: ['./item-editor.component.less']
})
export class ItemEditorComponent implements OnInit {
  itemNamesCollection: AngularFirestoreCollection<ItemName>;
  itemNames: Observable<any[]>;

  itemCollectionName = 'itemNames';

  

  constructor(private afs: AngularFirestore) { }

  ngOnInit() {

    this.itemNamesCollection = this.afs.collection(this.itemCollectionName);
    this.itemNames = this.itemNamesCollection.valueChanges();
  }
  


}
