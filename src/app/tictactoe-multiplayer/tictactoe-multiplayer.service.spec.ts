import { TestBed } from '@angular/core/testing';

import { TictactoeMultiplayerService } from './tictactoe-multiplayer.service';

describe('TictactoeMultiplayerService', () => {
  let service: TictactoeMultiplayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TictactoeMultiplayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
