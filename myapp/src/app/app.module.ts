import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserCardComponent } from './header/user-card/user-card.component';
import { ItemComponent } from './header/item/item.component';
import { ColoryDirective } from './colory.directive';
import { ItemDirectiveComponent } from './item-directive/item-directive.component';
import { DelayDirective } from './delay.directive';
import { DynamicComponentComponent } from './dynamic-component/dynamic-component.component';
import { UserService } from './user.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserCardComponent,
    ItemComponent,
    ColoryDirective,
    ItemDirectiveComponent,
    DelayDirective,
    DynamicComponentComponent
  ],

  entryComponents : [ DynamicComponentComponent ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
