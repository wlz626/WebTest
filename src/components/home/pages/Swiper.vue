<template>
    <div class="header-swiper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id"><img :src="item.imgsrc"></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    data(){
        return{
            swiperList:[
                {
                    id:"01",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1806/1c/4847ea66072c7b02.jpg_750x200_c32457fb.jpg"
                },
                {
                    id:"02",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1806/8f/d09fa241a01ac02.jpg_750x200_e0c86013.jpg"
                },
                {
                    id:"03",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1806/60/2eee57f623edfa02.jpg_750x200_74566baa.jpg"
                }
            ],
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination'
                },
                loop:true
            }
        }
    }
}
</script>
<style lang="stylus" scoped>
    .header-swiper
        height 0
        background #ccc
        padding-bottom 26.67%
        img
            width 100%
            height 100%
    .swiper-pagination >>> .swiper-pagination-bullet-active
        background #fff
</style>