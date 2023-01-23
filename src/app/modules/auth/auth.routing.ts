import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: SignInComponent,
  },
];

export const AuthRoutes = RouterModule.forChild(routes);
