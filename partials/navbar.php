<!-- ======= Header ======= -->
<header id="header" class="fixed-top">
    <div class="container d-flex">

        <div class="logo mr-auto">
            <h1 class="text-light"><a href="/stock/"><span>Stock</span></a></h1>
        </div>

        <nav class="nav-menu d-none d-lg-block">
            <ul>
                <li class="nav-item"><a href="/stock/">Home</a></li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Services
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="/stock/trend/index.php?type=local">Local Trend</a>
                        <a class="dropdown-item" href="/stock/trend/index.php?type=global">Global Trend </a>
                    </div>
                </li>
                <li><a href="/stock/news-page/">News</a></li>
                <li><a href="/stock/company/company-profile.php">Company</a></li>
                
            </ul>

        </nav><!-- .nav-menu -->
        
        <div class="header-social-links">
            <button type="button" onclick="location.href='/stock/register/login.php';" class="btn btn-outline-primary">log in</button>
            <button type="button" class="btn btn-outline-primary" onclick="location.href='/stock/register/register.php';">sign up</button>
        </div>

        <!-- if the user is logged in hash the previous block and activate this block
        <div class="form-inline">
            <p class="font-weight-bold font-italic"><small class="text-success">User Name</small></p>
            <i class="fas fa-user"></i>
        </div>
        -->

    </div>
</header>
<!-- End Header -->