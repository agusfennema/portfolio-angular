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
    { nombre: 'IPA', tipo: 'Lupulada', imagen: 'https://upload.wikimedia.org/wikipedia/commons/3/39/IPA_Beer.jpg' },
    { nombre: 'Stout', tipo: 'Oscura', imagen: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Guinness_Stout.jpg' },
    { nombre: 'Pilsen', tipo: 'Rubia', imagen: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Pilsner_Urquell_Bottle.jpg' }
  ];

}
