import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MainComponent } from './home/main/main.component';
import { GenericBlueComponent } from './components/buttons/generic-blue/generic-blue.component';
import { HomeInfoCardComponent } from './components/cards/home-info-card/home-info-card.component';
import { LowerSectionComponent } from './home/lower-section/lower-section.component';
import { MidCardComponent } from './components/cards/mid-card/mid-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    GenericBlueComponent,
    HomeInfoCardComponent,
    LowerSectionComponent,
    MidCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
