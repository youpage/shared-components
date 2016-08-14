import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', terminal:true, component: AppComponent}
];

export const appRoutingProviders: any[] = [];

export const appRoutes = RouterModule.forRoot(routes);