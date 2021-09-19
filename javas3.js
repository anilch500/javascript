var localStorage1=JSON.parse(localStorage.getItem("proObj"));
var main=document.getElementById("card-list-order")
var itemcount=document.getElementById("item-count")
var totalamount=document.getElementById("total-amount-order")
console.log(localStorage1.length)
for(i=0;i<=localStorage1.length;i++){

    
    var card = document.createElement('div');
        card.classList.add('checkout-card');

        var firstInnerDiv = document.createElement('div');
        var productImg = document.createElement('img');
        productImg.classList.add('checkout-product-img');
        productImg.src = localStorage[i].preview; 
        firstInnerDiv.appendChild(productImg);

        var secondInnerDiv = document.createElement('div');
        var productName = document.createElement('h4');
        productName.innerHTML = localStorage[i].name;
        var productCount = document.createElement('p');
        productCount.innerHTML = 'x'+localStorage[i].count;
        var amountLabel = document.createElement('span');
        amountLabel.innerHTML = 'Amount: Rs ';
        var amountSpan = document.createElement('span');
        amountSpan.innerHTML = parseInt(localStorage[i].count) * parseInt(localStorage[i].price);
        var productAmount = document.createElement('p');
        productAmount.appendChild(amountLabel);
        productAmount.appendChild(amountSpan);
        secondInnerDiv.appendChild(productName);
        secondInnerDiv.appendChild(productCount);
        secondInnerDiv.appendChild(productAmount);

        card.appendChild(firstInnerDiv);
        card.appendChild(secondInnerDiv);
        main.appendChild(card);



}
