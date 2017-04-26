import { Component, OnInit } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
  providers: [GameService]

})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService) { }
	
	headerMessage = "Choose Higher or Lower";

    //Variable to store the data returned by API
    deck=[];

    //Variables to determine which div to show or hide
    check = false;
    equal = false;
    correct = false;
    wrong = false;
    buttons = true;
    tryagain = false;

    //Variables to store the value of cards in string and in integer
    player1 = '';
    player2 = '';
    play1 = 0;
    play2 = 0;

    //This method runs during initialization. 
    ngOnInit() {
        this.getCards();
    }

    //Calls game service getDeck() to fetch the data from the API.
    getCards(){

        this.buttons = true;
        this.tryagain = false;
        this.check = false;
        this.equal = false;
        this.correct = false;
        this.wrong = false;

        this.gameService.getDeck().subscribe(
            (data) => this.deck = data,
            err => this.logError(err),
            () => console.log('Two Cards Selected')
        );
    }

    //Prints the error to the console
    logError(err) {
        console.error('There was an error: ' + err);
    }

    //Map the value of cards with integer value
    common(){
        this.check = true;
        this.buttons = false;
        this.tryagain = true;
        this.player1 = this.deck[0].value;
        this.player2 = this.deck[1].value;

        if(this.player1 == 'ACE'){
            this.play1 = 1;
        }else if(this.player1 == 'JACK'){
            this.play1 = 11;
        }else if(this.player1 == 'QUEEN'){
            this.play1 = 12;
        }else if(this.player1 == 'KING'){
            this.play1 = 13;
        }else {
            this.play1 = parseInt(this.player1);
        }

        if(this.player2 == 'ACE'){
            this.play2 = 1;
        } else if(this.player2 == 'JACK'){
            this.play2 = 11;
        }else if(this.player2 == 'QUEEN'){
            this.play2 = 12;
        }else if(this.player2 == 'KING'){
            this.play2 = 13;
        }else {
            this.play2 = parseInt(this.player2);
        }
    }

    higher(){
        this.common();
        if(this.play1  == this.play2){
            this.equal = true;
        }else if (this.play1 > this.play2){
            this.wrong = true;
        }else{
            this.correct = true;
        }

    }

    lower(){
        this.common();
        if(this.play1  == this.play2){
            this.equal = true;
        } else if (this.play1 < this.play2){
            this.wrong = true;
        }else{
            this.correct = true;
        }

    }

}
