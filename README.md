# Veterinary Pet Shop Franco 

_The website is for a veterinarian who has been asked to develop a page where she shows us 4 sections that will be detailed below:_

## 1st SECTION Who are we? 

![image](https://user-images.githubusercontent.com/62455807/89750402-39f2ec00-daa2-11ea-9e62-6584fda4ac32.png)
![image](https://user-images.githubusercontent.com/62455807/89750530-ca313100-daa2-11ea-9e03-fa56fc68f3e7.png)
![image](https://user-images.githubusercontent.com/62455807/89750558-ed5be080-daa2-11ea-93b0-367a4100e6e6.png)
_DESCRIPTION: This section is where we present the veterinarian what its objective is, its mission, since they point to the future, we also have links in two images in which they will give us directions to the virtual store, in the part of the footer we are going to include the data of the networks, location maps and information necessary to be able to locate the premises._



## 2nd SECTION (Form)
![image](https://user-images.githubusercontent.com/62455807/89750864-22b4fe00-daa4-11ea-9802-d3d7614e7391.png)
_DESCRIPTION: In this section we have the contact form where the user will send us their personal information and that of their pet, once the e-mail is sent, a confirmation message will be sent where they will be informed that the information has been successfully submitted._


## 3rd SECTION Virtual store (Drug Store)

![image](https://user-images.githubusercontent.com/62455807/89751010-c56d7c80-daa4-11ea-9396-47ec8597d77f.png)
![image](https://user-images.githubusercontent.com/62455807/89750976-a7078100-daa4-11ea-96bd-f2a15ad1b1f7.png)
![image](https://user-images.githubusercontent.com/62455807/89751039-e33ae180-daa4-11ea-8f3a-83a2ad599789.png)

_DESCRIPTION: In this section we have the virtual store where we have different products that come from an external API._
_At the beginning of the page we have images of the products in an animation that are shown and rotated. Then we have the products in grids where their:_

- Image
- Price
- Name
- Description
- Stock quantity

## If the products have less than 5 in stock, a red sign appears mentioning and alerting "Last units!".
_We have the button "Add to Cart" which if we press it, it does not take us anywhere since the part of the ecommerce was not part of the objective._




## 4th Virtual Store (Toy store)
![image](https://user-images.githubusercontent.com/62455807/89751365-1cc01c80-daa6-11ea-8f3f-bf0a7e819497.png)
![image](https://user-images.githubusercontent.com/62455807/89751481-a374f980-daa6-11ea-925b-1749735db88b.png)
![image](https://user-images.githubusercontent.com/62455807/89751486-aa037100-daa6-11ea-897d-489b136422e0.png)

_DESCRIPTION: In this section we have the virtual store where we have different products that come from an external API._
_At the beginning of the page we have images of the products in an animation that are shown and rotated. Then we have the products in grids where their:_
- Image
- Price
- Name
- Description
- Stock quantity

_If the products have less than 5 in stock, a red sign appears mentioning and alerting "Last units!"_
_We have the button "Add to Cart" which if we press it, it does not take us anywhere since the part of the ecommerce was not part of the objective._


## Code details:
_API connection (With AJAX)_
```
ruby

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


## Requirements:

_Browsers needed to run the web:_
- Mozilla Firefox
- Google Chrome
- Opera
- Microsoft Edge

## 🛠️ Tools used 🛠️

* [Boostrap] (https://getbootstrap.com/) - `` Front-End Framework 
* [API Herokuapp] - (https://apipetshop.herokuapp.com/api/articulos) - `` API (We take the information from here) 
## ✒️ Author ✒️

* ** Martin Cumpe ** - [tincho3604] (https://github.com/Tincho3604)

## 🎁 Thanks! 🎁

* This project was developed in the Mindhub bootcamp, as part of the development in the module (Javascript Web Development) 📢



