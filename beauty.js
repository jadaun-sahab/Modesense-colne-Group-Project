    let bag = [];
fetch("API/beauty.json")
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

document.querySelector("#reset").addEventListener("click",function(event){
    document.querySelector("#brand").value = "Brands";
    document.querySelector("#categories").value = "Categories";
    document.querySelector("#price").value = "Price";
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

document.querySelector("#categories").addEventListener("click",function(event){
    if(document.querySelector("#categories").value == "Categories"){
        displayData(bag);
    }     
});

document.querySelector("#categories").addEventListener("change",function(event){
    let selected = document.querySelector("#categories").value;
    let filteredData = bag.filter(function(element){
        return element.categories == selected;
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


