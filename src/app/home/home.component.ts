import {Component, HostListener, Input, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import {ActivatedRoute} from '@angular/router';
import {LanguageService} from '../language.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  width: number;
  maldonadoIntroImg = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/maldonado-intro.jpg?" +
    "alt=media&token=e86c63f4-5162-4c84-84d8-57c8d587eb8f";
  texasDomeBckgrd = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/texas-dome-outside.jpg?" +
    "alt=media&token=ad4bd1cc-d97d-4611-85bf-e48c5417d250')";

  inSpanish = false;

  intro1Eng = 'Please remember, ';
  intro2Eng = ' you don\'t have to navigate the legal system by yourself. ' +
    'I have over 15 years of experience as an attorney in Austin and can guide you through your ' +
    'legal issues. ';
  intro3Eng = 'I received my Federal Court License in 2007. I have tried murder cases, sexual ' +
              'assault cases, DWI cases, assault family violence cases, injury to child cases, and personal injury cases. ' +
              'My experience also extends to Divorce and CPS cases.';
  intro4Eng = 'I understand if you\'re worried about caring for your family or being separated ' +
    'from them. Securing your release or the release of your loved one is of upmost importance ' +
    'to me';
  intro5Eng ='Call us, my staff and I are here to help.';

  intro1Spn = 'Por favor recuerde, ';
  intro2Spn = 'no tiene que navegar solo por el sistema legal.' +
              'Tengo más de 15 años de experiencia como abogado ' +
              'en Austin y puedo guiarlo a través de sus asuntos legales.';
  intro3Spn = 'He sido licenciado en la Corte Federal desde el 2007. He ' +
    'litigado casos de homicidio, casos de acoso sexual, DWI (manejar intoxicado), ' +
    'casos de asalto, casos de violencia interfamiliar, casos de lesiones a menores, ' +
    'casos de lesiones personales. Tambien tengo experiencia en Divorcios y CPS ' +
    '(Servicio de Proteccion a Menores).';
  intro4Spn = "Entiendo si está preocupado por su familia o su separación. " +
    "Asegurar su liberación o la liberación de alguien cercano a usted es lo más importante.";
  intro5Spn = "Llámenos, mi oficina y yo estamos aquí para ayudar.";

  intro1: string;
  intro2: string;
  intro3: string;
  intro4: string;
  intro5: string;

  @ViewChild(HeaderComponent)
  private headerComponent: HeaderComponent;

  constructor(private langService: LanguageService){}

  ngOnInit() {
    this.width = window.innerWidth;
    this.inSpanish = this.langService.getInSpanish();
    this.initText();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  }

  espanolPressed () {
    this.langService.toggleLanguage();
    this.inSpanish = this.langService.getInSpanish();
    this.initText();
    this.headerComponent.update();
  }

  initText() {
    if (this.inSpanish) {
      this.intro1 = this.intro1Spn;
      this.intro2 = this.intro2Spn;
      this.intro3 = this.intro3Spn;
      this.intro4 = this.intro4Spn;
      this.intro5 = this.intro5Spn;
    }
    else {
      this.intro1 = this.intro1Eng;
      this.intro2 = this.intro2Eng;
      this.intro3 = this.intro3Eng;
      this.intro4 = this.intro4Eng;
      this.intro5 = this.intro5Eng;
    }
  }

}
