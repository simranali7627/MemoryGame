import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BoardComponent } from './board/board.component';
import { MemorycardComponent } from './memorycard/memorycard.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { BoardtwelveComponent } from './boardtwelve/boardtwelve.component';
@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    MemorycardComponent,
    HomeComponent,
    BoardtwelveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
