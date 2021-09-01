import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TictactoeVsComputerPage } from './tictactoe-vs-computer.page';

describe('TictactoeVsComputerPage', () => {
  let component: TictactoeVsComputerPage;
  let fixture: ComponentFixture<TictactoeVsComputerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TictactoeVsComputerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TictactoeVsComputerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
