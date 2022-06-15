
const Foodlist =[{ID:"IPhone", Price: 250,  Stars:5,HalfStar : 0,img : '../assets/img/items/iphone.jfif'},
{ID: "Motorola" , Price: 300, Stars:4,HalfStar : 1, img : '../assets/img/items/moto.jfif'},
{ID: "Samsung" , Price: 400,  Stars:3,HalfStar : 1,   img : '../assets/img/items/samsung.jpg'}];
var container = document.getElementById("app");
var shoppingcart = document.getElementById("main");
var cartbutton = document.getElementById("cart");
var storage = window.localStorage;
//storage.setItem("pages", JSON.stringify(pages));

var buttonstate = false;
var cartitems =[];
let app ={
    initialize: function(){
      $(document).ready(function () {
        app.applicationready();
      });
    },
    applicationready: function(){
    app.createitems();
},
    createitems: function(){
        if (typeof (container) == 'undefined' || container === null) {
            app.productview();
    }else{
        for(var i = 0; i < Foodlist.length; i++)
        {
            var food = Foodlist[i];
            var div = document.createElement("div");
            div.classList.add("col-12");
            div.classList.add("col-md-6");
            div.classList.add("col-lg-4");
            var item = `
            <div class="clean-product-item">
            <div class="image"><img src="${food.img}" class="card-img-top"></div>
            <div class="product-name">${food.ID}</div>
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
               
               return  alertify.error(id +' is already in cart'); 
           }
           else{
               var newly = 
                  {
                          ID: key.ID,
                            Price: key.Price,
                            Description: key.Description,
                            img : key.img
                   }
               ;
               alertify.notify(`${id} added to cart`, 'success', 3, function(){  console.log(`${id} was added`); });
               var cart = document.getElementById("cart");
                cartitems.push(newly);
                storage.setItem("cart", JSON.stringify(cartitems));
                app.deleteElements();
               app.createitems();
                if(cartitems.length  != 0){
                    cart.innerHTML =` Cart (items ${cartitems.length})`;
                } else{
                    cart.innerHTML =` Cart (No items in the cart)`;
                }
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
    Routes : function(location){
        pages.forEach((key, value) =>{
            if(location == key.Name){
               return window.location.href = key.Location;
            }
        });
    },
    loadcart: function(){
        const cart = JSON.parse(storage.getItem("cart"));
        for(var i = 0; i < cart.length; i++)
        {
            var food = cart[i];
            var div = document.createElement("div");
            div.classList.add("card");
            div.innerHTML = `<div class="card">
            <img src="${food.img}" class="card-img-top style="height: 40%; width:50%">
            <div class="card-body">
            <h4>${food.ID}</h4>
            <p class="card-text">$ ${food.Price}</p>
            <p>${food.Description}</p>
            <button onclick="app.removefromcart(\``+food.ID+ `\`)" class="btn btn-danger">Remove from cart</button></div></div>`;
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
        storage.setItem("product", id);
        window.location.href = "product-page.php";
    },      
     productview : function(){
        var Contained = document.getElementById("app");
        var response = storage.getItem("product");
        var div = document.createElement("div");
        if(response == undefined || response == null){}
        else{
            div.classList.add("product-info");
        var product = Foodlist.find(x => x.ID === response);
        var productviewed ="";
        productviewed += `
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
                    <h3>${product.ID}</h3>
                    <div class="rating"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star.svg"><img src="../assets/img/star-half-empty.svg"><img src="../assets/img/star-empty.svg"></div>
                    <div class="price">
                        <h3>${product.Price}</h3>
                    </div><button class="btn btn-primary" type="button"><i class="icon-basket"></i>Add to Cart</button>
                    <div class="summary">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec augue nunc, pretium at augue at, convallis pellentesque ipsum. Vestibulum diam risus, sagittis at fringilla at, pulvinar vel risus. Vestibulum dignissim eu nulla eu imperdiet. Morbi mollis tellus a nunc vestibulum consequat. Quisque tristique elit et nibh dapibus sodales. Nam sollicitudin a urna sed iaculis.</p>
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
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
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
                                    <td>5.2"</td>
                                </tr>
                                <tr>
                                    <td class="stat">Camera</td>
                                    <td>12MP</td>
                                </tr>
                                <tr>
                                    <td class="stat">RAM</td>
                                    <td>4GB</td>
                                </tr>
                                <tr>
                                    <td class="stat">OS</td>
                                    <td>iOS</td>
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
    div.innerHTML = productviewed;
    Contained.appendChild(div);}
};
app.initialize();
//document.getElementById("cart").addEventListener("click",app.showcart)