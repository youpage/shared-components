import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { appRoutes, appRoutingProviders } from './app.routes';

import { AppComponent }  from './app.component';
import { Demo }  from './demo';
import { SharedComponents } from './components/shared.components';

@NgModule({
    declarations: [
        AppComponent,
        Demo
    ],
    imports: [
        BrowserModule,
        //added to be able to use ngModel
        FormsModule,
        appRoutes,
        SharedComponents
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    ngDoBootstrap(appRef: ApplicationRef) {
        appRef.bootstrap(AppComponent);
    }
}
