
const Foodlist =[{ID:"Iphone01",Name :"IPhone", Price: 250,  Stars:5,HalfStar : 0,img : '../assets/img/tech/image1.jpg',Description : "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera.",Display :"6.1",Camera : "12MP Ultra Wide", OS : "IOS", RAM : "6GB", Summary : "The iPhone is a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device with a touchscreen interface. The iPhone runs the iOS operating system, and in 2021 when the iPhone 13 was introduced, it offered up to 1 TB of storage and a 12-megapixel camera."},
{ID:"Motorola01", Name :"Motorola" , Price: 300, Stars:4,HalfStar : 1, img : '../assets/img/items/moto.jfif',Description : "Motorola is a multinational corporation that manufactures consumer electronics, computer hardware, and software. It is the largest manufacturer of consumer electronics in the world, and the second largest in the United States. It is also the largest manufacturer of consumer electronics in the United States.",Display :"5.5",Camera : "12MP Ultra Wide", OS : "Android", RAM : "12GB", Summary : "Motorola is a multinational corporation that manufactures consumer electronics, computer hardware, and software. It is the largest manufacturer of consumer electronics in the world, and the second largest in the United States. It is also the largest manufacturer of consumer electronics in the United States."}/*,
{ID: "Samsung01",Name :"Samsung" , Price: 400,  Stars:3,HalfStar : 1,   img : '../assets/img/items/samsung.jpg',Description : "Samsung is a South Korean multinational conglomerate headquartered in Seoul. It is the largest South Korean company by market capitalization, and the largest in the world by revenue.",Display :"5.5",Camera : "12MP Ultra Wide", OS : "Android", RAM : "8GB",Summary : "Samsung is a South Korean multinational conglomerate headquartered in Seoul. It is the largest South Korean company by market capitalization, and the largest in the world by revenue."} */];

var shoppingcart = document.getElementById("main");
var cartbutton = document.getElementById("cart");
//var storage = localStorage;
//storage.setItem("pages", JSON.stringify(pages));

var buttonstate = false;
var cartitems =[];
let app ={
    initialize: function(){
      $(document).ready(function () {
        app.applicationready();
        console.log(localStorage.getItem('product'));
      });
    },
    applicationready: function(){
    app.createitems();
},
    createitems: function(){
        var container = document.getElementById("app");
        if (!container) {
          //  app.productview();
            console.log("start");
    }else{
        for(var i = 0; i < Foodlist.length; i++)
        {
            var food = Foodlist[i];
            var div = document.createElement("div");
            div.classList.add("col-12");
            div.classList.add("col-md-6");
            div.classList.add("col-lg-4");
            div.classList.add("items");
            var item = `
            <div class="clean-product-item">
            <div class="image"><img src="${food.img}" class="card-img-top"></div>
            <div class="product-name">${food.Name}</div>
            <div class="about"> 
                <div class="rating"> `;
            if(food.Stars > 0)
            {
                for(var j = 0; j < food.Stars; j++){
                item += `<img src="../assets/img/star.svg">`;
            }}else{}
            if(food.HalfStar == 1)
            {
                item += `<img src="../assets/img/star-half-empty.svg">`;
            }
            item += `</div>`;
            item += `<div class="price"><h3>${food.Price}</h3> </div></div><div class="product-name" >
            <span><button class="btn btn-primary btn-sm" type="button" onclick="app.productpush(\``+food.ID+ `\`)">View item</button></span></div></div></div></div> `;
            div.innerHTML = item;
            container.appendChild(div);
    }
}
},  addtocart : function(id){
   // alert(id + " added to cart");
    Foodlist.forEach((key, value) =>{
        //console.log(key.ID);
        if(id ==  key.ID){
           if(cartitems.find(x => x.ID === id)){
               
               return  alertify.error(key.Name +' is already in cart'); 
           }
           else{
               var newly = 
                  {
                          ID: key.ID,
                          Name : key.Name,
                            Price: key.Price,
                            img : key.img,
                            Display : key.Display,
                            RAM : key.RAM,
                            Quantity : 1,
                   }
               ;
               alertify.notify(`${id} added to cart`, 'success', 3, function(){  console.log(`${id} was added`); });
                cartitems.push(newly);
                localStorage.setItem('cart', JSON.stringify(cartitems));
                var exported = JSON.stringify(newly);
                app.pushtocart('ADD',exported);
           }
        }
    });
},
    showcart: function(){
        var cart = document.getElementById("cart");
        var items = document.getElementById("chartshow");
        cart.innerHTML = "Cart Items " + `(${cartitems.length})`;
        var cartlist ="";
        cartlist += ` 
        <table class="table">
        <thead>
        <tr>
        <th scope="col">Item Image</th>
        <th scope="col">Item Name</th>
        <th scope="col">Item Price</th>
        <th scope="col">Item Description </th>
        <th scope="col">Item Action</th> 
        </thead>
        <tbody>`;
        cartitems.forEach((key, value) =>{
            cartlist += `<tr><th scope="row"><img src="${key.img}" class="card-img" style="height = 20%; width = 20%;" </th>
            <td>${key.ID}</td>
            <td>${key.Price}</td>
            <td>${key.Description}</td>
            <td><button onclick="app.removefromcart(\``+key.ID+ `\`)" class="btn btn-danger">Remove</button></td></tr>`;
        });
        cartlist += `</tbody></table> <button onclick="app.Routes(\``+"cart"+`\`)" class="btn btn-info">To Cart</button><button onclick="app.hidecart()" class="btn btn-primary close">Close</button>`;
        cartbutton.style.display = "none";
        if(cartitems.length == 0){
            cartlist = "Cart is empty";
        }else{
            items.innerHTML = cartlist;}
    },
    hidecart: function(){
        var items = document.getElementById("chartshow");
        cartbutton.style.display = "block";
        items.innerHTML = "";
    },
    removefromcart: function(id){
        cartitems.forEach((key, value) =>{
            if(id ==  key.ID){
                alertify.notify(`${id}  was removed from cart`, 'error', 5, function(){  console.log('Item removed'); });
                cartitems.splice(value, 1);
            }
        });
        app.showcart();
    },
    loadcart: function(){
        const cart = JSON.parse(storage.getItem("cart"));
        for(var i = 0; i < cart.length; i++)
        {
            var item = cart[i];
            var div = document.createElement("div");
            div.classList.add("product");
            div.innerHTML = `<div class="row justify-content-center align-items-center">
            <div class="col-md-3">
                <div class="product-image"><img class="img-fluid d-block mx-auto image" src="${item.img}"></div>
            </div>
            <div class="col-md-5 product-info"><a class="product-name" href="#">${item.Name}</a>
                <div class="product-specs">
                    <div><span>Display:&nbsp;</span><span class="value">${item.display}h</span></div>
                    <div><span>RAM:&nbsp;</span><span class="value">${item.RAM}</span></div>
                </div>
            </div>
            <div class="col-6 col-md-2 quantity"><label class="form-label d-none d-md-block" for="quantity">Quantity</label><input type="number" id="number" class="form-control quantity-input" value="1"></div>
            <div class="col-6 col-md-2 price"><span>${item.Price}</span></div>
        </div>
    </div>
            <button onclick="app.removefromcart(\``+item.ID+ `\`)" class="btn btn-danger">Remove from cart</button></div></div>`;
            shoppingcart.appendChild(div);
        }
    },
    getcartcount: function(){
        var cart = document.getElementById("cart");
        if(cartitems.length  != 0){
        cart.innerHTML =` Cart (items ${cartitems.length})`;
    } else{
        cart.innerHTML =` Cart (No items in the cart)`;
    }
},
deleteElements : function(){
    const div2 = document.querySelectorAll('.First');
    if (typeof (div2) != 'undefined' && div2 != null) {
        div2.forEach(obj => {obj.remove();});}
    },
    productpush : function(id){
        localStorage.setItem('product', id);
        window.location.href = "product-page.php";
    },      
     productview : function(){
        var Contained = document.getElementById("contain");
        var response = localStorage.getItem('product');
        console.log(response);
        console.log(1);
        var div = document.createElement("div");
        if(response == undefined || response == null){}
        else{
            div.classList.add("product-info");
            console.log(2);
        var product = Foodlist.find(x => x.ID === response);
        var productviewed = `
        <div class="row">
            <div class="col-md-6">
                <div class="gallery">
                    <div id="product-preview" class="vanilla-zoom">
                        <div class="zoomed-image"></div>
                        <div class="sidebar"><img class="img-fluid d-block small-preview" src="${product.img}"><img class="img-fluid d-block small-preview" src="${product.img}"><img class="img-fluid d-block small-preview" src="${product.img}"></div>
                    </div>
                </div>
            </div>
            <div class="col-md-6">
                <div class="info">
                    <h3 class="mt-2">${product.Name}</h3>
                    <div class="rating"> `;
                    if(product.Stars > 0)
                    {
                        for(var j = 0; j < product.Stars; j++){
                        productviewed += `<img src="../assets/img/star.svg">`;
                    }}else{}
                    if(product.HalfStar == 1)
                    {
                        productviewed += `<img src="../assets/img/star-half-empty.svg">`;
                    }
                    productviewed += `</div>
                    <div class="price">
                        <h3>$${product.Price}</h3>
                    </div>  <div class="col-6 col-md-2 quantity"><label class="form-label d-none d-md-block" for="quantity">Quantity</label><input type="number" id="number" class="form-control quantity-input mb-4" min="1" value="1"></div>
                    <button class="btn btn-primary" type="button" onclick="app.addtocart(\``+product.ID+ `\`)"><i class="icon-basket" ></i>Add to Cart</button>
                    <div class="summary">
                        <p>${product.Summary}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="product-info">
        <div>
            <ul class="nav nav-tabs" role="tablist" id="myTab">
                <li class="nav-item" role="presentation"><a class="nav-link active" role="tab" data-bs-toggle="tab" id="description-tab" href="#description">Description</a></li>
                <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" id="specifications-tabs" href="#specifications">Specifications</a></li>
                <li class="nav-item" role="presentation"><a class="nav-link" role="tab" data-bs-toggle="tab" id="reviews-tab" href="#reviews">Reviews</a></li>
            </ul>
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active description" role="tabpanel" id="description">
                    <p>${product.Description}</p>
                    <div class="row">
                        <div class="col-md-5">
                            <figure class="figure"><img class="img-fluid figure-img" src="${product.img}"></figure>
                        </div>
                        <div class="col-md-7">
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-7 right">
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div class="col-md-5">
                            <figure class="figure"><img class="img-fluid figure-img" src="${product.img}"></figure>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade specifications" role="tabpanel" id="specifications">
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <tbody>
                                <tr>
                                    <td class="stat">Display</td>
                                    <td>${product.Display}</td>
                                </tr>
                                <tr>
                                    <td class="stat">Camera</td>
                                    <td>${product.Camera}</td>
                                </tr>
                                <tr>
                                    <td class="stat">RAM</td>
                                    <td>${product.RAM}</td>
                                </tr>
                                <tr>
                                    <td class="stat">OS</td>
                                    <td>${product.OS}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="tab-pane fade" role="tabpanel" id="reviews">
                    <div class="reviews">
                        <div class="review-item">
                            <div class="rating"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star-empty.svg"></div>
                            <h4>Incredible product</h4><span class="text-muted"><a href="#">John Smith</a>, 20 Jan 2018</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="reviews">
                        <div class="review-item">
                            <div class="rating"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star-empty.svg"></div>
                            <h4>Incredible product</h4><span class="text-muted"><a href="#">John Smith</a>, 20 Jan 2018</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div class="reviews">
                        <div class="review-item">
                            <div class="rating"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star-empty.svg"></div>
                            <h4>Incredible product</h4><span class="text-muted"><a href="#">John Smith</a>, 20 Jan 2018</span>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="clean-related-items">
        <h3>Related Products</h3>
        <div class="items">
            <div class="row justify-content-center">
                <div class="col-sm-6 col-lg-4">
                    <div class="clean-related-item">
                        <div class="image"><a href="#"><img class="img-fluid d-block mx-auto" src="${product.img}"></a></div>
                        <div class="related-name"><a href="#">Lorem Ipsum dolor</a>
                            <div class="rating"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star-half-empty.svg"><img src="../assets/img/star-empty.svg"></div>
                            <h4>$300</h4>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="clean-related-item">
                        <div class="image"><a href="#"><img class="img-fluid d-block mx-auto" src="${product.img}"></a></div>
                        <div class="related-name"><a href="#">Lorem Ipsum dolor</a>
                            <div class="rating"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star-half-empty.svg"><img src="../assets/img/star-empty.svg"></div>
                            <h4>$300</h4>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="clean-related-item">
                        <div class="image"><a href="#"><img class="img-fluid d-block mx-auto" src="../assets/img/tech/image2.jpg"></a></div>
                        <div class="related-name"><a href="#">Lorem Ipsum dolor</a>
                            <div class="rating"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star-half-empty.svg"><img src="../assets/img/star-empty.svg"></div>
                            <h4>$300</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }
    console.log(3);
    div.insertAdjacentHTML('beforeend', productviewed);
    Contained.appendChild(div);
    console.log("end");},
    pushtocart: function(type,product){
    $.ajax({
        url: "../components/cartactions.php",
        method: "POST",
        data: {
            Type : type,
            product: product
        },
        success: function(data){
            console.log(data);
        }
    ,
});
}
,
 Category: function(checkbox){
    var categories =document.getElementsByName('Categories');
    categories.forEach((category)=>{
        if (category !== checkbox){
            category.checked = false;
    }});
},
Brand : function(checkbox){
    var brands =document.getElementsByName('Brands');
    brands.forEach((brand)=>{
        if (brand !== checkbox){
            brand.checked = false;
    }});
}
}
app.initialize();


//document.getElementById("cart").addEventListener("click",app.showcart)