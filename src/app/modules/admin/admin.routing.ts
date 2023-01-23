import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostCreateComponent } from './pages/post-create/post-create.component';
import { PostListComponent } from './pages/post-list/post-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',

        component: DashboardComponent,
      },
      {
        path: 'post/create',
        component: PostCreateComponent,
      },
      {
        path: 'post',
        component: PostListComponent,
      },
    ],
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
