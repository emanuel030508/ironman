import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ContactService } from "../../shared/services/contact.service";
import { ContactForm, ContactInfo } from "../../shared/models/contact.model";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="section-padding bg-acero-oscuro">
      <div class="container-custom mx-auto">
        <!-- Section Header -->
        <div class="text-center mb-16">
          <span
            class="text-naranja-soldadura font-semibold uppercase tracking-wider text-sm"
          >
            Contáctanos
          </span>
          <h2
            class="text-3xl sm:text-4xl md:text-5xl font-bold text-plata-metal mt-3 mb-4"
          >
            ¿Listo para tu <span class="text-naranja-soldadura">Proyecto</span>?
          </h2>
          <p class="text-plata-metal/70 max-w-2xl mx-auto text-lg">
            Solicita una cotización gratuita o contáctanos para más información
            sobre nuestros servicios.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="metallic-card rounded-xl p-8">
            <h3 class="text-2xl font-bold text-plata-metal mb-6">
              Envíanos un Mensaje
            </h3>

            <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
              <div class="space-y-5">
                <div>
                  <label
                    for="name"
                    class="block text-plata-metal/80 text-sm font-medium mb-2"
                  >
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    [(ngModel)]="formData.name"
                    required
                    class="w-full px-4 py-3 bg-acero-oscuro border border-acero-medio rounded-lg 
                           text-plata-metal placeholder-plata-metal/40 focus:outline-none 
                           focus:border-naranja-soldadura focus:ring-1 focus:ring-naranja-soldadura 
                           transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      for="email"
                      class="block text-plata-metal/80 text-sm font-medium mb-2"
                    >
                      Correo Electrónico
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      [(ngModel)]="formData.email"
                      required
                      class="w-full px-4 py-3 bg-acero-oscuro border border-acero-medio rounded-lg 
                             text-plata-metal placeholder-plata-metal/40 focus:outline-none 
                             focus:border-naranja-soldadura focus:ring-1 focus:ring-naranja-soldadura 
                             transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label
                      for="phone"
                      class="block text-plata-metal/80 text-sm font-medium mb-2"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      [(ngModel)]="formData.phone"
                      class="w-full px-4 py-3 bg-acero-oscuro border border-acero-medio rounded-lg 
                             text-plata-metal placeholder-plata-metal/40 focus:outline-none 
                             focus:border-naranja-soldadura focus:ring-1 focus:ring-naranja-soldadura 
                             transition-colors"
                      placeholder="+53 5 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-plata-metal/80 text-sm font-medium mb-2"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    [(ngModel)]="formData.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 bg-acero-oscuro border border-acero-medio rounded-lg 
                           text-plata-metal placeholder-plata-metal/40 focus:outline-none 
                           focus:border-naranja-soldadura focus:ring-1 focus:ring-naranja-soldadura 
                           transition-colors resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  [disabled]="!contactForm.form.valid || isSubmitting"
                  class="w-full btn-primary py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span *ngIf="!isSubmitting">Enviar Mensaje</span>
                  <span *ngIf="isSubmitting">Enviando...</span>
                </button>
              </div>
            </form>

            <!-- Success Message -->
            <div
              *ngIf="submitSuccess"
              class="mt-4 p-4 bg-green-500/20 border border-green-500 rounded-lg"
            >
              <p class="text-green-400 text-center">
                ¡Mensaje enviado exitosamente! Nos pondremos en contacto contigo
                pronto.
              </p>
            </div>
          </div>

          <!-- Contact Info -->
          <div class="space-y-8">
            <div>
              <h3 class="text-2xl font-bold text-plata-metal mb-6">
                Información de Contacto
              </h3>

              <div class="space-y-5">
                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-naranja-soldadura/20 rounded-lg flex items-center justify-center flex-shrink-0"
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
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-plata-metal font-semibold mb-1">
                      Teléfono
                    </h4>
                    <p class="text-plata-metal/70">{{ contactInfo.phone }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-naranja-soldadura/20 rounded-lg flex items-center justify-center flex-shrink-0"
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-plata-metal font-semibold mb-1">
                      Correo Electrónico
                    </h4>
                    <p class="text-plata-metal/70">{{ contactInfo.email }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-naranja-soldadura/20 rounded-lg flex items-center justify-center flex-shrink-0"
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
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 class="text-plata-metal font-semibold mb-1">
                      Dirección
                    </h4>
                    <p class="text-plata-metal/70">{{ contactInfo.address }}</p>
                  </div>
                </div>

                <div class="flex items-start space-x-4">
                  <div
                    class="w-12 h-12 bg-naranja-soldadura/20 rounded-lg flex items-center justify-center flex-shrink-0"
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
                  <div>
                    <h4 class="text-plata-metal font-semibold mb-1">
                      Horarios
                    </h4>
                    <p class="text-plata-metal/70">{{ contactInfo.hours }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- WhatsApp CTA -->
            <div
              class="bg-gradient-to-r from-green-600 to-green-500 rounded-xl p-6"
            >
              <div class="flex items-center space-x-4">
                <div
                  class="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center"
                >
                  <svg
                    class="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
                    />
                  </svg>
                </div>
                <div class="flex-1">
                  <h4 class="text-white font-bold text-lg">
                    ¿Prefieres WhatsApp?
                  </h4>
                  <p class="text-white/80 text-sm mb-3">
                    Escríbenos directamente para una respuesta más rápida.
                  </p>
                  <a
                    [href]="whatsappLink"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block bg-white text-green-600 px-6 py-2 rounded-lg font-semibold 
                            hover:bg-white/90 transition-colors"
                  >
                    Abrir WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating WhatsApp Button -->
    <a
      [href]="whatsappLink"
      target="_blank"
      rel="noopener noreferrer"
      class="fixed bottom-6 right-6 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center 
              shadow-lg shadow-green-500/30 hover:scale-110 transition-transform z-50"
      aria-label="Contactar por WhatsApp"
    >
      <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
        />
      </svg>
    </a>
  `,
  styles: [],
})
export class ContactComponent {
  formData: ContactForm = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  contactInfo: ContactInfo;
  whatsappLink: string;
  isSubmitting = false;
  submitSuccess = false;

  constructor(private contactService: ContactService) {
    this.contactInfo = this.contactService.getContactInfo();
    this.whatsappLink = this.contactService.getWhatsAppLink(
      "Hola, me gustaría obtener más información sobre sus servicios de soldadura.",
    );
  }

  onSubmit(): void {
    if (this.isSubmitting) return;

    this.isSubmitting = true;

    this.contactService.submitContactForm(this.formData).subscribe({
      next: (success) => {
        this.isSubmitting = false;
        this.submitSuccess = true;
        this.formData = { name: "", email: "", phone: "", message: "" };

        setTimeout(() => {
          this.submitSuccess = false;
        }, 5000);
      },
      error: () => {
        this.isSubmitting = false;
      },
    });
  }
}
