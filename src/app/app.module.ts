import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChatMessageComponent} from './chat-message/chat-message.component';
import {ChatNavBarComponent} from './chat-nav-bar/chat-nav-bar.component';
import {ChatWindowComponent} from './chat-window/chat-window.component';
import {ChatPageComponent} from './chat-page/chat-page.component';
import {FromNowPipe} from './pipes/from-now.pipe';
import {UsersService} from './user/users.service';
import {ThreadsService} from './thread/threads.service';
import {MessagesService} from './message/messages.service';
import {TabletMenuComponent} from './tablet-menu/tablet-menu.component';
import {
  MatButtonModule, MatDialogModule, MatFormField, MatFormFieldModule, MatIconModule, MatInput,
  MatInputModule, MatRadioModule
} from '@angular/material';
import {MatStepperModule} from '@angular/material/stepper';
import { FeedbackComponent } from './feedback/feedback.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ChatMessageComponent,
    ChatNavBarComponent,
    ChatWindowComponent,
    ChatPageComponent,
    FromNowPipe,
    TabletMenuComponent,
    FeedbackComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
    MatDialogModule,
    MatRadioModule

  ],
  providers: [    MessagesService, ThreadsService, UsersService],
  entryComponents: [FeedbackComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
