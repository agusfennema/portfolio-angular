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
    { nombre: 'IPA', tipo: 'Lupulada', imagen: 'https://via.placeholder.com/150/0000FF/808080?Text=IPA' },
    { nombre: 'Stout', tipo: 'Oscura', imagen: 'https://via.placeholder.com/150/0000FF/808080?Text=Stout' },
    { nombre: 'Pilsen', tipo: 'Rubia', imagen: 'https://via.placeholder.com/150/0000FF/808080?Text=Pilsen' }
  ];
}
