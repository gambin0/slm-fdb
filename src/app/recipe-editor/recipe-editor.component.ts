import { Component, OnInit, Input } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Item, TemplateItem } from '../models';
import { Observable } from 'rxjs/Observable';
import { Recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-editor',
  templateUrl: './recipe-editor.component.html',
  styleUrls: ['./recipe-editor.component.less']
})
export class RecipeEditorComponent implements OnInit {
  templateCollectionName = 'templateItems';
  templateItemsCollection: AngularFirestoreCollection<TemplateItem>;
  templateItems: Observable<any[]>;

  recipe: Recipe;

  @Input() user;

  constructor(private afs: AngularFirestore) {
    this.recipe = new Recipe();
   }

  ngOnInit() {
    this.templateItemsCollection = this.afs.collection(this.templateCollectionName);
    this.templateItems = this.templateItemsCollection.valueChanges();
    
  }

  addTemplateItem(itemName) {
    const item = new TemplateItem();
    item.name = itemName;
    this.afs.collection(this.templateCollectionName).add(item);
  }
}
