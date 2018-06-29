import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from '../language.service';
import {HeaderComponent} from '../header/header.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-immigration',
  templateUrl: './immigration.component.html',
  styleUrls: ['./immigration.component.scss']
})
export class ImmigrationComponent implements OnInit {
  width: number;
  maldonadoImmigrationImg = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/maldonado-immigration.jpg?" +
    "alt=media&token=0c18a4d1-7d37-4fc9-82c9-fccbb9d28cef";
  texasDomeBckgrd = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/texas-dome-inside.jpg?" +
    "alt=media&token=9f87109e-3e4e-4ac1-a3ae-750459db4c01')";
  swooshImg = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/swishbackground.png?" +
    "alt=media&token=424051cb-9648-4afc-9e6f-8ebd3f3bcd35";

  inSpanish = false;

  immigration1Eng = 'I fully support immigrants in the United States. ';
  immigration2Eng = "America's diversity is a beacon to the rest of the world, that " +
    "people can work together. It is in the mixing of our ideas that we have succeeded. ";
  immigration3Eng = ' My law practice has shifted away from immigration and DACA ' +
    'applications. However, I am still here for legal advice concerning immigration and ' +
    'your legal status here in the United States.';
  immigration4Eng = 'Our staff are here to help all people who have come to the United States.';

  immigration1Spn = 'Apoyo totalmente a los inmigrantes en los Estados Unidos. ';
  immigration2Spn = 'La diversidad de América es un faro para el resto del mundo, ' +
    'que las personas pueden trabajar juntas. Es al mezclar nuestras ideas que ' +
    'hemos tenido éxito.';
  immigration3Spn = 'Mi práctica legal se ha alejado de las aplicaciones de ' +
    'inmigración y DACA. Sin embargo, todavía estoy aquí para consejar sobre prolemas legales ' +
    'de inmigración y su estado legal en los Estados Unidos.';
  immigration4Spn = "Yo y mi oficina está aquí para ayudar a todas las personas que han " +
    "venido a los Estados Unidos."

  titleEng = "Immigration";
  titleSpn = "Inmigración";

  immigration1: string;
  immigration2: string;
  immigration3: string;
  immigration4: string;
  title: string;


  @ViewChild(HeaderComponent)
  private headerComponent: HeaderComponent;

  constructor(private langService: LanguageService,
              private titleService: Title){}

  ngOnInit() {
    this.titleService.setTitle("Immigration Attorney Austin | Maldonado");
    this.width = window.innerWidth;
    this.inSpanish = this.langService.getInSpanish();
    this.initText();
  }

  espanolPressed () {
    this.langService.toggleLanguage();
    this.inSpanish = this.langService.getInSpanish();
    this.initText();
    this.headerComponent.update();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  }

  initText() {
    if (this.inSpanish) {
      this.immigration1 = this.immigration1Spn;
      this.immigration2 = this.immigration2Spn;
      this.immigration3 = this.immigration3Spn;
      this.immigration4 = this.immigration4Spn;
      this.title = this.titleSpn;
    }
    else {
      this.immigration1 = this.immigration1Eng;
      this.immigration2 = this.immigration2Eng;
      this.immigration3 = this.immigration3Eng;
      this.immigration4 = this.immigration4Eng;
      this.title = this.titleEng;
    }
  }

}
