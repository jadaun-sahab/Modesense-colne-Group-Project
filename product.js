//Catching the element for product details from HTML.
let tbody=document.getElementById("ProductDetails");

// Fetching Products Details From API.
fetch("https://63c2fb80b0c286fbe5f73c53.mockapi.io/Products")
.then((res)=>{
    return res.json();
})
.then((actData)=>{
    console.log(actData);
    Products(actData)
})
.catch((error)=>{
    console.log(error)
})

// Creating DOM Manipulation to display the product details.
function Products(Data){

    // Creating elements for each products.
    Data.forEach(function(product,name){
        let div=document.createElement("tr");
        let ID=document.createElement("td");
        ID.innerText=product.id;
        let Brand=document.createElement("td");
        Brand.innerText=product.Brand;
        let Name=document.createElement("td");
        Name.innerText=product.name;
        let ProductType=document.createElement("td");
        ProductType.innerText=product.ProductType;
        let Price=document.createElement("td");
        Price.innerText=product.price;
        let Imagetd=document.createElement("td");
        let Image=document.createElement("img");
        Image.setAttribute("src",product.image);

        //Appending created elements
        Imagetd.append(Image);
        div.append(ID,Brand,Name,ProductType,Price,Imagetd);
        tbody.append(div);
    })
}


// js for sidebar toogle button



var MenuItem = document.getElementById("sidebar");

MenuItem.style.display = "none";

function menutoggle() {
  if (MenuItem.style.display == "none")
   MenuItem.style.display = "block";
  else {
    MenuItem.style.display = "none";
  }
}