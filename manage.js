//Catching the element for product details from HTML.
let tbody=document.getElementById("ProductDetails");
let image="/images/delete.png";
let baseurl="https://63c2fb80b0c286fbe5f73c53.mockapi.io"

// Fetching Products Details From API.
fetch("https://63c2fb80b0c286fbe5f73c53.mockapi.io/Products")
.then((res)=>{
    return res.json();
})
.then((actData)=>{
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
        Image.setAttribute("src","images/delete.jpg");

        //Creating delete functionality by adding onclick on bin image at right.
        Imagetd.addEventListener("click",()=>{
            // console.log(product.id);
            fetch(`${baseurl}/Products/${product.id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                }
            })
            .then((res)=>{
                return res.json
            })
            .then((data)=>{
               alert("Product Deleted Succesfully")
            })
            .catch((error)=>{
                console.log(error)
            })
        })


        //Appending created elements
        Imagetd.append(Image);
        div.append(ID,Brand,Name,ProductType,Price,Imagetd);
        tbody.append(div);
    }) 
}

