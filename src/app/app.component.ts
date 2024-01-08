import { Component } from '@angular/core';
import { cardArrayTwelve } from './cardTwelve';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MemoryGame';
  ngOnInit(){
    console.log(cardArrayTwelve);
  }
 
}
