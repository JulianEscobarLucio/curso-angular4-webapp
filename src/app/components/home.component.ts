import { Component } from '@angular/core'

@Component({
    selector:'home',
    templateUrl:'../views/home.html'
})

export class Homecomponent{
    public titulo: string;

    constructor(){
        this.titulo = 'webapp de productos con angular 4';
    }

    ngOnInit(){
        console.log('Se ha cargado el component home.component.ts');
    }
}