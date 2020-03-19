<template>
    <div class="hot">
        <div class="hot-title">热门城市</div>
        <ul class="hot-list">
            <li class="hot-item" v-for="item in hotCities" :key="item.id">{{item.name}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['hotCities'],
    components:{

    }
}
</script>
<style lang="stylus" scoped>
    .hot-title
        font-size .26rem
        color #212121
        padding .25rem .3rem
    .hot-list
        position relative
        background #fff
        font-size .28rem
        overflow hidden
        :before
            content ""
            position absolute
            height 100%
            width 33.33333%
            left 33.33333%
            border-left .02rem solid #ddd
            border-right .02rem solid #ddd
    .hot-item
        color #212121
        text-align center
        height .9rem
        line-height .9rem
        float left
        width 33.3333333%
        border-bottom .02rem solid #ddd
</style>