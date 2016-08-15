import { Component, OnInit } from '@angular/core';
import { Message, MenuItem } from './components/common';

@Component({
    moduleId: module.id,
    selector: 'demo',
    templateUrl: 'demo.html'
})
export class Demo implements OnInit {
    constructor() { }

    //Calendar
    date: string;

    //Messages
    msgs: Message[] = [];
    closable: boolean;

    showInfo() {
        this.msgs = [];
        this.closable = true;
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showWarn() {
        this.msgs = [];
        this.closable = true;
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showError() {
        this.msgs = [];
        this.closable = true;
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showMultiple() {
        this.msgs = [];
        this.closable = false;
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    }

    clear() {
        this.msgs = [];
    }

    //Growl
    //sticky: boolean;
    position: string = 'bottom-right';
    growl: Message[] = [];

    showGrInfo() {
        this.growl = [];
        //this.sticky = false;
        this.growl.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    }

    showGrWarn() {
        this.growl = [];
        //this.sticky = true;
        this.growl.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    }

    showGrError() {
        this.growl = [];
        //this.sticky = true;
        this.growl.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    }

    showGrMultiple() {
        this.growl = [];
        //this.sticky = true;
        this.growl.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.growl.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.growl.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    }

    clearGr() {
        this.growl = [];
    }

    //Menu
    private items: MenuItem[];    
    ngOnInit() {
        this.items = [
            {
                label: 'File',
                items: [
                    { label: 'New', icon: 'fa-plus' },
                    { label: 'Open', icon: 'fa-download' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'fa-refresh' },
                    { label: 'Redo', icon: 'fa-repeat' }
                ]
            }
        ];
    }

}