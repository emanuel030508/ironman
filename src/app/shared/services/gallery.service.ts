import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { GalleryImage } from "../models/image.model";

@Injectable({
  providedIn: "root",
})
export class GalleryService {
  private images: GalleryImage[] = [
    {
      id: 1,
      src: "/../../assets/images/spencer-davis-8DQz9z99GjU-unsplash",
      thumbnail: "/../../assets/images/spencer-davis-8DQz9z99GjU-unsplash",
      alt: "Puerta metálica con cristal",
      title: "Puerta Metálica Moderna",
      description:
        "Puerta de entrada con diseño contemporáneo y cristal templado",
      category: "puertas",
    },
    {
      id: 2,
      src: "/../../assets/images/rob-lambert-9Q_pLLP_jmA-unsplash",
      thumbnail: "/../../assets/images/rob-lambert-9Q_pLLP_jmA-unsplash",
      alt: "Ventana metálica con cristal",
      title: "Ventana Metálica",
      description: "Ventana con marco de acero y cristal de seguridad",
      category: "ventanas",
    },
    {
      id: 3,
      src: "/../../assets/images/filipa-saldanha-TtOdr8tYtUU-unsplash",
      thumbnail: "/../../assets/images/filipa-saldanha-TtOdr8tYtUU-unsplash",
      alt: "Cerca metálica decorativa",
      title: "Cerca Decorativa",
      description: "Cerca metálica con diseño ornamental para residencia",
      category: "cercas",
    },
  ];

  private imagesSubject = new BehaviorSubject<GalleryImage[]>(this.images);
  images$ = this.imagesSubject.asObservable();

  constructor() {}

  getImages(): Observable<GalleryImage[]> {
    return this.images$;
  }

  getImagesByCategory(category: string): GalleryImage[] {
    return this.images.filter((img) => img.category === category);
  }

  addImage(image: GalleryImage): void {
    this.images.push(image);
    this.imagesSubject.next([...this.images]);
  }

  removeImage(id: number): void {
    this.images = this.images.filter((img) => img.id !== id);
    this.imagesSubject.next([...this.images]);
  }
}
