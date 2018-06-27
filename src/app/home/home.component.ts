import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  width: number;
  texasDome = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/texas-dome-outside.jpg?" +
    "alt=media&token=ad4bd1cc-d97d-4611-85bf-e48c5417d250')";
  maldonadoIntroUrl = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/maldonado-intro.jpg?" +
    "alt=media&token=e86c63f4-5162-4c84-84d8-57c8d587eb8f";
  intro1: string;
  intro2a: string;
  intro2b: string;
  intro3: string;
  intro4: string;
  constructor() { }

  ngOnInit() {
    this.width = window.innerWidth;
    this.intro1 = 'Please remember, ';
    this.intro2a = ' you don\'t have to navigate the legal system by yourself. ' +
      'I have over 15 years of experience as an attorney in Austin and can guide you through your ' +
      'legal issues. '
    this.intro2b = 'I understand if you\'re worried about caring for your family or being separated ' +
      'from them. Securing your release or the release of your loved one is of upmost importance ' +
      'to me';
    this.intro3 = 'I received my Federal Court License in 2007. I have tried murder cases, sexual ' +
      'assault cases, DWI cases, assault family violence cases and injury to child cases. My experience' +
      'also extends to Divorce and CPS cases along with personal injury cases.';
    this.intro4 = 'Call us, my staff and I are here to help.';
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  }

}
