import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Agregar CommonModule

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],  // Añadir CommonModule aquí
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-angular';
  cervezas = [
    { nombre: 'IPA', tipo: 'Lupulada', imagen: 'https://cheverry.com.ar/wp-content/uploads/2020/07/ipa.jpg' },
    { nombre: 'Stout', tipo: 'Oscura', imagen: 'https://http2.mlstatic.com/D_NQ_NP_755301-MLA74736589354_032024-O.webp' },
    { nombre: 'Pilsen', tipo: 'Rubia', imagen: 'https://www.californiasa.com.ar/wp-content/uploads/7793147572075.jpg' }
  ];

}
