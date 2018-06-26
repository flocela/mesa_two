import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showingMenu = false;
  width: number;
  facebookLinkURL = "https://www.facebook.com/" +
    "The-Law-Office-of-Ricardo-Maldonado-339650069560173/";
  facebookURL = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-14001.appspot.com/o/facebook-100x100.png?"+
    "alt=media&token=678e72a4-f3f4-47ae-ac80-d4594dec9050";
  stateBarBackgroundURL = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-14001.appspot.com/o/state-bar-background.jpg?"+
    "alt=media&token=b55b2df8-97b5-42c4-b6d1-82deac5b63d1";
  stateBarEmblemURL = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-14001.appspot.com/o/state-bar-emblem.png?" +
    "alt=media&token=caeaa340-0a06-4c57-8538-bc3a0e58c3bb";
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
