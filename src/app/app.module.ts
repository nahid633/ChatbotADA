import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ChatMessageComponent} from './chat-message/chat-message.component';
import {ChatNavBarComponent} from './chat-nav-bar/chat-nav-bar.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';
import {ChatPageComponent} from './chat-page/chat-page.component';
import {FromNowPipe} from './pipes/from-now.pipe';
import {UsersService} from './user/users.service';
import {ThreadsService} from './thread/threads.service';
import {MessagesService} from './message/messages.service';
import {TabletMenuComponent} from './tablet-menu/tablet-menu.component';
import {MatButtonModule, MatIconModule} from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatNavBarComponent,
    ChatWindowComponent,
    ChatPageComponent,
    FromNowPipe,
    TabletMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [    MessagesService, ThreadsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
