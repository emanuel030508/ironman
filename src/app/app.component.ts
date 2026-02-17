import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { HeroComponent } from "./components/hero/hero.component";
import { ServicesComponent } from "./components/services/services.component";
import { GalleryComponent } from "./components/gallery/gallery.component";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { FooterComponent } from "./components/footer/footer.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    NavbarComponent,
    HeroComponent,
    ServicesComponent,
    GalleryComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
  ],
  template: `
    <app-navbar></app-navbar>
    <main>
      <app-hero id="inicio"></app-hero>
      <app-services id="servicios"></app-services>
      <app-gallery id="galeria"></app-gallery>
      <app-about id="sobre-nosotros"></app-about>
      <app-contact id="contacto"></app-contact>
    </main>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class AppComponent {
  title = "Ironman - Taller de Soldadura";
}
