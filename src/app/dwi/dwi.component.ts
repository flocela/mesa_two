import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-dwi',
  templateUrl: './dwi.component.html',
  styleUrls: ['./dwi.component.scss']
})
export class DWIComponent implements OnInit {
  width: number;
  dwi1: string;
  dwi2: string;
  dwi3: string;
  dwi4: string;
  dwi5: string;
  constructor() { }

  ngOnInit() {
    this.width = window.innerWidth;
    this.dwi1 = 'I have over 15 years of experience';
    this.dwi2 = 'as a criminal defense attorney. I practice in Austin where the majority of my cases are ' +
      'assault family violence cases. Almost all if not all of these cases are set for trial in ' +
      'order to reach a clear resolution of either a dismissal or a jury trial. ' +
      'Approximately 90% of these cases are closed by an agreement in which the State ' +
      'agrees to dismiss the case if the Defendant agrees to perform community service hours ' +
      'and complete a family violence course.';
    this.dwi3 = 'DWI cases are approached with a similar tactic and again most if not all are set ' +
      'for trail in order to reach an advantageous resolution. How a person looks on the arrest video, ' +
      'the breath test and the blood tests are of course the most important factors. However there are ' +
      'weaknesses behind the breath and blood tests because of false assumptions predicated on scientific ' +
      'theories. I understand these false assumptions and will make them clear as I fight for your case.';
    this.dwi4 = 'If you or a loved one has been arrested, our staff is here to get you home and reunited with ' +
      'your family.'
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.width = window.innerWidth;
  }

}
