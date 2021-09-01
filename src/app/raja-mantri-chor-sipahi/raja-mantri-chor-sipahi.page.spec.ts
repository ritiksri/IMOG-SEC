import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RajaMantriChorSipahiPage } from './raja-mantri-chor-sipahi.page';

describe('RajaMantriChorSipahiPage', () => {
  let component: RajaMantriChorSipahiPage;
  let fixture: ComponentFixture<RajaMantriChorSipahiPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RajaMantriChorSipahiPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RajaMantriChorSipahiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
