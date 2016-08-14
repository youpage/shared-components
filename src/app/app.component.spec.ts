/* tslint:disable:no-unused-variable */

import {
  TestBed,
  ComponentFixture,
  async, inject
} from '@angular/core/testing';
import { Component } from '@angular/core';
import { AppComponent } from './app.component';

//beforeEachProviders(() => [AppComponent]);
@Component({
  template: '',
  directives: [AppComponent]
})
class TestComponent {
}

describe('App: SharedComponents', () => {
  it('should create the app',
      inject([AppComponent], (app: AppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'Shared Components\'',
      inject([AppComponent], (app: AppComponent) => {
    expect(app.title).toEqual('Shared Components');
  }));
});
