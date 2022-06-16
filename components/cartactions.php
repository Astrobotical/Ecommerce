<?php
session_start();

if(isset($_POST['product'])){
    $product = $_POST['product'];
    $product = json_decode($product, true);
    $product_id = $product['ID'];
    $product_name = $product['name'];\
    $product_price = $product['price'];
    $product_image = $product['image'];
    $product_description = $product['description'];
    $Cartarray = array($product_id=>array('name'=>$product_name,'code'=>$product_id,'price'=>$product_price+,'quantity'=>1,'image'=>$product_image,'description'=>$product_description));
/*
Add and correctly stringify the array to ajax before it being sent to the cart.
Add check to see if item is in the cart already
Add types to correctly Add/update if nessary with the php counter parts. 16/6/2022
*/ 
}