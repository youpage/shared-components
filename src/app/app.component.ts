import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES }  from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'app-root',
    template: `
        <h1>{{title}}</h1>
        <div><router-outlet></router-outlet></div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
    title = 'Shared Components';
}
