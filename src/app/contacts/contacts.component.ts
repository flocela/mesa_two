import {Component, OnInit, ViewChild} from '@angular/core';
import {LanguageService} from '../language.service';
import {HeaderComponent} from '../header/header.component';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  facebookImg = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/facebook-100x100.png?" +
    "alt=media&token=fdc47710-60b2-479b-b5df-fc07df17a3d0";
  facebookLinkURL = "https://www.facebook.com/" +
    "The-Law-Office-of-Ricardo-Maldonado-339650069560173/";
  googleClickUrl = "https://www.google.com/maps/place/The+Law+Office+of+Ricardo+Maldonado/@30.2719906,-97.7490377,17z/data=!3m1!4b1!4m5!3m4!1s0x8644b50b8895f4bb:0x83596371341f9913!8m2!3d30.271986!4d-97.746849";
  sanAntonioGarageBckgrd = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/san-antonio-garage.jpg?" +
    "alt=media&token=8b24c584-3825-4e91-920b-5c37b4072430')";
  sanAntonioMapBckgrd = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/san-antonio-map.jpg?" +
    "alt=media&token=89ee8ebe-fb65-4c4d-95fc-66844f4305d3')";
  sanAntonioStImg = "url('https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/san-antonio-st.jpg?" +
    "alt=media&token=ffa27626-1417-42a4-b24f-478f646d434d')";
  swooshImg = "https://firebasestorage.googleapis.com/v0/b/" +
    "maldonadoattorney-28622.appspot.com/o/swishbackground.png?" +
    "alt=media&token=424051cb-9648-4afc-9e6f-8ebd3f3bcd35";

  @ViewChild(HeaderComponent)
  private headerComponent: HeaderComponent;
  inSpanish = false;

  directions1Eng = "The entrance to the parking garage is on the 9th street side of our building."
  directions2Eng = "Please ask the receptionist for a reimbursement ticket.";
  directions1Spn = "La entrada al estacionamiento está al lado del edificio en la calle Novena.";
  directions2Spn = "Por favor, pida a la recepcionista para reembolso.";
  facebookEng   = "Find us on ";
  facebookSpn   = "Encuéntranos en ";
  googleMapsClickEng = "Go to google maps!";
  googleMapsClickSpn = "Ir a google maps!";
  telephoneEng  = "Telephone: 512-850-9005";
  telephoneSpn  = "Teléfono: 512-850-9005";
  titleEng = "Contact and Directions";
  titleSpn = "Contáctanos y Direcciones";

  city             = "Austin, TX 78701";
  directions1:     string;
  directions2:     string;
  email            = "ricardo@maldonadoattorney.com";
  facebookfind:    string;
  fax              = "Fax: 512-320-9923";
  googleMapsClick: string;
  street           = "812 San Antonio St. Suite 118";
  telephone:       string;
  title:           string;

  constructor (private langService: LanguageService,
               private titleService: Title) {
    }

  ngOnInit() {
    this.inSpanish = this.langService.getInSpanish();
    this.initText();
    this.titleService.setTitle("Lawyer Attorney Austin | Maldonado");
  }

  espanolPressed () {
    this.langService.toggleLanguage();
    this.inSpanish = this.langService.getInSpanish();
    this.initText();
    this.headerComponent.update();
  }


  initText() {
    if (this.inSpanish) {
      this.directions1 = this.directions1Spn;
      this.directions2 = this.directions2Spn;
      this.facebookfind = this.facebookSpn;
      this.googleMapsClick = this.googleMapsClickSpn;
      this.telephone = this.telephoneSpn;
      this.title = this.titleSpn;
    }
    else {
      this.directions1 = this.directions1Eng;
      this.directions2 = this.directions2Eng;
      this.facebookfind = this.facebookEng;
      this.googleMapsClick = this.googleMapsClickEng;
      this.telephone = this.telephoneEng;
      this.title = this.titleEng;
    }
  }

}
