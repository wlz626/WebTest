<template>
    <div class="header-swiper">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="item in swiperList" :key="item.id"><img :src="item.imgUrl"></swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    props:['swiperList'],
    data(){
        return{
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