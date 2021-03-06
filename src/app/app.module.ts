import { NgModule, Injector } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { UserCardComponent } from './user-card/user-card.component';
import { createCustomElement } from '@angular/elements';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent, UserCardComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const el = createCustomElement(UserCardComponent, { injector });
    customElements.define('user-card', el);
  }

  ngDoBootstrap() { }
}
