import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  facebookLinkURL = "https://www.facebook.com/" +
    "The-Law-Office-of-Ricardo-Maldonado-339650069560173/";
  facebookURL = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-14001.appspot.com/o/facebook-100x100.png?"+
    "alt=media&token=678e72a4-f3f4-47ae-ac80-d4594dec9050";
  sanAntonioStURL = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-14001.appspot.com/o/san-antonio-st.jpg?" +
    "alt=media&token=4febbc4d-0ea5-4ece-bc8a-443a7b9bb78e')";
  sanAntonioGarageUrl = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-14001.appspot.com/o/san-antonio-garage.jpg?" +
    "alt=media&token=29983ba2-dcca-48e0-b5b6-2f354d4dbf57')";

  directionsEnglish = "The entrance to the parking garage is on the 9th street side of our building.\n" +
    "Please ask the receptionist for a reimbursement ticket.";
  titleEnglish      = "Contact and Directions";
  street            = "812 San Antonio St. Suite 118";
  city              = "Austin, TX 78701";
  email             = "ricardo@maldonadoattorney.com";
  telephoneEnglish  = "Telephone: 512-850-9005";
  faxEnglish        = "Fax: 512-320-9923";
  facebookEnglish   = "find us on ";

  title: string;
  telephone: string;
  fax: string;
  facebookfind: string;
  directions: string;
  constructor() { }

  ngOnInit() {
    this.title = this.titleEnglish;
    this.telephone = this.telephoneEnglish;
    this.fax = this.faxEnglish;
    this.facebookfind = this.facebookEnglish;
    this.directions = this.directionsEnglish;
  }

}
