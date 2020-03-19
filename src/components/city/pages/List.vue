<template>
    <div>
        <div class="list" v-for="(item,key) in cities" :key="key">
            <div class="list-title">{{key}}</div>
            <ul class="list-list">
                <li class="list-item" v-for="city in item" :key="city.id">{{city.name}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    props:['cities'],
    components:{

    }
}
</script>
<style lang="stylus" scoped>
@import '~css/common.styl';
    .list-title
        font-size .26rem
        color #212121
        padding .25rem .3rem
    .list-list
        position relative
        background #fff
        font-size .28rem
        overflow hidden
        :before
            content ""
            position absolute
            height 100%
            width 25%
            left 25%
            border-left .02rem solid #ddd
            border-right .02rem solid #ddd
        :after
            content ""
            position absolute
            height 100%
            width 25%
            right 25%
            border-right .02rem solid #ddd
    .list-item
        textOverflow()
        color #212121
        text-align center
        height .9rem
        line-height .9rem
        float left
        width 25%
        border-bottom .02rem solid #ddd
</style>