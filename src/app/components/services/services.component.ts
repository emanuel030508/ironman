import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-services",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-grafito">
      <div class="container-custom mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span
            class="text-naranja-soldadura font-semibold uppercase tracking-wider text-sm"
          >
            Nuestros Servicios
          </span>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-plata-metal mt-3 mb-4"
          >
            Soluciones en <span class="text-naranja-soldadura">Metal</span>
          </h2>
          <p class="text-plata-metal/70 max-w-2xl mx-auto text-lg">
            Ofrecemos una amplia gama de servicios de soldadura y fabricación
            metálica con los más altos estándares de calidad.
          </p>
        </div>

        <!-- Services Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            *ngFor="let service of services; let i = index"
            class="metallic-card rounded-xl p-6 group hover:transform hover:scale-105 
                      transition-all duration-300 cursor-pointer"
            [class.border-naranja-soldadura]="i === 0"
            [style.animation-delay]="i * 0.1 + 's'"
          >
            <!-- Icon -->
            <div
              class="w-16 h-16 bg-acero-medio rounded-xl flex items-center justify-center mb-5 
                        group-hover:bg-naranja-soldadura transition-colors duration-300"
            >
              <svg
                class="w-8 h-8 text-oro-metal group-hover:text-white transition-colors"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  [attr.d]="service.icon"
                />
              </svg>
            </div>

            <!-- Content -->
            <h3
              class="text-xl font-bold text-plata-metal mb-3 group-hover:text-naranja-soldadura 
                       transition-colors"
            >
              {{ service.title }}
            </h3>
            <p class="text-plata-metal/70 mb-4">
              {{ service.description }}
            </p>

            <!-- Features -->
            <ul class="space-y-2">
              <li
                *ngFor="let feature of service.features"
                class="flex items-center text-sm text-plata-metal/60"
              >
                <svg
                  class="w-4 h-4 text-naranja-soldadura mr-2 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class ServicesComponent {
  services = [
    {
      title: "Puertas Metálicas",
      description:
        "Fabricación e instalación de puertas metálicas de alta seguridad y diseño moderno.",
      icon: "M4 6h16M4 12h16M4 18h16",
      features: [
        "Puertas de seguridad reforzadas",
        "Diseños personalizados",
        "Cerraduras de alta seguridad",
        "Acabados en pintura electrostática",
      ],
    },
    {
      title: "Ventanas con Cristal",
      description:
        "Ventanas metálicas con cristal templado, combinando estética y funcionalidad.",
      icon: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z",
      features: [
        "Cristal templado de seguridad",
        "Marcos de aluminio o acero",
        "Doble vidrio opcional",
        "Mosquiteros integrados",
      ],
    },
    {
      title: "Cercas y Rejas",
      description:
        "Cercas metálicas decorativas y rejas de seguridad para su hogar o negocio.",
      icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
      features: [
        "Diseños ornamentales",
        "Rejas de seguridad anti-intrusión",
        "Portones eléctricos",
        "Pintura anticorrosiva",
      ],
    },
    {
      title: "Soldadura de Vehículos",
      description:
        "Reparación y soldadura especializada para bicitaxis, motorinas y más.",
      icon: "M13 10V3L4 14h7v7l9-11h-7z",
      features: [
        "Reparación de chasis",
        "Soldadura de estructuras",
        "Modificaciones personalizadas",
        "Pintura y acabado",
      ],
    },
    {
      title: "Reparaciones Generales",
      description:
        "Servicios de soldadura y reparación para todo tipo de estructuras metálicas.",
      icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
      features: [
        "Soldadura MIG y TIG",
        "Corte de metal",
        "Doblado de láminas",
        "Trabajos en acero inoxidable",
      ],
    },
    {
      title: "Estructuras Metálicas",
      description:
        "Diseño y construcción de estructuras metálicas para construcción e industria.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      features: [
        "Techos y marquesinas",
        "Escaleras metálicas",
        "Mezanines",
        "Soportes industriales",
      ],
    },
  ];
}
