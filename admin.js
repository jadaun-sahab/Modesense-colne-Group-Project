//Accesing all the products from HTML. 
let baseurl="https://63c2fb80b0c286fbe5f73c53.mockapi.io"
let TotalProductCount=document.getElementById("totalProducts")

//Getting the total number of products available and displaying it.
fetch(`${baseurl}/Products`)
    .then(res=>res.json())
    .then(data=>{
       TotalProductCount.innerText=data.length
})

var MenuItem = document.getElementById("sidebar");

MenuItem.style.display = "none";

function menutoggle() {
  if (MenuItem.style.display == "none")
   MenuItem.style.display = "block";
  else {
    MenuItem.style.display = "none";
  }
}
