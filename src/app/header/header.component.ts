import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {LanguageService} from '../language.service';

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
    "maldonadoattorney-28622.appspot.com/o/facebook-100x100.png?" +
    "alt=media&token=fdc47710-60b2-479b-b5df-fc07df17a3d0";
  stateBarBackgroundURL = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/state-bar-background.jpg?" +
    "alt=media&token=a212aae1-0d03-4b4b-bc98-81138ab46626";
  stateBarEmblemURL = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/state-bar-emblem.png?" +
    "alt=media&token=6a562efc-f9df-474b-9953-a9ebd78c3551";

  @Output() espanolPressedEmitter = new EventEmitter();
  isSpanish = false;
  spanishText: string;
  spanishTextEng = "en Español";
  spanishTextSpn = "in English";

  constructor(private langService: LanguageService){}

  ngOnInit() {
    this.width = window.innerWidth;
    this.update();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  }

  showMenu() {
    this.showingMenu = !this.showingMenu;
  }

  espanolPressed() {
    this.espanolPressedEmitter.emit();
  }

  update () {
    this.isSpanish = this.langService.getInSpanish();
    if (this.isSpanish)
      this.spanishText = this.spanishTextSpn;
    else
      this.spanishText = this.spanishTextEng;
  }

}
