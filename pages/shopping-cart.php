<?php 
session_start();
print_r($_SESSION['Cart']);
if (isset($_POST['action']) && $_POST['action']=="remove"){
    if(!empty($_SESSION["Cart"])) {
        foreach($_SESSION["Cart"] as $key => $value) {
          if($_POST["ID"] == $key){
          unset($_SESSION["Cart"][$key]);
          global $currentstatus, $price_reduction;
        $currentstatus = "<script type='text/javascript'>Swal.fire({icon: 'success',title: 'Course was removed',text: ' Course has been removed from your cart!'})</script>";
          }
          if(empty($_SESSION["Cart"]))
          unset($_SESSION["Cart"]);
          }		
    }
    }
    
    if (isset($_POST['action']) && $_POST['action']=="change"){
      foreach($_SESSION["Cart"] as &$value){
        if($value['ID'] === $_POST["ID"]){
            $value['quantity'] = 1;
            break; // Stop the loop after we've found the product
        }
    }
          
    }
    
    ?>
<!DOCTYPE html>
<html>
<head>
    <title>Shopping Cart - Burke Ecom</title>
    <?php include '../components/header.php'; ?>
</head>

<body>
<?php     include '../components/navbar.php'; ?>
    <main class="page shopping-cart-page">
        <section class="clean-block clean-cart dark">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Shopping Cart</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p>
                </div>
                <div class="content">
                    <div class="row g-0">
                        <div class="col-md-12 col-lg-8">
                            <div class="items">
                            <?php
                                if(isset($_SESSION["Cart"])){
                                    global $total_price,$sum,$price_reduction ; $total_price = 0;$sum = 0;$price_reduction = 0;
                               foreach ($_SESSION["Cart"] as $item){
                                  $count =-100;
                                   $price_reduction -= $count;
                                ?>
                                <div class="product">
                                    <form method ="POST">
                                    <div class="row justify-content-center align-items-center">
                                        <div class="col-md-3">
                                            <div class="product-image"><img class="img-fluid d-block mx-auto image" name="itemcode" src="<?php echo $item['img']; ?>"></div>
                                        </div>
                                        <div class="col-md-3 product-info"><p class="product-name"name="itemcode"value= "<?php echo $item['ID'];?>" ></p><span class="product-name"><?php echo $item['Name'];?></span>
                                        <input type='hidden' name='action' value="change" />
                                            <div class="product-specs">
                                                <div><span>Brand:&nbsp;</span><span class="value"><?php echo $item['Brand'];?></span></div>
                                            </div>
                                        </div>
                                        <div class="col-6 col-md-2 quantity"><label class="form-label d-none d-md-block" for="quantity">Quantity</label><input type="number" id="number" class="form-control quantity-input" min="1" value="<?php echo $item['Quantity'];?>"></div>
                                        <div class="col-6 col-md-2 price"><span><?php echo "$".$item["Price"]*$item["Quantity"]; ?></span></div>
                                        <div class ="col-6 col-md-2">
                                            <form method='post' action=''>
                                          
                                        <input type='hidden' name='ID' value="<?php echo $item["ID"]; ?>" />
                                        <input type='hidden' name='action' value="remove" />
                                        <div class="remove col-6"><button type='submit' class='remove btn btn-danger'>Remove Item</button></div>
                                          
                                        </form>
                                       
                                </div>
                                        </div>
                                    </div>
                                    </form><hr>                                    
                                <?php
                                 $total_price += ($item["Price"]*$item["Quantity"]);
                                $new_total = $total_price - $price_reduction;
                                  }
                                } else{
                                    echo "<h3>The cart is empty</h3>";
                                }
                                ?>
                            </div>
                        </div>
                        <div class="col-md-12 col-lg-4">
                            <div class="summary">
                                <h3>Summary</h3>
                                <h4><span class="text">Subtotal</span><span class="price"><?php 
                                global $total_price; if(empty($total_price )){echo "No items";}else{ echo "$" .number_format($new_total, 2);}; ?></span></h4>
                                <h4><span class="text">Discount</span><span class="price">$0</span></h4>
                                <h4><span class="text">Total</span><span class="price"><?php 
                                global $total_price; if(empty($total_price )){echo "No items";}else{ echo "$" .number_format($new_total, 2);}; ?></span></h4><button class="btn btn-primary btn-lg d-block w-100" id="checkout-button" type="button">Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php include '../components/footer.php'; ?>
    <?php include '../components/plugins.php'; ?>
</body>

</html>