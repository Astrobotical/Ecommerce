<!DOCTYPE html>
<html>
<head>
    <title>Catalog - Burke Ecom</title>
    <?php include '../components/header.php'; ?>
</head>
<body>
<?php include '../components/navbar.php'; ?>
    <main class="page catalog-page">
        <section class="clean-block clean-catalog dark">
            <div class="container">
                <div class="block-heading">
                    <h2 class="text-info">Products Page</h2>
                    <p>Products below</p>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col-md-3">
                            <div class="d-none d-md-block">
                                <div class="filters">
                                    <div class="filter-item">
                                        <h3>Categories</h3>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" value = "Phones" name="Categories" onclick="app.Category(this)" id="formCheck-1"><label class="form-check-label" for="formCheck-1">Phones</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox"  name="Categories" onclick="app.Category(this)" id="formCheck-2"><label class="form-check-label" for="formCheck-2">Laptops</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox"  name="Categories" onclick="app.Category(this)" id="formCheck-3"><label class="form-check-label" for="formCheck-3">PC</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox"  name="Categories" onclick="app.Category(this)" id="formCheck-4"><label class="form-check-label" for="formCheck-4">Tablets</label></div>
                                    </div>
                                    <div class="filter-item">
                                        <h3>Brands</h3>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" name="Brands"onclick="app.Brand(this)" id="formCheck-5"><label class="form-check-label" for="formCheck-5">Samsung</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" name="Brands"onclick="app.Brand(this)" id="formCheck-6"><label class="form-check-label" for="formCheck-6">Apple</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" name="Brands"onclick="app.Brand(this)" id="formCheck-7"><label class="form-check-label" for="formCheck-7">HTC</label></div>
                                    </div>
                                    <div class="filter-item">
                                        <h3>OS</h3>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-8"><label class="form-check-label" for="formCheck-8">Android</label></div>
                                        <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-9"><label class="form-check-label" for="formCheck-9">iOS</label></div>
                                    </div>
                                </div>
                            </div>
                            <div class="d-md-none"><a class="btn btn-link d-md-none filter-collapse" data-bs-toggle="collapse" aria-expanded="false"style="text-decoration: none;" aria-controls="filters" href="#filters" role="button">Filters<i class="icon-arrow-down filter-caret"></i></a>
                                <div class="collapse" id="filters">
                                    <div class="filters">
                                        <div class="filter-item">
                                            <h3>Categories</h3>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" name="Categories"value = "Phones"  onclick="app.Category(this)" id="formCheck-1"><label class="form-check-label" for="formCheck-1">Phones</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" name="Categories" onclick="app.Category(this)" id="formCheck-2"><label class="form-check-label" for="formCheck-2">Laptops</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" name="Categories" onclick="app.Category(this)" id="formCheck-3"><label class="form-check-label" for="formCheck-3">PC</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" name="Categories" onclick="app.Category(this)" id="formCheck-4"><label class="form-check-label" for="formCheck-4">Tablets</label></div>
                                        </div>
                                        <div class="filter-item">
                                            <h3>Brands</h3>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" name="Brands"onclick="app.Brand(this)" id="formCheck-5"><label class="form-check-label" for="formCheck-5">Samsung</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" name="Brands"onclick="app.Brand(this)" id="formCheck-6"><label class="form-check-label" for="formCheck-6">Apple</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" name="Brands"onclick="app.Brand(this)" id="formCheck-7"><label class="form-check-label" for="formCheck-7">HTC</label></div>
                                        </div>
                                        <div class="filter-item">
                                            <h3>OS</h3>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-8"><label class="form-check-label" for="formCheck-8">Android</label></div>
                                            <div class="form-check"><input class="form-check-input" type="checkbox" id="formCheck-9"><label class="form-check-label" for="formCheck-9">iOS</label></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9">
                            <div class="products">
                                <div class="row g-0" id="app">
                                        </div>
                                    </div>
                                </div>
                                <nav>
                                    <ul class="pagination">
                                        <li class="page-item disabled"><a class="page-link" aria-label="Previous"><span aria-hidden="true">??</span></a></li>
                                        <li class="page-item active"><a class="page-link">1</a></li>
                                        <li class="page-item"><a class="page-link">2</a></li>
                                        <li class="page-item"><a class="page-link">3</a></li>
                                        <li class="page-item"><a class="page-link" aria-label="Next"><span aria-hidden="true">??</span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    <?php include '../components/footer.php'; ?>
    <?php include '../components/plugins.php'; ?>
    <script  src="../assets/js/app.js"></script>
</body>

</html>