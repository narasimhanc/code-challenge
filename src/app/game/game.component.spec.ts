import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { DebugElement }    from '@angular/core';
import { GameComponent } from './game.component';
import { GameService } from './game.service';
import { MdCardModule } from '@angular/material';
import { Observable } from 'rxjs/Observable';

let cardsMockData = {"remaining": 50, "cards": [{"code": "KD", 
"image": "http://deckofcardsapi.com/static/img/KD.png", 
"suit": "DIAMONDS", 
"value": "KING", 
"images": {"png": "http://deckofcardsapi.com/static/img/KD.png", "svg": "http://deckofcardsapi.com/static/img/KD.svg"}},
 {"code": "AS", "image": "http://deckofcardsapi.com/static/img/AS.png", "suit": "SPADES", "value": "ACE", "images": 
 {"png": "http://deckofcardsapi.com/static/img/AS.png", "svg": "http://deckofcardsapi.com/static/img/AS.svg"}}], 
 "deck_id": "m09bdahk9sgy", "success": true};

  let comp: GameComponent;
  let fixture: ComponentFixture<GameComponent>;
  let de:      DebugElement;
  let el:      HTMLElement;
  let gameService : GameService;

describe('GameComponent', () => {

	beforeEach(async(() => {
			TestBed.configureTestingModule({
			  imports:[MdCardModule, HttpModule, JsonpModule ],
			  declarations: [ GameComponent ],
			  providers:    [ GameService ]
			})
			.compileComponents()
			.then(createComponent);
    }));

	it('should display header title', () => {
	 fixture.detectChanges();
	 expect(fixture.nativeElement.querySelector('h1').textContent).toEqual(comp.headerMessage);
	});

    it('should call getDeck when ngOnInit is called', async(() => {
        spyOn(gameService, 'getDeck').and.returnValue(Observable.of(cardsMockData));
        comp.ngOnInit();
        expect(gameService.getDeck).toHaveBeenCalled();
    }));
});

function createComponent() {
    fixture = TestBed.createComponent(GameComponent);
    comp = fixture.componentInstance;
    gameService = fixture.debugElement.injector.get(GameService);
};
