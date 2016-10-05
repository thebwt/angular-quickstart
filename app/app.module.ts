/**
 * Created by thebwt on 10/5/16.
 */
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroesComponent } from "./heroes.component";
import { HeroService } from "./hero.service";
import { routing } from "./app.routing";
import {DashboardComponent} from "./dashboard.component";


@NgModule({
    imports:      [
        BrowserModule,
        routing,
        FormsModule
    ],
    declarations: [
        AppComponent,
        HeroesComponent,
        HeroDetailComponent,
        DashboardComponent
    ],
    bootstrap:    [ AppComponent ],
    providers: [ HeroService ]
})
export class AppModule { }
