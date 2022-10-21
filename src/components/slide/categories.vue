<template>
    <section class="categories">
        <div class="container">
            <div class="row">
                <div class="swiper mySwiper"> 
                    <div class="swiper-wrapper">
                        <div class="swiper-slide" id="meat">
                          a{{title}}<img :src="meat"/>
                        </div>
                        <div class="swiper-slide" id="orange"  v-for="img in images" :src="img">b</div>
                        <div class="swiper-slide" id="meat">c</div>
                        <div class="swiper-slide" id="orange">d</div>
                        <div class="swiper-slide" id="meat">e</div>
                        <div class="swiper-slide" id="meat">g</div>
                        <div class="swiper-slide" id="orange">h</div>
                        <div class="swiper-slide" id="meat">y</div>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-pagination"></div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>

export default {
}
</script>
<style>
      .swiper {
        width: 100%;
        height: 100%;
      }

      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;

        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      }

      .swiper-slide img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    </style>