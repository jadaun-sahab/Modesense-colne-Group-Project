let bag = [];
fetch("API/beauty.json")
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
        <p class="qty">Qty: ${item.qty}</p>
        <p class="rating">Rating: ${item.rating}</p>
        <button class="button" style="font-size:17px">Add to cart<i class="fa fa-shopping-cart"></i></button>
    </div>`;
    })
    
    xyz.innerHTML = newArray.join("");
}

document.querySelector(".products").innerHTML = bag;

document.querySelector("#reset").addEventListener("click",function(event){
        displayData(bag);    
});

document.querySelector("#brand").addEventListener("click",function(event){
    if(document.querySelector("#brand").value == "Brands"){
        displayData(bag);
    }     
});

document.querySelector("#brand").addEventListener("change",function(event){
    let selected = document.querySelector("#brand").value;
    let filteredData = bag.filter(function(element){
        return element.brand == selected;
    });
        displayData(filteredData);
});

document.querySelector("#categories").addEventListener("change",function(event){
    let selected = document.querySelector("#categories").value;
    let filteredData = bag.filter(function(element){
        return element.categories == selected;
    });
        displayData(filteredData);
});

document.querySelector("#rating").addEventListener("change",function(event){
    let selected = document.querySelector("#rating").value;
    let filteredData = bag.filter(function(element){
        if(element.rating)
        return element.rating == selected;
    });
        displayData(filteredData);
});

function handleSort(){
    let selected = document.querySelector("#price").value;
    if(selected=="HTL"){
        bag.sort((a,b)=>b.price-a.price);
    }
    if(selected=="LTH"){
        bag.sort((a,b)=>a.price-b.price);
    }
    displayData(bag);
}
    
function search(){
    let query = document.querySelector("#search").value;
    console.log(query);
    let newData = bag.filter(function(element){
        return element.title.toLowerCase().includes(query.toLowerCase());
    });
    console.log(newData);
    displayData(newData);
}


