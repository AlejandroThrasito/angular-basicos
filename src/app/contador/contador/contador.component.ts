import { Component } from "@angular/core"

@Component({
    selector: 'app-contador',
    template: `
        <h1>hola mundo</h1>
        <h2>{{title}}</h2>
        <h3>La Base es: <strong>{{base}}</strong></h3>
        <button (click)="acumular(base)"> + {{base}}</button>
        <span>{{numero}}</span>
        <button (click)="acumular(-base)"> - {{base}}</button>
    `
})
export class ContadorComponent {
    title = 'Contador APP';
    numero: number = 10;
    base: number = 5;

    acumular(valor: number) {
        this.numero += valor;
    }
}