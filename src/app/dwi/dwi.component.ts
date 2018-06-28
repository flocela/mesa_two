import {Component, HostListener, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from '../language.service';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-dwi',
  templateUrl: './dwi.component.html',
  styleUrls: ['./dwi.component.scss']
})
export class DWIComponent implements OnInit {
  width: number;
  austinNightUrl = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/austin_night.jpg?" +
    "alt=media&token=65546537-d8b9-4c38-b1cd-8918bfe51378')";
  maldonadoDWIUrl = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/maldonado_dwi.jpg?" +
    "alt=media&token=3d146323-1a2b-4e18-a007-f8005e20d723";

  @ViewChild(HeaderComponent)
  private headerComponent: HeaderComponent;
  inSpanish = false;

  titleEnglish = "DWI and Criminal Defense";
  titleSpanish = "DWI y Defensa Criminal";

  dwi1Eng = 'I have over 15 years of experience ';
  dwi2Eng = 'as a criminal defense attorney. I practice in Austin where the majority of my cases are ' +
    'assault family violence cases. Almost all if not all of these cases are set for trial in ' +
    'order to reach a clear resolution of either a dismissal or a jury trial. ' +
    'Approximately 90% of these cases are closed by an agreement in which the State ' +
    'agrees to dismiss the case if the Defendant agrees to perform community service hours ' +
    'and complete a family violence course.';
  dwi3Eng = 'DWI cases are approached with a similar tactic and again most if not all are set ' +
    'for trail in order to reach an advantageous resolution. How a person looks on the arrest video, ' +
    'the breath test and the blood tests are of course the most important factors. However there are ' +
    'weaknesses behind the breath and blood tests because of false assumptions predicated on scientific ' +
    'theories. I understand these false assumptions and will make them clear as I fight for your case.';
  dwi4Eng = 'If you or a loved one has been arrested, call us so that your case is properly presented ' +
    'to the judge. ';

  dwi1Spn = 'Tengo experiencia de más de 15 años ';
  dwi2Spn = 'como abogado defensor criminalista. Practíco en la Ciudad de Austin donde la mayoría de' +
    ' mis casos son querellas de asalto y violencia familiar. Casi todos, si no todos, son ' +
    'preparados para llevarse a juicio en orden de alcanzar una clara resolución de despido o de ' +
    'juicio ante un jurado. Aproximadamente 90% de estos casos son cerrados por un convenio en el ' +
    'cual el Estado accede a despedir el caso si el Defendido está de acuerdo a realizar horas de ' +
    'servicio comunitario y completar un curso de violencia familiar.';
  dwi3Spn = 'Los casos de DWI (manejar intoxicado) son enfocados con táctica similar y así pues la ' +
    'mayoría, si no todos, son preparados para llevarse a juicio en orden de alcanzar una resolución ' +
    'ventajosa. La proyección de una persona en el video de arresto, la prueba de aliento y la ' +
    'prueba de sangre son por supuesto los factores más importantes. Sin embargo, hay debilidades ' +
    'bajo las pruebas de aliento y sangre debido a falsas suposiciones aseveradas en teorías ' +
    'scientíficas. Entiendo éstas falsas suposiciones y las esclareceré durante mi disputa en su caso.';
  dwi4Spn = 'Si usted o un ser querido ha sido arrestado, llámenos para que su caso sea presentado ' +
    'correctamente al juez.'

  dwi1: string;
  dwi2: string;
  dwi3: string;
  dwi4: string;
  title: string;

  constructor(private langService: LanguageService) {
    this.inSpanish = this.langService.getInSpanish();}

  ngOnInit() {
    this.width = window.innerWidth;
    this.title = this.titleEnglish;
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
      this.dwi1 = this.dwi1Spn;
      this.dwi2 = this.dwi2Spn;
      this.dwi3 = this.dwi3Spn;
      this.dwi4 = this.dwi4Spn;
      this.title = this.titleSpanish
    }
    else {
      this.dwi1 = this.dwi1Eng;
      this.dwi2 = this.dwi2Eng;
      this.dwi3 = this.dwi3Eng;
      this.dwi4 = this.dwi4Eng;
      this.title = this.titleEnglish;
    }
  }
}
