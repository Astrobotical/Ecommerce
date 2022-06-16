<?php 
session_start();
_SESSION['cart'] = array();
?>
<!DOCTYPE html>
<html>

<head>
    <title>Product - Burke Ecom</title>
    <?php include '../components/header.php'; ?>
</head>

<body>
<?php include '../components/navbar.php'; ?>
    <main class="page product-page">
        <section class="clean-block clean-product dark">
            <div class="container">
                <div class="block-heading"><h2 class="text-info">Product Page</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc quam urna, dignissim nec auctor in, mattis vitae leo.</p></div>
                <div class="block-content" id="contain">
                    
                </div>
            </div>
        </section>
    </main>
    <?php include '../components/footer.php'; ?>
    <?php include '../components/plugins.php'; ?>
    <script  src="../assets/js/app.js" defer></script>
</body>

</html>