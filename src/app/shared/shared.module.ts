import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component';
import { AdminNavComponent } from './admin-nav/admin-nav.component';

@NgModule({
  imports: [CommonModule],
  declarations: [SharedComponent, AdminNavComponent],
  exports: [AdminNavComponent],
})
export class SharedModule {}
