<template>
    <div class="hero container">
        <div class="">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <div class="hero__categories__all">
                            <i class="fa fa-bars"></i>
                            <span>All departments</span>
                        </div>
                        <ul>
                            <li><a href="#">Fresh Meat</a></li>
                            <li><a href="#">Vegetables</a></li>
                            <li><a href="#">Fruit &amp; Nut Gifts</a></li>
                            <li><a href="#">Fresh Berries</a></li>
                            <li><a href="#">Ocean Foods</a></li>
                            <li><a href="#">Butter &amp; Eggs</a></li>
                            <li><a href="#">Fastfood</a></li>
                            <li><a href="#">Fresh Onion</a></li>
                            <li><a href="#">Papayaya &amp; Crisps</a></li>
                            <li><a href="#">Oatmeal</a></li>
                            <li><a href="#">Fresh Bananas</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-9">
                    <div class="hero__search">
                        <div class="hero__search__form">
                            <form action="#">
                                <div class="hero__search__categories">
                                    All Categories
                                    <span class="arrow_carrot-down"></span>
                                </div>
                                <input type="text" placeholder="What do yo u need?">
                                <button type="submit" class="site-btn">SEARCH</button>
                            </form>
                        </div>
                        <div class="hero__search__phone">
                            <div class="hero__search__phone__icon">
                                <i class="fa fa-phone"></i>
                            </div>
                            <div class="hero__search__phone__text">
                                <h5>+65 11.188.888</h5>
                                <span>support 24/7 time</span>
                            </div>
                        </div>
                    </div>
                    <div class="hero__item set-bg bg">
                        <div class="hero__text">
                            <span>FRUIT FRESH</span>
                            <h2>Vegetable <br>100% Organic</h2>
                            <p>Free Pickup and Delivery Available</p>
                            <a href="#" class="primary-btn">SHOP NOW</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="categories" style="margin-top: 5rem;">
            <div class="container">
                <div class="row">
                    <!-- <carousel>
                        <slide > -->
                            <div class="swiper mySwiper">
                                <div class="swiper-wrapper">
                                    <div class="swiper-slide" v-for="cate in cateList">
                                        <div class="img"><img :src = "cate.imgsrc" width = "380" height = "300" /></div>
                                        <h5 class="title"> {{ cate.title }}</h5>
                                    </div> 
                                </div>
                                <div class="swiper-button-next"></div>
                                <div class="swiper-button-prev"></div>
                            </div>
                        <!-- </slide>            
                    </carousel> -->
                </div>
            </div>
        </section>
        <section class="featured spad">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title">
                            <h2>Featured Product</h2>
                        </div>
                        <div class="featured__controls">
                            <ul>
                                <li class="active" data-filter="*">All</li>
                                <li data-filter=".oranges">Oranges</li>
                                <li data-filter=".fresh-meat">Fresh Meat</li>
                                <li data-filter=".vegetables">Vegetables</li>
                                <li data-filter=".fastfood">Fastfood</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row featured__filter" id="categories">
                    <div id="cuqua" class="col-lg-3 col-md-4 col-sm-6 mix fastfood oranges" v-for="feature in cateList">
                    <div class="featured__item">
                        <div class="featured__item__pic set-bg">
                            <div class="img"><img :src = "feature.imgsrc" width = "300" height = "250" /></div>
                            <ul class="featured__item__pic__hover">
                                <li><a href="#"><i class="fa fa-heart"></i></a></li>
                                <li><a href="#"><i class="fa fa-retweet"></i></a></li>
                                <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                            </ul>
                        </div>
                        <div class="featured__item__text">
                            <h6><a href="#">{{ feature.title }}</a></h6>
                            <h5>{{ feature.price }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="banner">
        <div class="container">
            <div class="row banner-item">
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic-1">
                        <img src="../assets/banner/banner-1.jpg" alt="">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6">
                    <div class="banner__pic-2">
                        <img src="../assets/banner/banner-2.jpg" alt="">
                    </div>
                </div>
            </div>
        </div>
        </div>
        <section class="latest-product spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6">
                        <div class="latest-product__text">
                            <h4>Latest Products</h4>
                            <div class="latest-product__slider">
                                <a href="#" class="latest-product__item" v-for="product in productList">
                                    <div class="latest-product__item__pic">
                                    <img :src = "product.imgsrc" width = "300" height = "250" />
                                    </div>
                                    <div class="latest-product__item__text">
                                    <h6><a href="#">{{ product.title }}</a></h6>
                                        <span>{{ product.price }}</span>
                                    </div>
                                </a>
                                <div class="owl-nav">
                                    <button type="button" role="presentation" class="latestPrdouct-owl-prev">
                                    <span class="fa fa-angle-left">
                                        <span>
                                        </span>
                                    </span>
                                    </button>
                                    <button type="button" role="presentation" class="latestPrdouct-owl-next">
                                    <span class="fa fa-angle-right">
                                        <span>
                                        </span>
                                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="latest-product__text">
                            <h4>Top Rated Products</h4>
                            <div class="latest-product__slider owl-carousel">
                                <div class="latest-prdouct__slider__list TopRateProduct">
                                    <a href="#" class="latest-product__item"  v-for="product in productList">
                                        <div class="latest-product__item__pic">
                                            <img :src="product.imgsrc" alt="">
                                        </div>
                                        <div class="latest-product__item__text">
                                            <h6>{{product.title}}</h6>
                                            <span>{{product.price}}</span>
                                        </div>
                                    </a>
                                </div>
                                <div class="owl-nav">
                                    <button type="button" role="presentation" class="TopRateProduct-owl-prev">
                                    <span class="fa fa-angle-left">
                                        <span>
                                        </span>
                                    </span>
                                    </button>
                                    <button type="button" role="presentation" class="TopRateProduct-owl-next">
                                    <span class="fa fa-angle-right">
                                        <span>
                                        </span>
                                    </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>Review Products</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__list ReviewProduct">
                                <a href="#" class="latest-product__item"  v-for="product in productList">
                                    <div class="latest-product__item__pic">
                                        <img :src="product.imgsrc" alt="">
                                    </div>
                                    <div class="latest-product__item__text">
                                        <h6>{{product.title}}</h6>
                                        <span>{{product.price}}</span>
                                    </div>
                                </a>
                            </div>
                            <div class="owl-nav">
                                <button type="button" role="presentation" class="ReviewProduct-owl-prev">
                                    <span class="fa fa-angle-left">
                                        <span>
                                        </span>
                                    </span>
                                    </button>
                                    <button type="button" role="presentation" class="ReviewProduct-owl-next">
                                        <span class="fa fa-angle-right">
                                            <span>
                                            </span>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="from-blog spad">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="section-title from-blog__title">
                            <h2>From The Blog</h2>
                        </div>
                    </div>
                </div>
                <div class="row"  id="blogs">
                    <div class="col-lg-4 col-md-4 col-sm-6" v-for="blog in blogList" >
                        <div class="blog__item">
                            <div class="blog__item__pic">
                                <img :src="blog.imgsrc" alt="">
                            </div>
                            <div class="blog__item__text">
                                <ul>
                                    <li><i class="fa fa-calendar-o"></i> {{ blog.date }}</li>
                                    <li><i class="fa fa-comment-o"></i> {{ blog.commentCount }}</li>
                                </ul>
                                <h5><a href="#">{{ blog.title }}</a></h5>
                                <p>{{ blog.content }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>
<script src="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.js"></script>

<script>
export default {

    data(){
        return{
            cateList: [
                {
                id: 1,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-1.jpg")
                },
                {
                id: 2,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-2.jpg")
                },
                {
                id: 3,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-3.jpg")
                },
                {
                id: 4,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-4.jpg")
                },
                {
                id: 5,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-5.jpg")
                },
                {
                id: 6,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-6.jpg")
                },
                {
                id: 7,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-7.jpg")
                },
                {
                id: 8,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-8.jpg")
                }
            ],
            productList: [
                {
                id: 1,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-1.jpg")
                },
                {
                id: 2,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-2.jpg")
                },
                {
                id: 3,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-3.jpg")
                },
                {
                id: 4,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-4.jpg")
                },
                {
                id: 5,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-5.jpg")
                },
                {
                id: 6,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-6.jpg")
                },
            ],
            blogList: [
                {
                    id: 1,
                    date: 'May 4, 2019',
                    commentCount: '5',
                    title: 'Cooking tips make cooking simple',
                    content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                    imgsrc: require("../assets/blog/blog-1.jpg")
                },
                {
                    id: 2,
                    date: 'May 4, 2019',
                    commentCount: '5',
                    title: '6 ways to prepare breakfast for 30',
                    content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                    imgsrc: require("../assets/blog/blog-2.jpg")
                },
                {
                    id: 3,
                    date: 'May 4, 2019',
                    commentCount: '5',
                    title: 'Cooking tips make cooking simple',
                    content: 'Sed quia non numquam modi tempora indunt ut labore et dolore magnam aliquam quaerat',
                    imgsrc: require("../assets/blog/blog-3.jpg")
                },
            ]
        }
    }
}

</script>
<style>
    .bg{
        background-image: url('../assets/hero/banner.jpg');
    }
    .hero__categories ul{
        text-align: left;
    }

</style>