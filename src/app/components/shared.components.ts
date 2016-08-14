import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Button } from './button/button';
import { Calendar } from './calendar/calendar';
import { Growl } from './growl/growl';
import { Menu } from './menus/menu';
import { Messages } from './messages/messages';
import { Tooltip } from './tooltip/tooltip';
import { DomHandler } from './dom/domhandler';

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ Button, Calendar, Growl, Menu, Messages, Tooltip ],
  exports:      [ Button, Calendar, Growl, Menu, Messages, Tooltip ],
  providers:    [ DomHandler ],
})

export class SharedComponents{
  constructor() { }
}