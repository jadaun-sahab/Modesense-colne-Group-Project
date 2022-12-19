let bag = [];
fetch("API/women.json")
.then((res)=>res.json())
.then((data)=>{
    bag=data;
    displayData(bag);
})

let cartarr=[];
function displayData(bag){ 
    let xyz = document.querySelector(".products");
    xyz.innerHTML = "";
    
    bag.forEach((item) => {
        let div=document.createElement("div");
        div.setAttribute("class","product");
        div.innerHTML=
        `<img src="${item.avatar}" alt="${item.avatar}">  
        <p class="title">${item.title}</p>
        <p class="price">
            <span>&#8377;</span>
            <span>${item.price}</span>  
        </p> 
        
        <p class="rating">Rating: ${item.rating}</p>`;
    let btn=document.createElement("button");
    btn.setAttribute("class","button")
    btn.innerText="Add to cart"
    btn.addEventListener("click",function(){
        alert("Product Added To Cart");
        cartarr.push(item)
            localStorage.setItem("cart",JSON.stringify(cartarr));
        });
    div.append(btn);
    xyz.append(div);
})
}