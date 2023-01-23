import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css'],
})
export class AdminNavComponent implements OnInit {
  constructor() {}
  @Input() navigationList: { path: string; title: string }[] = [];
  @Output() onNavigate = new EventEmitter();
  ngOnInit() {}
  clickNavigation(item: { path: string; title: string }) {
    this.onNavigate.emit(item);
  }
}
