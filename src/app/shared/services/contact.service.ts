import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { ContactForm, ContactInfo } from "../models/contact.model";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  private contactInfo: ContactInfo = {
    phone: "+53 5 9241174",
    email: "contacto@ironman-soldadura.com",
    address:
      "Callé 4sin# entre calle circulación y calle cendero, reparto la victoria municipio las tunas",
    hours: "Lunes - Sábado: 8:00 AM - 6:00 PM",
    whatsapp: "+5359241174",
  };

  constructor() {}

  getContactInfo(): ContactInfo {
    return this.contactInfo;
  }

  submitContactForm(formData: ContactForm): Observable<boolean> {
    // Simulación de envío de formulario
    console.log("Formulario enviado:", formData);
    return of(true);
  }

  getWhatsAppLink(message?: string): string {
    const baseUrl = "https://wa.me/";
    const phone = this.contactInfo.whatsapp.replace(/\D/g, "");
    const encodedMessage = message
      ? `?text=${encodeURIComponent(message)}`
      : "";
    return `${baseUrl}${phone}${encodedMessage}`;
  }
}
