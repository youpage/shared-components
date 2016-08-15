import {Component, ElementRef, AfterViewInit, OnDestroy, Input, Renderer, EventEmitter} from '@angular/core';
import {DomHandler} from '../dom/domhandler';
import {MenuItem} from '../common';
import {Submenu} from './submenu';
import {Router} from '@angular/router';

@Component({
    selector: 'shcContextMenu',
    template: `
        <div [ngClass]="'ui-contextmenu ui-menu ui-widget ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-dynamic ui-shadow'" 
            [class]="styleClass" [ngStyle]="style" [style.display]="visible ? 'block' : 'none'" [style.left.px]="left" [style.top.px]="top">
            <shcSubmenu [item]="model" root="root"></shcSubmenu>
        </div>
    `,
    providers: [DomHandler],
    directives: [Submenu]
})
export class ContextMenu implements AfterViewInit, OnDestroy {

    @Input() model: MenuItem[];

    @Input() global: boolean;

    @Input() style: any;

    @Input() styleClass: string;

    visible: boolean;

    left: number;

    top: number;

    container: any;

    documentClickListener: any;

    documentRightClickListener: any;

    constructor(protected el: ElementRef, protected domHandler: DomHandler, protected renderer: Renderer) { }

    ngAfterViewInit() {
        this.container = this.el.nativeElement.children[0];

        this.documentClickListener = this.renderer.listenGlobal('body', 'click', () => {
            this.hide();
        });

        if (this.global) {
            this.documentRightClickListener = this.renderer.listenGlobal('body', 'contextmenu', (event) => {
                this.show(event);
                event.preventDefault();
            });
        }
    }

    toggle(event) {
        if (this.container.offsetParent)
            this.hide();
        else
            this.show(event);
    }

    show(event) {
        this.left = event.pageX;
        this.top = event.pageY;
        this.visible = true;
        this.domHandler.fadeIn(this.container, 250);
        event.preventDefault();
    }

    hide() {
        this.visible = false;
    }

    unsubscribe(item: any) {
        if (item.eventEmitter) {
            item.eventEmitter.unsubscribe();
        }

        if (item.items) {
            for (let childItem of item.items) {
                this.unsubscribe(childItem);
            }
        }
    }

    ngOnDestroy() {
        this.documentClickListener();

        if (this.global) {
            this.documentRightClickListener();
        }

        if (this.model) {
            for (let item of this.model) {
                this.unsubscribe(item);
            }
        }
    }

}