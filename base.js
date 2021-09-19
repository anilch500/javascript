var detailsFromLocalStorage = JSON.parse(localStorage.getItem("proObj"))
var count=document.getElementById("cart-count")
count=0;
for(i=0;i<detailsFromLocalStorage;i++){
  count=count+detailsFromLocalStorage[i].count

}
count.innerHTML=count;
