<template>
    <div class="container">
            <div class="row">
                <div class="col-lg-3">
                    <div class="header__logo">
                        <router-link to="/"><img src="../../assets/logo.png" alt=""></router-link>
                    </div>
                </div>
                <div class="col-lg-6">
                    <nav class="header__menu">
                        <ul>
                            <li><router-link to="/">Home</router-link></li>
                            <li><router-link to="/shop">Shop</router-link></li>
                            <li><a>Page</a>
                                <ul class="header__menu__dropdown">
                                    <li><a>Shop Details</a></li>
                                    <li><a>Shoping Cart</a></li>
                                    <li><a>Check Out</a></li>
                                    <li><a>Blog Details</a></li>
                                </ul>   
                            </li>
                            <li><router-link to="/blog">Blog</router-link></li>
                            <li><router-link to="/contact">Contact</router-link></li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-3">
                    <div class="header__cart">
                        <ul>
                            <li><a><i class="fa fa-heart"></i> <span>1</span></a></li>
                            <li><a><i class="fa fa-shopping-bag"></i> <span>3</span></a></li>
                        </ul>
                        <div class="header__cart__price">item: <span>$150.00</span></div>
                    </div>
                </div>
            </div>
            <div class="humberger__open">
                <i class="fa fa-bars"></i>
            </div>
        </div>
</template>
<script>
    export default {
        
    }
</script>