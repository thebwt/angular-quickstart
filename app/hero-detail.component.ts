/**
 * Created by thebwt on 10/5/16.
 */
import {Component, OnInit} from '@angular/core';
import { Hero } from './hero';
import {HeroService} from "./hero.service";
import {ActivatedRoute, Params} from "@angular/router";
import { Location } from '@angular/common'

@Component({
    selector: 'my-hero-detail',
    moduleId: module.id,
    templateUrl: 'hero-detail.component.html',
    styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
           let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero=hero);
        });
    }
    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    goBack(): void {
        this.location.back();
    }

    save(): void {
        this.heroService.update(this.hero)
            .then(() => this.goBack());
    }

    hero: Hero;
}
