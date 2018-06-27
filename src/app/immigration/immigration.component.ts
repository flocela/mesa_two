import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-immigration',
  templateUrl: './immigration.component.html',
  styleUrls: ['./immigration.component.scss']
})
export class ImmigrationComponent implements OnInit {
  texasDome = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/texas-dome-inside.jpg?" +
    "alt=media&token=9f87109e-3e4e-4ac1-a3ae-750459db4c01')";
  maldonadoImmigration = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/maldonado-immigration.jpg?" +
    "alt=media&token=fb2ab89c-4d15-40ee-ad5f-4c32fddcf5fa";
  width: number;
  titleEnglish = "Immigration";
  immigration1: string;
  immigration2: string;
  immigration3: string;
  immigration4: string;
  immigration5: string;

  title: string;

  constructor() { }

  ngOnInit() {
    this.width = window.innerWidth;
    this.immigration1 = 'I fully support immigrants in our nation. ';
    this.immigration2 = ' My law practice has shifted away from immigration and DACA ' +
      'applications. However, I am still here for advice with legal issues you ' +
      'may be having. This is especially true if you feel your problems are becoming ' +
      'complicated because of your legal status.';
    this.immigration3 = 'Our staff are here to help all people who have come to the United States.';
    this.title = this.titleEnglish;
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  }

}
