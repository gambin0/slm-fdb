import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { User } from '@firebase/auth-types';
import { Recipe, ShoppingList, Measurement } from './models';

interface Post {
  title: string;
  content: string;
}

interface PostId extends Post {
  id: string;
}

interface UserData {
  recipes: Recipe[];
  shoppingLists: ShoppingList[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  userDataCollection: AngularFirestoreCollection<Post>;
  userData: Observable<any[]>;

  postsCol: AngularFirestoreCollection<Post>;
  posts: Observable<any[]>;
  postDoc: AngularFirestoreDocument<Post>;
  post: Observable<Post>;

  userCollectionName: string;
  title: string;
  content: string;

  testMeasurement = new Measurement();


  constructor(
    private afs: AngularFirestore,
    public afAuth: AngularFireAuth
  ) {

  }

  ngOnInit() {
    if (this.afAuth.authState) {
      this.afAuth.authState.subscribe(user => {
        this.userCollectionName = user.uid + 'userCollection';
      });
    }


    this.postsCol = this.afs.collection('posts');
    // this.postsCol = this.afs.collection('posts', ref => ref.where('title', '==', 'coursetro'));
    // this.posts = this.postsCol.valueChanges();
    this.posts = this.postsCol.snapshotChanges()
      .map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data() as Post;
          const id = a.payload.doc.id;
          return { id, data };
        });
      });

      this.testMeasurement.type = 'cup';
      this.testMeasurement.value = 0;
  }

  addPost() {
    this.afs.collection('posts').add({'title': this.title, 'content': this.content});
    // this.afs.collection('posts').doc('my-custom-id').set({'title': this.title, 'content': this.content});
  }
  getPost(postId) {
    this.postDoc = this.afs.doc('posts/'+postId);
    this.post = this.postDoc.valueChanges();
  }
  deletePost(postId) {
    this.afs.doc('posts/'+postId).delete();
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then((value) => {
    });
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}

