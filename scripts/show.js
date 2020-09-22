
$(document).ready(
    $.ajax({
    
    url: `https://apipetshop.herokuapp.com/api/articulos`,
    
    success: function(info){
        var data = []
        data = info.response
        miPrograma(data)
        
        }
    })
)
  


function miPrograma(data){                                                                           

var cajaGlobalJuguetes = document.getElementById("globalJuguete") 
var cajaGlobalMed = document.getElementById("globalMedicina") 
var imagenes = document.getElementsByClassName("card-img-top")
var titulo = document.getElementsByName("card-title")
var cajaSecundaria = document.getElementsByName("card-body")
var descripccion = document.getElementsByClassName("card-text")
var items = document.getElementsByClassName("list-group-item")
var contenidos = document.querySelector(".contenido")



for(let valor of data){
    if((valor.tipo == "Juguete") && (cajaGlobalJuguetes)){
        cajaGlobalJuguetes.innerHTML  += `
     
        <div class="cjaCentral">
        
        <div class ="muestra">
            <img src="${valor.imagen} alt="">
            <p>$ ${valor.precio}</p> 
        </div>     
        
        <div class ="muestra">
          <p>${valor.nombre}</p>
        </div>


        <div class="descripccion">
          <p>${valor.descripcion}</p>
        </div> 
        

    <div class="stock">
          <p>Unidades disponibles ${valor.stock} </p>
          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
          <div class="alert alert-danger" role="alert" style=${valor.stock <= 5 ? 'display:block' : 'display:none'}>
          <p>Atencion: ¡Ultimas unidades!</p> 
        </div>
     </div>

    `
        }else if((valor.tipo == "Medicamento") && (cajaGlobalMed)){

            cajaGlobalMed.innerHTML  += `
    
    <div class="cjaCentral">
        
        <div class ="muestra">
            <img src="${valor.imagen} alt="">
            <p>$ ${valor.precio}</p> 
        </div>     
        
        <div class ="muestra">
          <p>${valor.nombre}</p>
        </div>

        
        <div class="descripccion">
          <p>${valor.descripcion}</p>
        </div> 
        

    <div class="stock">
          <p>Unidades disponibles ${valor.stock} </p>
          <a href="#" class="u-full-width button-primary button input agregar-carrito" data-id="1">Agregar Al Carrito</a>
          <div class="alert alert-danger" role="alert" style=${valor.stock <= 5 ? 'display:block' : 'display:none'}>
          <p>Atencion: ¡Ultimas unidades!</p> 
        </div>
     </div>
            `
      }
   }
}// ´${(valor.stock <= 5) ? 'temporal' : ''}´ Fin funcion mi programa




