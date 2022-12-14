let http = new XMLHttpRequest();
http.open('get','API/beauty.json',true);
http.send();
http.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        let products = JSON.parse(this.responseText);
        let output = "";
        for(let item of products){
            output +=  `
            <div class="product">
                <img src="${item.avatar}" alt="${item.avatar}">  
                <p class="title">${item.title}</p>
                <p class="price">
                    <span>&#8377;</span>
                    <span>${item.price}</span>  
                </p> 
                <p class="qty">Qty: ${item.qty}</p>
                <p class="rating">Rating: ${item.rating}</p>
                <p class="id">${item.id}</p>
                <button class="button" style="font-size:17px">Add to <i class="fa fa-shopping-cart"></i></button>
            </div>
            `;
        }
        document.querySelector(".products").innerHTML = output;
    }
}
console.log("abc")

