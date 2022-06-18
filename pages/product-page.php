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
                <div class="block-heading"><h2 class="text-info">Product Details</h2></div>
                <div class="block-content" id="contain">
                <script src="../assets/js/app.js" ></script>
                <script>app.productview(); </script>
                </div>
            </div>
        </section>
    </main>
    <?php include '../components/footer.php'; ?>
    <?php include '../components/plugins.php'; ?>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/AlertifyJS/1.13.1/alertify.min.js" integrity="sha512-JnjG+Wt53GspUQXQhc+c4j8SBERsgJAoHeehagKHlxQN+MtCCmFDghX9/AcbkkNRZptyZU4zC8utK59M5L45Iw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>

</html>