<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(item,key) in page" :key="key">
                <div class="icons-item" v-for="icon in item" :key="icon.id">
                    <img :src="icon.imgUrl">
                    <p>{{icon.title}}</p>
                </div>
            </swiper-slide>
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>
<script>
export default {
    props:['iconsList'],
    data(){
        return {
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination'
                }
            }
        }
    },
    computed:{
        page(){
            let pages = [];
            this.iconsList.forEach((item,index)=>{
                let idx = Math.floor(index/8);
                if(!pages[idx]){
                    pages[idx] = [];
                }
                pages[idx].push(item);
            })
            return pages;
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~css/common.styl';
    .icons
        background #fff
        width 100%
        height 4rem
        overflow hidden
    .icons-item
        width 25%
        padding-bottom 25%
        height 0
        float left
        img
            width 1.1rem
            height 1.1rem
            display block
            margin 0 auto
            padding-top .2rem
        p
            textOverflow()
            font-size .28rem
            text-align center
            color #212121
            margin-top .1rem

    .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets
        bottom -.05rem
    .swiper-pagination >>> .swiper-pagination-bullet
        width .1rem
        height .1rem
</style>