import { Component } from '@angular/core';
import { cardArraySix } from '../cardSix';
import { Card } from '../card';

@Component({
  selector: 'app-boardtwelve',
  templateUrl: './boardtwelve.component.html',
  styleUrl: './boardtwelve.component.scss'
})
export class BoardtwelveComponent {

  selectedCards: Array<Card> = [];
  selectedCardId !:[];
  cards: Array<Card> = cardArraySix;
  firstPick = null;
  secondPick = null;
  score: number = 0;
  misses : number = 0;
  countMatched: number = 0;
  isGameOver: boolean = false;
  rounds : number = 0;
  ngOnInit(){
    this.shuffleCards();
    
  }

  restart(){
    this.isGameOver = false;
    this.selectedCards= [];
    this.selectedCardId =[];
    this.cards.forEach(card => {
      card.flipped = false;
      card.matched = false;
    });
    this.firstPick = null;
    this.secondPick = null;
    this.score = 0;
    this.misses  = 0;
    this.countMatched = 0;
    
    this.rounds  = 0;
    this.shuffleCards();
  }

  shuffleCards(){
    this.cards.sort(() => 0.5 - Math.random());
    // cardArraySix.sort(() => 0.5 - Math.random());
    console.log(this.cards)
  }

  flipCard(index : any){
    console.log('flipped')
    if (this.selectedCards.length == 2 && this.selectedCards[1].flipped)
      return;

    if (this.firstPick === null) {
      this.firstPick = index;
      this.cards[index].flipped = true;
      this.selectedCards.push(this.cards[index]);
    } else {

      this.secondPick = index;
      this.cards[index].flipped = true;

      this.selectedCards.push(this.cards[index]);

      if (this.secondPick !== null) {

        if (this.cards[this.firstPick].name === this.cards[this.secondPick].name) {

          setTimeout(() => {

            this.cards[this.firstPick!].matched = true;
            this.cards[this.secondPick!].matched = true;
            this.firstPick = null;
            this.secondPick = null;
            this.selectedCards = [];
            this.score += 1;
            
            this.countMatched += 1;

            if (this.countMatched === 3)
              {
                this.rounds += 1;
                console.log("Rounds : " + this.rounds)
                this.isGameOver = true;
                // in case of game over display congratulations ( with animation and a button to display replay )
              }
              console.log("Rounds : " + this.rounds)
              console.log("Count Matched : " + this.countMatched)

          }, 2000);
        }
        else {

          setTimeout(() => {

            if (this.firstPick !== null && this.secondPick !== null) {
              this.cards[this.firstPick].flipped = false;
              this.cards[this.secondPick].flipped = false;
              this.firstPick = null;
              this.secondPick = null;
              this.selectedCards = [];
              // this.score = this.score - 1 > 0 ? this.score - 1 : 0;
              this.misses += 1;
              this.score += 1;
              // if (this.countMatched == 12)
              // {
              //   this.rounds += 1;
              //   console.log("Rounds : " + this.rounds)
              //   // this.isGameOver = true;
              // }
            }
          }, 1000);
        }

      }
    }
  }

  
  checkIsGameOver(){
    console.log("Checking if game is over")
    return this.isGameOver;
  }


}
