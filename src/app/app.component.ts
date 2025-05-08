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
    { nombre: 'Stout', tipo: 'Oscura', imagen: 'https://cuzcobebidas.com/images/productos/15749908267C03B72B-1494-4732-975C-72F937ADE36F.jpeg' },
    { nombre: 'Pilsen', tipo: 'Rubia', imagen: 'https://www.californiasa.com.ar/wp-content/uploads/7793147572075.jpg' }
  ];

}
