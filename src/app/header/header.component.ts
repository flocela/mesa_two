import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showingMenu = false;
  constructor() { }

  ngOnInit() {
  }

  showMenu() {
    this.showingMenu = !this.showingMenu;
  }

}
