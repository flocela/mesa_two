import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  sanAntonioStURL = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-14001.appspot.com/o/san-antonio-st.jpg?" +
    "alt=media&token=4febbc4d-0ea5-4ece-bc8a-443a7b9bb78e')";

  titleEnglish    = "Contact and Directions";
  streetEnglish   = "812 San Antonio St. Suite 118";
  cityEnglish     = "Austin, TX 78701";
  email           = "ricardo@maldonadoattorney.com";
  telephone       = "512-850-9005";
  fax             = "512-320-9923";
  facebookEnglish = "find us on ";

  constructor() { }

  ngOnInit() {
  }

}
