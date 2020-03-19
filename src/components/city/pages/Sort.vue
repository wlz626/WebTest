<template>
    <div class="sort">
        <div class="sort-title">字母排序</div>
        <ul class="sort-list">
            <li class="sort-item" v-for="(item,key) in cities" :key="key">{{key}}</li>
        </ul>
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
    .sort-title
        font-size .26rem
        color #212121
        padding .25rem .3rem
    .sort-list
        position relative
        background #fff
        font-size .28rem
        overflow hidden
    .sort-item
        color #212121
        text-align center
        height .9rem
        line-height .9rem
        float left
        width 16.6666666666%
</style>