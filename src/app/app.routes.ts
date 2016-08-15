import { Routes, RouterModule } from '@angular/router';
import { Demo } from './demo';

const routes: Routes = [
  { path: '', terminal:true, component: Demo}
];

export const appRoutingProviders: any[] = [];

export const appRoutes = RouterModule.forRoot(routes);