let bag = [];
fetch("API/men.json")
.then((res)=>res.json())
.then((data)=>{
    bag=data;
    displayData(bag);
})

function displayData(bag){ 
    let xyz = document.querySelector(".products");
    xyz.innerHTML = "";
    
    let newArray = bag.map((item) => {
        return `<div class="product">
        <img src="${item.avatar}" alt="${item.avatar}">  
        <p class="title">${item.title}</p>
        <p class="price">
            <span>&#8377;</span>
            <span>${item.price}</span>  
        </p> 
        
        <p class="rating">Rating: ${item.rating}</p>
        <button class="button" style="font-size:17px">Add to cart<i class="fa fa-shopping-cart"></i></button>
    </div>`;
    })
    
    xyz.innerHTML = newArray.join("");
}

document.querySelector(".products").innerHTML = bag;