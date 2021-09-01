import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TictactoeMultiplayerPage } from './tictactoe-multiplayer.page';

describe('TictactoeMultiplayerPage', () => {
  let component: TictactoeMultiplayerPage;
  let fixture: ComponentFixture<TictactoeMultiplayerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactoeMultiplayerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TictactoeMultiplayerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
