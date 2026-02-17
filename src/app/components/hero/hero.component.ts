import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ContactService } from "../../shared/services/contact.service";

@Component({
  selector: "app-hero",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section
      class="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <!-- Background with overlay -->
      <div class="absolute inset-0 metallic-gradient"></div>
      <div
        class="absolute inset-0 bg-gradient-to-b from-acero-oscuro/80 via-transparent to-acero-oscuro"
      ></div>

      <!-- Spark effects -->
      <div class="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          class="spark"
          style="top: 20%; left: 10%; animation-delay: 0s;"
        ></div>
        <div
          class="spark"
          style="top: 40%; left: 80%; animation-delay: 0.5s;"
        ></div>
        <div
          class="spark"
          style="top: 60%; left: 30%; animation-delay: 1s;"
        ></div>
        <div
          class="spark"
          style="top: 30%; left: 60%; animation-delay: 1.5s;"
        ></div>
        <div
          class="spark"
          style="top: 70%; left: 70%; animation-delay: 0.3s;"
        ></div>
      </div>

      <!-- Content -->
      <div
        class="relative z-10 container-custom mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <div class="animate-slide-up">
          <!-- Icon -->
          <div class="mb-8 flex justify-center">
            <div
              class="w-24 h-24 bg-naranja-soldadura rounded-2xl flex items-center justify-center 
                        shadow-lg shadow-naranja-soldadura/30 animate-pulse"
            >
              <svg
                class="w-14 h-14 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
          </div>

          <!-- Title -->
          <h1
            class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            <span class="text-plata-metal">Ironman</span>
            <span class="block text-naranja-soldadura mt-2"
              >Taller de Soldadura</span
            >
          </h1>

          <!-- Subtitle -->
          <p
            class="text-lg sm:text-xl md:text-2xl text-plata-metal/80 max-w-3xl mx-auto mb-8"
          >
            Especialistas en puertas y ventanas metálicas, cercas de seguridad y
            soldadura de vehículos. Calidad y durabilidad garantizada.
          </p>

          <!-- CTA Buttons -->
          <div
            class="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a href="#contacto" class="btn-primary text-lg px-8 py-4">
              Contáctanos
            </a>
            <a
              href="#servicios"
              class="px-8 py-4 border-2 border-naranja-soldadura text-naranja-soldadura 
                      rounded-lg font-semibold hover:bg-naranja-soldadura hover:text-white 
                      transition-all duration-300"
            >
              Ver Servicios
            </a>
          </div>

          <!-- Features -->
          <div
            class="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div class="flex flex-col items-center">
              <div
                class="w-12 h-12 bg-acero-medio rounded-lg flex items-center justify-center mb-3"
              >
                <svg
                  class="w-6 h-6 text-oro-metal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span class="text-plata-metal font-medium"
                >Calidad Garantizada</span
              >
            </div>
            <div class="flex flex-col items-center">
              <div
                class="w-12 h-12 bg-acero-medio rounded-lg flex items-center justify-center mb-3"
              >
                <svg
                  class="w-6 h-6 text-oro-metal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <span class="text-plata-metal font-medium">Entrega a Tiempo</span>
            </div>
            <div class="flex flex-col items-center">
              <div
                class="w-12 h-12 bg-acero-medio rounded-lg flex items-center justify-center mb-3"
              >
                <svg
                  class="w-6 h-6 text-oro-metal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <span class="text-plata-metal font-medium"
                >Atención Personalizada</span
              >
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div
        class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
      >
        <a
          href="#servicios"
          class="text-plata-metal/50 hover:text-naranja-soldadura transition-colors"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </div>
    </section>
  `,
  styles: [],
})
export class HeroComponent {
  constructor(private contactService: ContactService) {}
}
