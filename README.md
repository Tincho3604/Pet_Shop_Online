# :dog: Veterinaria Pet Shop Franco :cat:

La web es para una veterinaria la cual se ha pedido que elaboremos una pagina en donde nos muestre 4 secciones que se van a detallar a continuación:

##  :hamster: 1er SECCIÓN ¿Quienes somos? :hamster:

![image](https://user-images.githubusercontent.com/62455807/89750402-39f2ec00-daa2-11ea-9e62-6584fda4ac32.png)
![image](https://user-images.githubusercontent.com/62455807/89750530-ca313100-daa2-11ea-9e03-fa56fc68f3e7.png)
![image](https://user-images.githubusercontent.com/62455807/89750558-ed5be080-daa2-11ea-93b0-367a4100e6e6.png)
## DESCRIPCCIÓN: Esta sección es en la que presentamos a la veterinaria cual es su objetivo, su misión, y a que apuntan a futuro, también tenemos , links en dos imágenes en las que nos van a dar direccionamiento a la tienda virtual, en la parte del footer vamos a incluir los datos de las redes ubicación mapas y informacion necesaria para poder ubicar el local.



##  :email: 2do SECCIÓN (Formulario) :email:
![image](https://user-images.githubusercontent.com/62455807/89750864-22b4fe00-daa4-11ea-9802-d3d7614e7391.png)
## DESCRIPCCIÓN: En esta sección tenemos el formulario de contacto en donde el usuario nos mandara su información personal y la de su mascota, una vez enviado el e-mail se le mandara un mensaje de confirmación en donde se le comunicara que la información ha sido envidada correctamente.


## :pill: 3er SECCIÓN Tienda virtual (Farmacia):syringe:

![image](https://user-images.githubusercontent.com/62455807/89751010-c56d7c80-daa4-11ea-9396-47ec8597d77f.png)
![image](https://user-images.githubusercontent.com/62455807/89750976-a7078100-daa4-11ea-96bd-f2a15ad1b1f7.png)
![image](https://user-images.githubusercontent.com/62455807/89751039-e33ae180-daa4-11ea-8f3a-83a2ad599789.png)

## DESCRIPCCIÓN: En esta sección tenemos la tienda virtual en donde tenemos distintos productos que que vienen  de un API externa. 
## Al comienzo de la pagina tenemos imágenes de los productos en una animación que se muestran y rotan.  Después tenemos los productos en grillas en donde se muestra su: 
- Imagen 
- Precio 
- Nombre 
- Descripción 
- Cantidad de stock 

## Si los productos tienen menos de 5 de stock, se aparece un cartel rojo mencionando y alertando "¡Ultimas unidades!"  
## Tenemos el boton "Agregar al Carrito" el cual si lo presionamos no nos lleva a ningún lado ya que la parte del eccomerce no era parte del objetivo




## :baseball: 4ta Tienda virtual (Jugueteria) :soccer:
![image](https://user-images.githubusercontent.com/62455807/89751365-1cc01c80-daa6-11ea-8f3f-bf0a7e819497.png)
![image](https://user-images.githubusercontent.com/62455807/89751481-a374f980-daa6-11ea-925b-1749735db88b.png)
![image](https://user-images.githubusercontent.com/62455807/89751486-aa037100-daa6-11ea-897d-489b136422e0.png)

## DESCRIPCCIÓN: En esta sección tenemos la tienda virtual en donde tenemos distintos productos que que vienen  de un API externa. 
## Al comienzo de la pagina tenemos imágenes de los productos en una animación que se muestran y rotan.  Después tenemos los productos en grillas en donde se muestra su: 
- Imagen 
- Precio 
- Nombre 
- Descripción 
- Cantidad de stock 

## Si los productos tienen menos de 5 de stock, se aparece un cartel rojo mencionando y alertando "¡Ultimas unidades!"  
## Tenemos el boton "Agregar al Carrito" el cual si lo presionamos no nos lleva a ningún lado ya que la parte del eccomerce no era parte del objetivo


## :computer: Detalles del codigo :computer:
###### Conexión a la API (Con AJAX)
```ruby

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
  
```


## :page_with_curl: Requisitos :page_with_curl:

Navegadores necesarios para correr la web:
- Mozilla Firefox 
- Google Chrome 
- Opera 
- Microsoft Edge

## 🛠️ Herramientas usadas 🛠️

* [Boostrap](https://getbootstrap.com/) - ``Framework Front-End``
* [API Herokuapp] - (https://apipetshop.herokuapp.com/api/articulos) - ``API (Tomamos la información de aqui)``
## ✒️ Autor ✒️

* **Martin Cumpe** - [tincho3604](https://github.com/Tincho3604)

## 🎁 ¡Agradecimientos !🎁

* Este proyecto fue desarrollado en el bootcamp de Mindhub, como parte del desarrollo en el modulo (Desarrollo web Javascript) 📢



