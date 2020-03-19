<template>
    <div class="hot">
        <div class="hot-top">
            <img src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png" alt="">
            <span>本周热门榜单</span>
            <span class="hot-right">全部榜单 ></span>
        </div>
        <ul class="hot-list">
            <li class="hot-item" v-for="item in hotList" :key="item.id">
                <img :src="item.imgUrl" alt="">
                <p>{{item.title}}</p>
                <p>
                    <span class="hot-price">￥{{item.mark}}</span>起
                </p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['hotList'],
    data(){
        return{
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~css/common.styl';
    .hot
        background #ffffff
        margin-top .2rem
        font-size .28rem
        .hot-top
            padding .2rem
            span
                color #212121
                font-size .32rem
            img
                width .3rem
                height .3rem
            .hot-right
                    position absolute
                    right .2rem
                    color #616161
                    font-size .28rem
        .hot-list
            height 3rem
            overflow-x scroll
            white-space nowrap
            overflow-y hidden
            .hot-item
                padding 2rem 0
                display inline-block
                width 2rem
                height 2rem
                padding 0 .2rem
                img
                    width 100%
                    height 100%
                p
                    margin-top .1rem
                    text-align center
                    textOverflow()
                    .hot-price
                        color #ff8300
                        font-size .32rem
</style>