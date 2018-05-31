import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showingMenu = false;
  width: number;

  ngOnInit() {
    this.width = window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  }

  showMenu() {
    this.showingMenu = !this.showingMenu;
  }

}
