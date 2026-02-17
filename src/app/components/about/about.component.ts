import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="section-padding bg-grafito">
      <div class="container-custom mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Content -->
          <div>
            <span
              class="text-naranja-soldadura font-semibold uppercase tracking-wider text-sm"
            >
              Sobre Nosotros
            </span>
            <h2
              class="text-3xl sm:text-4xl md:text-5xl font-bold text-plata-metal mt-3 mb-6"
            >
              Más de <span class="text-naranja-soldadura">15 Años</span> de
              Experiencia
            </h2>
            <p class="text-plata-metal/80 text-lg mb-6 leading-relaxed">
              En Ironman Taller de Soldadura nos dedicamos a transformar el
              metal en soluciones duraderas y estéticas. Desde nuestros inicios,
              nos hemos comprometido con la excelencia y la satisfacción de
              nuestros clientes.
            </p>
            <p class="text-plata-metal/80 text-lg mb-8 leading-relaxed">
              Nuestro equipo de soldadores certificados utiliza las últimas
              técnicas y equipos de soldadura para garantizar trabajos de la más
              alta calidad en cada proyecto.
            </p>

            <!-- Values -->
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div class="text-center sm:text-left">
                <div
                  class="w-12 h-12 bg-naranja-soldadura/20 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0"
                >
                  <svg
                    class="w-6 h-6 text-naranja-soldadura"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    />
                  </svg>
                </div>
                <h4 class="text-plata-metal font-bold mb-1">Calidad</h4>
                <p class="text-plata-metal/60 text-sm">
                  Materiales premium y acabados impecables
                </p>
              </div>
              <div class="text-center sm:text-left">
                <div
                  class="w-12 h-12 bg-naranja-soldadura/20 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0"
                >
                  <svg
                    class="w-6 h-6 text-naranja-soldadura"
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
                <h4 class="text-plata-metal font-bold mb-1">Experiencia</h4>
                <p class="text-plata-metal/60 text-sm">
                  15+ años en el sector de la soldadura
                </p>
              </div>
              <div class="text-center sm:text-left">
                <div
                  class="w-12 h-12 bg-naranja-soldadura/20 rounded-lg flex items-center justify-center mb-3 mx-auto sm:mx-0"
                >
                  <svg
                    class="w-6 h-6 text-naranja-soldadura"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                    />
                  </svg>
                </div>
                <h4 class="text-plata-metal font-bold mb-1">Garantía</h4>
                <p class="text-plata-metal/60 text-sm">
                  Todos nuestros trabajos garantizados
                </p>
              </div>
            </div>
          </div>

          <!-- Image -->
          <div class="relative">
            <div
              class="relative rounded-2xl overflow-hidden aspect-[4/3] bg-acero-medio"
            >
              <img
                src="assets/images/taller.jpg"
                alt="Taller Ironman"
                class="w-full h-full object-cover"
                onerror="this.src='assets/images/placeholder.jpg'"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-acero-oscuro/50 to-transparent"
              ></div>
            </div>

            <!-- Stats Card -->
            <div
              class="absolute -bottom-6 -left-6 bg-naranja-soldadura rounded-xl p-6 shadow-xl"
            >
              <div class="text-4xl font-bold text-white">500+</div>
              <div class="text-white/80">Proyectos Completados</div>
            </div>
          </div>
        </div>

        <!-- Mission & Vision -->
        <div class="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div class="metallic-card rounded-xl p-8">
            <div
              class="w-14 h-14 bg-naranja-soldadura/20 rounded-xl flex items-center justify-center mb-5"
            >
              <svg
                class="w-7 h-7 text-naranja-soldadura"
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
            <h3 class="text-2xl font-bold text-plata-metal mb-4">
              Nuestra Misión
            </h3>
            <p class="text-plata-metal/70 leading-relaxed">
              Proporcionar soluciones metálicas de alta calidad que superen las
              expectativas de nuestros clientes, utilizando tecnología avanzada
              y un equipo altamente capacitado, garantizando durabilidad,
              seguridad y diseño en cada proyecto.
            </p>
          </div>
          <div class="metallic-card rounded-xl p-8">
            <div
              class="w-14 h-14 bg-naranja-soldadura/20 rounded-xl flex items-center justify-center mb-5"
            >
              <svg
                class="w-7 h-7 text-naranja-soldadura"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-bold text-plata-metal mb-4">
              Nuestra Visión
            </h3>
            <p class="text-plata-metal/70 leading-relaxed">
              Ser el taller de soldadura líder en la región, reconocido por
              nuestra excelencia técnica, innovación en diseños y compromiso con
              la satisfacción del cliente, expandiendo nuestros servicios a
              nivel nacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [],
})
export class AboutComponent {}
