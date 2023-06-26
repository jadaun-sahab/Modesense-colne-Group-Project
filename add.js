//Accesing all the products from HTML. 

let Id=document.getElementById("id");
let Name=document.getElementById("name");
let Brand=document.getElementById("brand");
let Desc=document.getElementById("description");
let Price=document.getElementById("price");
let Type=document.getElementById("producttype");
let Image=document.getElementById("imageurl");
let AddButton=document.getElementById("Add");
let UpdateButton=document.getElementById("Update");
let GetButton=document.getElementById("Get");
let baseurl="https://63c2fb80b0c286fbe5f73c53.mockapi.io";
let Idvalue=Id.value;
let TotalProductCount=document.getElementById("totalProducts");
let updateimage=document.getElementById("updateImage");

let showbrand=document.getElementById("h3Brand");
let showname=document.getElementById("h3name");
let showprice=document.getElementById("h3price");
let showdesc=document.getElementById("desc");

//Getting the total number of products
fetch(`${baseurl}/Products`)
    .then(res=>res.json())
    .then(data=>{
       TotalProductCount.innerText=data.length
    })

//Adding the new product to API with the help of ID. This is the Create functionality of CRUD operation.

AddButton.addEventListener("click",()=>{
    let obj={
        Brand:Brand.value,
        description:Desc.value,
        price:"$"+Price.value,
        image:Image.value,
        name:Name.value,
        id:Id.value,
        Size:[8,8.5,9,10,10.5,11,13],
        color:["Black"],
        ProductType:Type.value
    };
    console.log(obj)
   
    fetch(`${baseurl}/Products`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>{
        return res.json
    })
    .then((data)=>{
        console.log(data)
        alert("Product Added Succesfully")
    })
})

//Getting the new product from API with the help of ID. This is the Read functionality of CRUD operation.

GetButton.addEventListener("click",()=>{
    let obj={
        id:Id.value
    };
    
    fetch(`${baseurl}/Products/${obj.id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        Brand.value=data.Brand;
        Name.value=data.name;
        Desc.value=data.description;
        Price.value=data.price;
        Type.value=data.ProductType;
        Image.value=data.image;
        updateimage.src=data.image;
        showbrand.innerText=data.Brand;
        showname.innerText=data.name;
        showdesc.innerText=data.description;
        showprice.innerText=data.price;

    })
})

//Updating the new product to API with the help of ID. This is the Update functionality of CRUD operation.

UpdateButton.addEventListener("click",()=>{
    let obj={
        Brand:Brand.value,
        description:Desc.value,
        price:"$"+Price.value,
        image:Image.value,
        name:Name.value,
        id:Id.value,
        Size:[8,8.5,9,10,10.5,11,13],
        color:["Black"],
        ProductType:Type.value
    };
    console.log(obj)
   
    fetch(`${baseurl}/Products/${obj.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>{
        return res.json
    })
    .then((data)=>{
       alert("Product Updated Succesfully")
    })
    .catch((error)=>{
        console.log(error)
    })
})




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