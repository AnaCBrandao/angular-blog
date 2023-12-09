import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { PanelComponent } from './components/panel/panel.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContentComponent } from './pages/content/content.component';
import { ContactCardComponent } from './components/contact-card/contact-card.component';


import { NgIconsModule } from '@ng-icons/core';
import { heroUsers } from '@ng-icons/heroicons/outline';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    PanelComponent,
    CardComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ContentComponent,
    ContactCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ heroUsers }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
