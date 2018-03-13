import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AngularFirestore } from 'angularfire2/firestore';
import { FirebaseModule } from '../firebase/firebase.module';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FirebaseModule,
        AngularFireModule.initializeApp(environment.firebase), // imports firebase/app needed for everything
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        AngularFirestore
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
