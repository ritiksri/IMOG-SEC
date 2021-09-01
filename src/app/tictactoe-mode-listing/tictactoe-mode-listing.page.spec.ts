import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TictactoeModeListingPage } from './tictactoe-mode-listing.page';

describe('TictactoeModeListingPage', () => {
  let component: TictactoeModeListingPage;
  let fixture: ComponentFixture<TictactoeModeListingPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactoeModeListingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TictactoeModeListingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
