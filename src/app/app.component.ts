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
    { nombre: 'IPA', tipo: 'Lupulada', imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fborrachines.com.ar%2Finicio%2Fproducto%2Fimperial-cerveza-rubia-ipa-india-pale-ale-lata-473ml%2F&psig=AOvVaw1ELhJFmb9oDfXCFYbm0iH4&ust=1746823783356000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCOi7xOvflI0DFQAAAAAdAAAAABAE' },
    { nombre: 'Stout', tipo: 'Oscura', imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tada.com.ar%2Fproducto%2F127%2FCervezas%2FQuilmes-Stout-473ml-&psig=AOvVaw0x3QIdQfv5j5KDoXqV12RJ&ust=1746823780461000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNCq0vfflI0DFQAAAAAdAAAAABAE' },
    { nombre: 'Pilsen', tipo: 'Rubia', imagen: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.californiasa.com.ar%2Fproducto%2Fcerveza-santa-fe-pilsen-lata-473cc%2F&psig=AOvVaw3Z_FlBm1jUNTMGSkaoz05-&ust=1746823833490000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCxjobglI0DFQAAAAAdAAAAABAE' }
  ];

}
