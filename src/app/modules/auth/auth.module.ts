import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutes } from './auth.routing';

@NgModule({
  imports: [CommonModule, FormsModule, AuthRoutes],
  declarations: [AuthComponent, SignInComponent],
})
export class AuthModule {}
