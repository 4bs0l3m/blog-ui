import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutes } from './admin.routing';
import { AuthService } from 'src/app/services/auth/auth.service';

@NgModule({
  imports: [CommonModule, RouterModule, SharedModule, AdminRoutes],
  declarations: [AdminComponent],
  providers: [AuthService],
})
export class AdminModule {}
