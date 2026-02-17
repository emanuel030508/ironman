import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleriaModule } from "primeng/galleria";
import { GalleryService } from "../../shared/services/gallery.service";
import { GalleryImage } from "../../shared/models/image.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-gallery",
  standalone: true,
  imports: [CommonModule, GalleriaModule],
  template: ``,
  styles: [],
})
export class GalleryComponent implements OnInit {
  images$: Observable<GalleryImage[]>;
  categories = ["todos", "puertas", "ventanas", "cercas", "vehiculos"];
  selectedCategory = "todos";

  responsiveOptions: any[] = [
    {
      breakpoint: "1024px",
      numVisible: 4,
    },
    {
      breakpoint: "768px",
      numVisible: 3,
    },
    {
      breakpoint: "560px",
      numVisible: 2,
    },
  ];

  constructor(private galleryService: GalleryService) {
    this.images$ = this.galleryService.getImages();
  }

  ngOnInit(): void {}

  filterByCategory(category: string): void {
    this.selectedCategory = category;
    if (category === "todos") {
      this.images$ = this.galleryService.getImages();
    } else {
      // In a real implementation, you would filter the images
      // For now, we'll show all images
      this.images$ = this.galleryService.getImages();
    }
  }
}
