import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-immigration',
  templateUrl: './immigration.component.html',
  styleUrls: ['./immigration.component.scss']
})
export class ImmigrationComponent implements OnInit {

  width: number;
  immigration1: string;
  immigration2: string;
  immigration3: string;
  immigration4: string;
  immigration5: string;
  constructor() { }

  ngOnInit() {
    this.width = window.innerWidth;
    this.immigration1 = 'I fully support immigrants in our nation. ';
    this.immigration2 = ' My law practice has shifted away from immigration and DACA ' +
      'applications. However, I am still here for advice with legal issues you ' +
      'may be having. This is especially true if you feel your problems are becoming ' +
      'complicated because of your legal status.'
    this.immigration3 = 'Our staff are here to help all people who have come this great nation.'
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  }

}
