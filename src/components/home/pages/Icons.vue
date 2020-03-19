<template>
    <div class="icons">
        <swiper :options="swiperOption">
            <!-- slides -->
            <swiper-slide v-for="(item,key) in page" :key="key">
                <div class="icons-item" v-for="icon in item" :key="icon.id">
                    <img :src="icon.imgsrc">
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
    data(){
        return {
            swiperOption:{
                pagination: {
                    el: '.swiper-pagination'
                }
            },
            iconList:[
                {
                    id:"01",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png",
                    title:"景点门票"
                },
                {
                    id:"02",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png",
                    title:"必游榜单"
                },
                {
                    id:"03",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png",
                    title:"夏日玩水"
                },
                {
                    id:"04",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png",
                    title:"主题乐园"
                },
                {
                    id:"05",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png",
                    title:"动植物园"
                },
                {
                    id:"06",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png",
                    title:"故宫"
                },
                {
                    id:"07",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png",
                    title:"一日游"
                },
                {
                    id:"08",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1803/54/35899492b1302802.png",
                    title:"公园"
                },
                {
                    id:"09",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png",
                    title:"景点门票"
                },
                {
                    id:"10",
                    imgsrc:"http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png",
                    title:"景点门票"
                },
            ]
        }
    },
    computed:{
        page(){
            let pages = [];
            this.iconList.forEach((item,index)=>{
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
        height 4.2rem
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