
var clothingGrid = document.getElementById("clothing-grid");
var accessoryGrid = document.getElementById("accessory-grid");

$.get("https://5d76bf96515d1a0014085cf9.mockapi.io/product" , function (response){
  console.log(response);
  for(var i=0; i<response.length; i++){
    var productCard = document.createElement("div");
    productCard.className = "product-card"
    ;
    var productLink = document.createElement('a');
    productLink.href = '/javas2.html?p='+response[i].id;

    var previewImage = document.createElement("img");
    previewImage.className = "preview-image"
    previewImage.src = response[i].preview;
    previewImage.alt = response[i].name
    productCard.appendChild(productLink);
    productLink.appendChild(previewImage);

    var productInfoWrapper = document.createElement("div");
    productInfoWrapper.className = "product-info-wrapper";

    var productName = document.createElement("h3");
    productName.className = "product-name";
    productName.innerHTML = response[i].name;
    productInfoWrapper.appendChild(productName);

    var productBrand = document.createElement("p");
    productBrand.className = "product-brand";
    productBrand.innerHTML = response[i].brand;
    productInfoWrapper.appendChild(productBrand);

    var productPrice = document.createElement("p");
    productPrice.className = "product-price";
    productPrice.innerHTML = "Rs " + response[i].price;
    productInfoWrapper.appendChild(productPrice);

    productCard.appendChild(productInfoWrapper);

    if(response[i].isAccessory) {
        accessoryGrid.appendChild(productCard);
    } else {
        clothingGrid.appendChild(productCard);
    }
  }

 
}
)

 