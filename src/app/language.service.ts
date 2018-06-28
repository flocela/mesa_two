import { Injectable } from '@angular/core';

@Injectable()
export class LanguageService {
  inSpanish = false;

  constructor() { }

  getInSpanish() :boolean {
    return this.inSpanish;
  }

  toggleLanguage() {
    this.inSpanish = !this.inSpanish;
  }
}
