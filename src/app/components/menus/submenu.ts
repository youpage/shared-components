import {Component, Input, EventEmitter} from '@angular/core';
import {DomHandler} from '../dom/domhandler';
import {MenuItem} from '../common';
import {Router} from '@angular/router';

@Component({
    selector: 'shcSubmenu',
    template: `
        <ul [ngClass]="{'ui-helper-reset':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child ui-shadow':!root}" class="ui-menu-list"
            (click)="listClick($event)">
            <template ngFor let-child [ngForOf]="(root ? item : item.items)">
                <li #item [ngClass]="{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-menuitem-active':item==activeItem}"
                    (mouseenter)="onItemMouseEnter($event, item)" (mouseleave)="onItemMouseLeave($event, item)">
                    <a #link [href]="child.url||'#'" class="ui-menuitem-link ui-corner-all" [ngClass]="{'ui-state-hover':link==activeLink}" (click)="itemClick($event, child)">
                        <span class="ui-submenu-icon fa fa-fw fa-caret-right" *ngIf="child.items"></span>
                        <span class="ui-menuitem-icon fa fa-fw" *ngIf="child.icon" [ngClass]="child.icon"></span>
                        <span class="ui-menuitem-text">{{child.label}}</span>
                    </a>
                    <shcSubmenu class="ui-submenu" [item]="child" *ngIf="child.items"></shcSubmenu>
                </li>
            </template>
        </ul>
    `,
    directives: [Submenu],
    providers: [DomHandler]
})
export class Submenu {

    @Input() item: MenuItem;

    @Input() root: boolean;

    constructor(protected domHandler: DomHandler, protected router: Router) { }

    activeItem: any;

    activeLink: any;

    onItemMouseEnter(event, item) {
        this.activeItem = item;
        this.activeLink = item.children[0];
        let nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            let sublist = nextElement.children[0];
            sublist.style.zIndex = ++DomHandler.zindex;

            sublist.style.top = '0px';
            sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
        }
    }

    onItemMouseLeave(event, link) {
        this.activeItem = null;
        this.activeLink = null;
    }

    itemClick(event, item: MenuItem) {
        if (!item.url || item.routerLink) {
            event.preventDefault();
        }

        if (item.command) {
            if (!item.eventEmitter) {
                item.eventEmitter = new EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }

            item.eventEmitter.emit(event);
        }

        if (item.routerLink) {
            this.router.navigate(item.routerLink);
        }
    }

    listClick(event) {
        this.activeItem = null;
        this.activeLink = null;
    }
}