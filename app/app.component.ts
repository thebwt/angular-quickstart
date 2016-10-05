import {Component} from "@angular/core";
/**
 * Created by thebwt on 10/5/16.
 */

@Component({
    selector: 'my-app',
    // moduleId: module.id,
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
            <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
        </nav>
        <router-outlet></router-outlet>
`,
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
    title = 'Tour of Heroes';
}