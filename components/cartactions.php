<?php
include '../components/data/datacontroller.php';
$Object = new PreDB();
session_start();
if(isset($_POST['Type'])){
    $Type = $_POST['Type'];
    $Searching = $_POST['Object'];
    $error = '';
    $newType = $Type[0];
    strtolower($newType);
    switch($newType){
        case 'add':
            if(isset($_SESSION['cart'])){
                $cart = $_SESSION['cart'];
                $cart[$product_id] = array(
                    'ID' => $product_id,
                    'Price' => $product_price,
                    'img' => $product_image,
                    'Display' => $product_display,
                    'RAM' => $product_RAM,
                    'Quantity' => $product_Quantity
                );
                $_SESSION['cart'] = $cart;
            }else{
                $cart = array();
                $cart[$product_id] = array(
                    'ID' => $product_id,
                    'Price' => $product_price,
                    'img' => $product_image,
                    'Display' => $product_display,
                    'RAM' => $product_RAM,
                    'Quantity' => $product_Quantity
                );
                $_SESSION['cart'] = $cart;
            }
            break;
        case 'remove':
            if(isset($_SESSION['cart'])){
                $cart = $_SESSION['cart'];
                unset($cart[$product_id]);
                $_SESSION['cart'] = $cart;
            }
            break;
        case 'update':
            if(isset($_SESSION['cart'])){
                $cart = $_SESSION['cart'];
                $cart[$product_id]['Quantity'] = $product_Quantity;
                $_SESSION['cart'] = $cart;
            }
            break;
        case 'Category':
                $query = "SELECT * FROM products WHERE product_category = '$Searching'";
                $result = $Object->runQuery($query);
                $products = array();
                if($result){
                    foreach ($result as $row){
                        $product_name = $row['product_name'];
                        $product_price = $row['product_price'];
                        $product_image = $row['product_img'];
                        $product_display = $row['product_display'];
                        $product_RAM = $row['product_ram'];
                        $product_stars = $row['product_stars'];
                        $product_id = $row['UID'];
                        $product_halfstars = $row['product_halfstars'];
                        $product_camera = $row['product_camera'];
                        $product_summary = $row['product_summary'];
                        $product_category = $row['product_category'];
                        $product_brand = $row['product_brand'];
                        $product_description = $row['product_description'];
                        $product_os = $row['product_os'];
                     $fixer = array(
                        'ID' => $product_id,
                        'Name' => $product_name,
                        'Price' => $product_price,
                        'img' => $product_image,
                        'Display' => $product_display,
                        'RAM' => $product_RAM,
                        'Stars' => $product_stars,
                        'HalfStars' => $product_halfstars,
                        'Camera' => $product_camera,
                        'Summary' => $product_summary,
                        'Category' => $product_category,
                        'Brand' => $product_brand,
                        'Description' => $product_description,
                        'OS' => $product_os
                    );
                    array_push( $products,$fixer);


                    }
               $response = json_encode($products);
            }else{
                $Object->sendOutput(json_encode(array('error' => 'No results found')));
            } 
            if($error){
                $Object->sendOutput(json_encode(array('error' => $error)));
            }
            else{
             //$Object->sendOutput($response, array('Content-Type: application/json', 'Access-Control-Allow-Origin: *', 'HTTP 1.1/ 200 OK'));
             echo $response;
            }
            break;
        }
    }
    if (isset($_GET['add'])){
        $productid = $_GET['UID'];
        $query = "SELECT * FROM products WHERE UID = '$productid'";
        $row = $Object->Query($query);
        $result = mysqli_fetch_assoc($row);
        $product_name = $result['product_name'];
        $product_price = $result['product_price'];
        $product_image = $result['product_img'];
        $product_brand = $result['product_brand'];
        $product_Qty = $_GET['Quantity'];
        $cartArray = array( $productid => array(
            'ID' => $productid,
            'Name' => $product_name,
            'Price' => $product_price,
            'img' => $product_image,
            'Brand' => $product_brand,
            'Quantity' => $product_Qty
        ));
        if(empty($_SESSION["Cart"])) {
            $_SESSION["Cart"] = $cartArray;
        } else{
            $array_keys = array_keys($_SESSION["Cart"]);
    if(in_array($productid,$array_keys)) {
        $product_Quantity = $_SESSION["Cart"][$productid]["Quantity"];
        $product_Quantity += $product_Qty;
        $_SESSION["Cart"][$productid]["Quantity"] = $product_Quantity;
    } else{
        $_SESSION["Cart"] = array_merge($_SESSION["Cart"],$cartArray);
        }
    }
}
       // $Cartarray = array($product_id=>array('name'=>$product_name,'code'=>$product_id,'price'=>$product_price+,'quantity'=>1,'image'=>$product_image,'description'=>$product_description));
/*
Add and correctly stringify the array to ajax before it being sent to the cart.
Add check to see if item is in the cart already
Add types to correctly Add/update if nessary with the php counter parts. 16/6/2022
*/ 
    ?>
