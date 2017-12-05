import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { EventsListComponent } from './components/events-list/events-list.component';
import { SearchComponent } from './components/search/search.component';
import { EventService } from './services/event/event.service';
import { UserComponent } from './components/user/user.component';
import { UserCreateComponent } from './components/user-create/user-create.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    SearchComponent,
    UserComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
