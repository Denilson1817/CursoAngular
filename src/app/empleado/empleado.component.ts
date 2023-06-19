import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit{
  nombre="Denilson";
  apellido="Perez";
  edad=21;
  empresa="Denilson";

  
  /*
  cambiaEmpresa(event:Event){
    this.empresa=(<HTMLInputElement>event.target).value;
  }*/ 

  /*getEdad(){

    return this.edad;
  }*/

  /*llamaEmpresa(value:String){

  }*/

  habilitacionCuadro=false;

  usuRegistrado=false;

  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.usuRegistrado=false;
  }

  setUsuarioRegistrado(){
    //alert("El usuario se acaba de registrar");
    this.textoDeRegistro="El usuario se acaba de registrar";
  }

  constructor(){

  }

  ngOnInit(): void{

  }
}
