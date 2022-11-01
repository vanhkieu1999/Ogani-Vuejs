<template>
    <div class="hero container">
        <div class="">
            <div class="row">
                <div class="col-lg-3">
                    <div class="hero__categories">
                        <i class="fa fa-bars"></i>
                        <b-dropdown id="dropdown-left" text="All departments" variant="primary" class="m-2 hero__categories__all ">
                            <b-dropdown-item><a href="#">Fresh Meat</a></b-dropdown-item>
                            <b-dropdown-item><a href="#">Vegetables</a></b-dropdown-item>
                            <b-dropdown-item><a href="#">Fruit &amp; Nut Gifts</a></b-dropdown-item>
                            <b-dropdown-item><a href="#">Fresh Berries</a></b-dropdown-item>
                            <b-dropdown-item><a href="#">Ocean Foods</a></b-dropdown-item>
                            <b-dropdown-item><a href="#">Butter &amp; Eggs</a></b-dropdown-item>
                            <b-dropdown-item><a href="#">Fastfood</a></b-dropdown-item>
                            <b-dropdown-item><a href="#">Fresh Onion</a></b-dropdown-item>
                            <b-dropdown-item><a href="#">Papayaya &amp; Crisps</a></b-dropdown-item>
                            <b-dropdown-item><a href="#">Oatmeal</a></b-dropdown-item>
                            <b-dropdown-item><a href="#">Fresh Bananas</a></b-dropdown-item>
                        </b-dropdown>
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
            <VueSlickCarousel v-bind="SlideCateList">
            <div class="swiper-slide" v-for="cate in cateList">
                <div class="img"><img :src = "cate.imgsrc" width = "380" height = "300" /></div>
                <h5 class="title"> {{ cate.title }}</h5>
            </div> 
            </VueSlickCarousel>
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
                            <h4>Latest Prdouct</h4>
                            <div class="latest-product__slider owl-carousel">
                                <div class="latest-prdouct__slider__list latestPrdouct">
                                    <VueSlickCarousel v-bind="slideProductList">
                                        <a href="#" class="latest-product__item"  v-for="product in productList">
                                            <div class="latest-product__item__pic">
                                                <img :src="product.imgsrc" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>{{product.title}}</h6>
                                                <span>{{product.price}}</span>
                                            </div>
                                        </a>
                                    </VueSlickCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <div class="latest-product__text">
                            <h4>Top Rated Products</h4>
                            <div class="latest-product__slider owl-carousel">
                                <div class="latest-prdouct__slider__list latestPrdouct">
                                    <VueSlickCarousel v-bind="slideProductList">
                                        <a href="#" class="latest-product__item"  v-for="product in productList">
                                            <div class="latest-product__item__pic">
                                                <img :src="product.imgsrc" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>{{product.title}}</h6>
                                                <span>{{product.price}}</span>
                                            </div>
                                        </a>
                                    </VueSlickCarousel>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6">
                    <div class="latest-product__text">
                        <h4>Review Products</h4>
                        <div class="latest-product__slider owl-carousel">
                            <div class="latest-prdouct__slider__list latestPrdouct">
                                    <VueSlickCarousel v-bind="slideProductList">
                                        <a href="#" class="latest-product__item"  v-for="product in productList">
                                            <div class="latest-product__item__pic">
                                                <img :src="product.imgsrc" alt="">
                                            </div>
                                            <div class="latest-product__item__text">
                                                <h6>{{product.title}}</h6>
                                                <span>{{product.price}}</span>
                                            </div>
                                        </a>
                                    </VueSlickCarousel>
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
<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

function cateFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
            console.log(openDropdown)
          openDropdown.classList.remove('show');
        }
      }
    }
  }

export default {
    name: 'MyComponent',
    components: { VueSlickCarousel },
    data(){
        return{
            SlideCateList: {
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: false,
                swipe: true,
                responsive: [
                    {
                    "breakpoint": 1024,
                        "SlideCateList": {
                            "slidesToShow": 3,
                            "slidesToScroll": 1,
                            "infinite": true,
                            "dots": true
                        }
                    },
                    {   
                    "breakpoint": 600,
                        "SlideCateList": {
                            "slidesToShow": 2,
                            "slidesToScroll": 1,
                            "initialSlide": 2
                        }
                    },
                    {
                    "breakpoint": 480,
                        "SlideCateList": {
                            "slidesToShow": 1,
                            "slidesToScroll": 1
                        }
                    }
                ]
            },
            slideProductList: {
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                slidesPerRow: 1,
                rows: 3,
                autoplay: true,
                swipe: true,
            },
            
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
                id: 7,
                title: "Crab Pool Security",
                price: "$30.00",
                imgsrc: require("../assets/product/product-7.jpg")
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
    .slick-prev:before, .slick-next:before{
        color: #000;
    }
</style>