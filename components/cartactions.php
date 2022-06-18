<?php
session_start();
if(isset($_POST['product'])){
    $product = $_POST['product'];
    $product = json_decode($product, true);
    $product_id = $product['ID'];
    $product_price = $product['Price'];
    $product_image = $product['img'];
    $product_display = $product['Display'];
    $product_RAM = $product['RAM'];
    $product_Quantity = $product['Quantity'];
    $Type = $_POST['Type'];
    strtolower($Type);
    switch($Type){
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

    }
    $Cartarray = array($product_id=>array('name'=>$product_name,'code'=>$product_id,'price'=>$product_price+,'quantity'=>1,'image'=>$product_image,'description'=>$product_description));
/*
Add and correctly stringify the array to ajax before it being sent to the cart.
Add check to see if item is in the cart already
Add types to correctly Add/update if nessary with the php counter parts. 16/6/2022
*/ 
}