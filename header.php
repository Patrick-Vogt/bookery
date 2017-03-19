<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Bookery - Manage all your ebooks</title>
    <link rel="stylesheet" href="includes/css/bootstrap.css">
    <link rel="stylesheet" href="includes/css/custom.css">
		<link rel="stylesheet" href="includes/css/font-awesome.css">
    <script src="https://npmcdn.com/tether@1.2.4/dist/js/tether.min.js"></script>
    <script src="includes/js/jquery-3.1.1.min.js"></script>
    <script src="includes/js/bootstrap.js"></script>
		<script src="app/includes/js/basic.js"></script>
</head>

<body>
    <!-- .navbar -->
    <nav class="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
        <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand" href="#">Bookery</a>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="#">
                        <i class="fa fa-plus-square" aria-hidden="true"></i> Add Books</a>
                </li>
            </ul>
            <form class="form-inline mt-2 mt-md-0">
                <input class="form-control mr-sm-2" type="text" placeholder="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i> Search
                </button>
            </form>
        </div>
    </nav>
    <!-- /.navbar -->
</body>

</html>
