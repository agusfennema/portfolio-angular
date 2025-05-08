import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Agregar CommonModule

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  // Lista de productos en el carrito
  cartItems = [
    { nombre: 'IPA', cantidad: 2, precio: 3.5 },
    { nombre: 'Stout', cantidad: 1, precio: 4.0 },
    { nombre: 'Pilsen', cantidad: 3, precio: 2.8 }
  ];

  // Método para calcular el total del carrito
  get total() {
    return this.cartItems.reduce((sum, item) => sum + (item.cantidad * item.precio), 0);
  }

  // Simula el proceso de compra
  checkout() {
    alert('¡Gracias por tu compra!');
  }
}

