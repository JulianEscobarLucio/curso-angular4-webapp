import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductoService } from '../services/productos.service';
import { Producto } from '../models/producto';

@Component({
    selector:"producto-list",
    templateUrl : '../views/productos-list.html',
    providers : [ProductoService]

})

export class ProductosListComponent{
    public titulo :string;
    public productos: Array<Producto>;
    public confirmado;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService:ProductoService
    ){
        this.titulo = 'Listado de productos';
        this.confirmado = null;
    }
    

    ngOnInit(){
          this.getProductos(); 
    }

    getProductos(){
        this._productoService.getProductos().subscribe(
            result => { 
                 if(result.code != 200){
                 }else{ 
                    this.productos = result.data;
                    console.log(result);
                }
            },    
            error => {
                console.log(<any>error);
            }
        );
    }
    
    
    borrarConfirm(id){
        this.confirmado = id;
    }

    cancelarConfirm(){
        this.confirmado = null;
    }

    onDeleteProducto(id){
        this._productoService.deleteProducto(id).subscribe(
            response =>{
                if(response.code=200){
                    this.getProductos(); 
                }else{
                    alert("error al boorrar");
                }
            },
            error =>{
                console.log(<any>error);
            }
        );
    }

}