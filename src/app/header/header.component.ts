import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  facebookImg = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/facebook-100x100.png?" +
    "alt=media&token=fdc47710-60b2-479b-b5df-fc07df17a3d0";
  facebookLinkURL = "https://www.facebook.com/" +
    "The-Law-Office-of-Ricardo-Maldonado-339650069560173/";
  stateBarBackgroundImg = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/state-bar-background.jpg?" +
    "alt=media&token=a212aae1-0d03-4b4b-bc98-81138ab46626";
  stateBarEmblemImg = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/state-bar-emblem.png?" +
    "alt=media&token=6a562efc-f9df-474b-9953-a9ebd78c3551";

  @Output() espanolPressedEmitter = new EventEmitter();
  inSpanish = false;

  contactEng = "Contact/\nDirections";
  dwiEng = "DWI/\nCriminal";
  findUsEng = "find us on ";
  homeEng = "Home";
  lawOfficeEng = "The Law Office of ";
  immigrationEng = "Immigration";
  spanishTextEng = "en Español";

  contactSpn = "Contáctanos/\nDirecciones";
  dwiSpn = "DWI/\nCriminal";
  findUsSpn = "encuéntranos en ";
  homeSpn = "Inicio";
  immigrationSpn = "Inmigración";
  lawOfficeSpn = "Oficina de Leyes de ";
  spanishTextSpn = "in English";

  width: number;
  isSpanish = false;
  showingMenu = false;

  contact: string;
  dwi: string;
  findUs: String;
  home: string;
  immigration: string;
  lawOffice: string;
  spanishText: string;

  constructor(private langService: LanguageService){}

  ngOnInit() {
    this.width = window.innerWidth;
    this.inSpanish = this.langService.getInSpanish();
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
    if (this.isSpanish) {
      this.contact = this.contactSpn;
      this.dwi = this.dwiSpn;
      this.findUs = this.findUsSpn;
      this.home = this.homeSpn;
      this.immigration = this.immigrationSpn;
      this.lawOffice = this.lawOfficeSpn;
      this.spanishText = this.spanishTextSpn;
    }
    else {
      this.contact = this.contactEng;
      this.dwi = this.dwiEng;
      this.findUs = this.findUsEng;
      this.home = this.homeEng;
      this.immigration = this.immigrationEng;
      this.lawOffice = this.lawOfficeEng;
      this.spanishText = this.spanishTextEng;
    }
  }

}
