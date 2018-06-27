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
    "maldonadoattorney-28622.appspot.com/o/facebook-100x100.png?" +
    "alt=media&token=fdc47710-60b2-479b-b5df-fc07df17a3d0";
  sanAntonioStURL = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/san-antonio-st.jpg?" +
    "alt=media&token=ffa27626-1417-42a4-b24f-478f646d434d')";
  sanAntonioGarageUrl = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/san-antonio-garage.jpg?" +
    "alt=media&token=8b24c584-3825-4e91-920b-5c37b4072430')";
  sanAntonioMapUrl = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/san-antonio-map.jpg?" +
    "alt=media&token=89ee8ebe-fb65-4c4d-95fc-66844f4305d3')";
  directionsEnglish = "The entrance to the parking garage is on the 9th street side of our building.\n" +
    "Please ask the receptionist for a reimbursement ticket.";
  googleClickUrl = "https://www.google.com/maps/place/The+Law+Office+of+Ricardo+Maldonado/@30.2719906,-97.7490377,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b50b8895f4bb:0x83596371341f9913!8m2!3d30.271986!4d-97.746849";

  googleMapsClickEnglish = "Go to google maps!";
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
  googleMapsClick: string;
  constructor() { }

  ngOnInit() {
    this.googleMapsClick = this.googleMapsClickEnglish;
    this.title = this.titleEnglish;
    this.telephone = this.telephoneEnglish;
    this.fax = this.faxEnglish;
    this.facebookfind = this.facebookEnglish;
    this.directions = this.directionsEnglish;
  }

}
