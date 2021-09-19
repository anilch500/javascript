$(document).ready(function() {
    var productId = window.location.search.split('=')[1];

var X=document.getElementById("main")
$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product", function (response){
    
console.log(response);
  var section = document.createElement("div");
  section.className = "section-total";

  var leftColown= document.createElement("div");
  leftColown.className = "left-colown";

  var leftcolownimg = document.createElement("img");
  leftcolownimg.className = "left-image"
  leftcolownimg.src = response[productId-1].photos[0];

  leftColown.appendChild(leftcolownimg);

  var righttColown = document.createElement("div");
  righttColown.className = "right-colown";

  var productdiscription = document.createElement("div");
  productdiscription.className = "product";


  var nameofshirt = document.createElement("h1");
  nameofshirt.innerHTML=response[productId-1].name;
  nameofshirt.className = "name";

  var brandofshirt = document.createElement("h4");
  brandofshirt.innerHTML=response[productId-1].brand;
  brandofshirt.className = "brand";


  var priceofshirt= document.createElement("h3");
  var value=response[productId-1].price;

  var colorcont=document.createElement("span");
  colorcont.innerHTML=value;
  colorcont.className="color-change";

  
  priceofshirt.innerHTML="Price: Rs"+" ";
  priceofshirt.className= "price";
  priceofshirt.appendChild(colorcont);
  
 


  var discriptionmain = document.createElement("div");
  discriptionmain.className = "discription-main";


 var discriptionheading= document.createElement("h3");
      discriptionheading.innerHTML="Description"
      discriptionheading.className = "discription-heading";

  var discriptioninfo= document.createElement("h3");
  discriptioninfo.innerHTML=response[productId-1].description;
  discriptioninfo.className = "discription-info";

  var productpreview = document.createElement("div");
  productpreview.className = "product-preview";
  


var productpreviewheading= document.createElement("h3");
productpreviewheading.innerHTML="Product Preview"
productpreviewheading.className = "product-preview-heading";
var productimg= document.createElement("div");
productimg.className = "product-img";

   var previewImage1 = document.createElement("img");
previewImage1.className="preview-image"
previewImage1.src = response[productId-1].photos[0];
previewImage1.style.border="2px solid #009688"

var previewImage2 = document.createElement("img");
previewImage2.className="preview-image"
previewImage2.src = response[productId-1].photos[1];

var previewImage3 = document.createElement("img");
previewImage3.className = "preview-image"
previewImage3.src = response[productId-1].photos[2];

var previewImage4 = document.createElement("img");
previewImage4.className = "preview-image"
previewImage4.src = response[productId-1].photos[3];

var previewImage5 = document.createElement("img");
previewImage5.className = "preview-image"
previewImage5.src = response[productId-1].photos[4];


    

X.appendChild(section);
section.appendChild(leftColown);
section.appendChild(righttColown);
righttColown.appendChild(productdiscription);
productdiscription.appendChild(nameofshirt);
productdiscription.appendChild(brandofshirt);
productdiscription.appendChild(priceofshirt);
productdiscription.appendChild(discriptionmain);
discriptionmain.appendChild(discriptionheading);
discriptionmain.appendChild(discriptioninfo);
productdiscription.appendChild(productpreview);
productpreview.appendChild(productpreviewheading);
productpreview.appendChild(productimg);
productimg.appendChild(previewImage1);
productimg.appendChild(previewImage2);
productimg.appendChild(previewImage3);
productimg.appendChild(previewImage4);
productimg.appendChild(previewImage5);

previewImage1.addEventListener("click",function(){leftcolownimg.src = response[productId-1].photos[i];})
 previewImage2.addEventListener("click",function(){leftcolownimg.src = response[productId-1].photos[1];})
previewImage3.addEventListener("click",function(){leftcolownimg.src = response[productId-1].photos[2]; })
 previewImage4.addEventListener("click",function(){leftcolownimg.src = response[productId-1].photos[3]; })
 previewImage5.addEventListener("click",function(){leftcolownimg.src = response[productId-1].photos[4]; })
    


    previewImage1.addEventListener("click",function(){ previewImage1.style.border="2px solid #009688";previewImage3.style.border="none";previewImage4.style.border="none";previewImage5.style.border="none";previewImage2.style.border="none"})
    previewImage2.addEventListener("click",function(){ previewImage2.style.border="2px solid #009688";previewImage3.style.border="none";previewImage4.style.border="none";previewImage5.style.border="none";previewImage1.style.border="none"})
previewImage3.addEventListener("click",function(){ previewImage3.style.border="2px solid #009688";previewImage1.style.border="none";previewImage4.style.border="none";previewImage5.style.border="none";previewImage2.style.border="none"})
previewImage4.addEventListener("click",function(){ previewImage4.style.border="2px solid #009688";previewImage3.style.border="none";previewImage1.style.border="none";previewImage5.style.border="none";previewImage2.style.border="none"})
previewImage5.addEventListener("click",function(){ previewImage5.style.border="2px solid #009688";previewImage3.style.border="none";previewImage4.style.border="none";previewImage1.style.border="none";previewImage2.style.border="none"})


    var cart=document.createElement("button")
    cart.innerHTML="Add to Cart"
    cart.classList="cartcont"
    righttColown.appendChild(cart);
    var count=0;
    var prodObj = {
        "id": response[productId-1].id,
        "brand":response[productId-1].brand,
        "name":response[productId-1].name,
        "price":response[productId-1].price,
        "preview":response[productId-1].preview,
        "isAccessory":response[productId-1].isAccessory,
        "count":count
    }
    //console.log(response[productId-1].id);
    //cart.addEventListener("click",function(){
    //    count++;
     //   localStorage.setItem("Productdetails",JSON.stringify(prodObj))
       
       
       
      //  })
     
      
      cart.addEventListener("click",function(){
        
            
            
                
        count++;
      var detailsFromLocalStorage = localStorage.getItem("proObj");
      if(detailsFromLocalStorage === null || detailsFromLocalStorage === undefined) { 
          var detailsArr = [];
          detailsArr.push({id: response[productId-1].id,
          brand:response[productId-1].brand,
          name:response[productId-1].name,
          price:response[productId-1].price,
          preview:response[productId-1].preview,
          isAccessory:response[productId-1].isAccessory,
          "count":count});
    
          localStorage.setItem("proObj", JSON.stringify(detailsArr));
      } else {
          detailsFromLocalStorage = JSON.parse(localStorage.getItem("proObj"));
          detailsFromLocalStorage.push({id:response[productId-1].id,
              brand:response[productId-1].brand,
              name:response[productId-1].name,
              price:response[productId-1].price,
              preview:response[productId-1].preview,
              isAccessory:response[productId-1].isAccessory,
              "count":count})
          localStorage.setItem(detailsArr, JSON.stringify(detailsFromLocalStorage));
      }
    
     
    })
})
})
