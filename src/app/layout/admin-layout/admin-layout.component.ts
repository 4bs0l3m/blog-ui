import { Component, OnInit } from '@angular/core';
import { UserDTO } from '../../@core/dtos/userDTO';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent implements OnInit {
  constructor(private authService: AuthService) {}
  username: string = '';
  user?: UserDTO;
  ngOnInit() {
    this.authService.getUser().subscribe((res) => {
      this.user = res;
      this.username = res.email;
    });
  }
}
