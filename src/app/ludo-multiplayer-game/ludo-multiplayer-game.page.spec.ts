import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LudoMultiplayerGamePage } from './ludo-multiplayer-game.page';

describe('LudoMultiplayerGamePage', () => {
  let component: LudoMultiplayerGamePage;
  let fixture: ComponentFixture<LudoMultiplayerGamePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LudoMultiplayerGamePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LudoMultiplayerGamePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
