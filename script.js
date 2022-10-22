//NOMBRE DE USUARIO
let nombre = prompt(" ingrese su nombre: ")
console.log("bienvenido:"+ nombre)


        

let libro = Number(prompt("elija un producto 1-libro1 2-libro2 3-libro3 4-libro4 5-libro5 6-libro6" ))
let cantidad = Number(prompt("elija la cantidad de productos"))
let total =0
let valorLibro=0
if(libro==1){
    valorLibro=+1000
  console.log("libro 1:$" + valorLibro)
  console.log("cantidad de libros: "+ cantidad)
  console.log("total: $" + valorLibro * cantidad )
  total=valorLibro*cantidad
  
 
    }else if(libro==2){
        valorLibro= valorLibro+2000
        console.log("libro 2:$" + valorLibro)
        console.log("cantidad de libros: "+ cantidad)
        console.log("total: $" + valorLibro * cantidad )
        total=valorLibro*cantidad
   
    }else if(libro==3){
        valorLibro=valorLibro+3000
        console.log("libro  3:$" + valorLibro)
        console.log("cantidad de libros: "+ cantidad)
        console.log("total: $" + valorLibro * cantidad )
        total=valorLibro*cantidad
   
    }else if(libro==4){
        valorLibro=valorLibro+4000
        console.log("libro 4:$" + valorLibro)
        console.log("cantidad de libros: "+ cantidad)
        console.log("total: $" + valorLibro * cantidad )
        total=valorLibro*cantidad
    
    }else if(libro==5){
         valorLibro=valorLibro+5000
         console.log("libro 5:$" + valorLibro)
         console.log("cantidad de libros: "+ cantidad)
         console.log("total: $" + valorLibro * cantidad )
         total=valorLibro*cantidad
     
 }else if(libro==6){
           valorLibro=valorLibro+6000
           console.log("libro 6:$" + valorLibro)
           console.log("cantidad de libros: "+ cantidad)
           console.log("total: $" + valorLibro * cantidad )
           total=valorLibro*cantidad
   
   }else{alert("opcion invalida")}
                          //WHILE

let otrosTotales=0
let valorLibro2=0
let total2=0
let contador=prompt("quiere agregar mas productos? 1-si 2-no")
if(contador==2){
    cobrar()
}

    while (contador==1) {
    let productos2 = Number(prompt("elija un producto 1-libro1 2-libro2 3-libro3 4-libro4 5-libro5 6-libro6" ))
    let cantidad2 = Number(prompt("elija la cantidad de productos que quiera agregar"))
   switch(productos2){
            case 1:                        //SWITCH
                valorLibro2=+1000
        console.log("libro 1 :"+ valorLibro2);
        console.log("cantidad de libros: "+ cantidad)
        console.log("total :$"+ valorLibro2*cantidad2);
       total2=total2+valorLibro2*cantidad2
            break;
            case 2:
                valorLibro2=+2000
        console.log("libro 2 :$"+ valorLibro2);
        console.log("cantidad de libros: "+ cantidad)
        console.log("total :$"+ valorLibro2*cantidad2)
        total2=total2+valorLibro2*cantidad2
            break;
            case 3:        
            valorLibro2=+3000
        console.log("libro 3 :$"+ valorLibro2);
        console.log("cantidad de libros: "+ cantidad)
        console.log("total :$"+ valorLibro2*cantidad2)
         total2=total2+valorLibro2*cantidad2
            break;
            case 4:
                valorLibro2=+4000
        console.log("libro 4 :$"+ valorLibro2);
        console.log("cantidad de libros: "+ cantidad)
        console.log("total :$"+ valorLibro2*cantidad2)
        total2=total2+valorLibro2*cantidad2
            break;
            case 5:
                valorLibro2=+5000
         console.log("libro  5:$"+valorLibro2);
         console.log("cantidad de libros: "+ cantidad)
         console.log("total :$"+ valorLibro2*cantidad2)
                  total2=total2+valorLibro2*cantidad2
            break;
            case 6:
                valorLibro2=+6000
         console.log("libro 6:$"+ valorLibro2);
         console.log("cantidad de libros: "+ cantidad)
        console.log("total :$"+ valorLibro2*cantidad2)
                total2=total2+valorLibro2*cantidad2
            break;
            default:
                console.log("opcion invalida")  
         }
         contador++
         contador=prompt("quiere agregar mas productos? 1-si 2-no")
         if(contador==2){
            cobrar()
         }else{
            alert("opcion invlida")
         }
              
        }
        
        
        
function cobrar (){
    let datosTarjeta=0
        let valorCuota=0
        let totalTotal=total+total2
        let cuotas=0
 console.log("total de la compra: $"+(total+total2))
let pago= prompt("con que metodo desea pagar? tarjeta o transferencia")
if(pago=="tarjeta"){
    let debOcred=prompt("debito o credito?")
    if(debOcred== "credito"){
         cuotas = Number(prompt("cuantas cuotas? 3, 6 o 12"))
        if(cuotas==3) {

          valorCuota= totalTotal/cuotas
         console.log("3 cuotas de: $"+ valorCuota)

        }else if(cuotas==6){
                 valorCuota= totalTotal/cuotas
         console.log("6 cuotas de: $"+ valorCuota)

        }else if(cuotas ==12){
                 valorCuota= totalTotal/cuotas
         console.log("12 cuotas de: $"+ valorCuota)

        }else{
            alert("opcion invalida")
        }
    }else if(debOcred=="debito"){
         datosTarjeta=Number(prompt("ingrese los 12 digitos de su tarjeta"))
         if(datosTarjeta>=100000000000 && datosTarjeta<=999999999999){
            alert("tarjeta aprobada")
         }else{
            alert("tarjeta invalida")
         }
    }else {
        alert("opcion invalida")
    }
}else if(pago=="transferencia"){
    alert("transferir al cbu 878775656455334")
    console.log("trasnferir al cbu 878775656455334")
    }else{
        alert("opcion incorrecta")
        
    }
}
                
            
    
       

         



