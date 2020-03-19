<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe624;</span>
        </div>
        <div class="header-search">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/City">
            <div class="header-right">{{city}}<span class="iconfont">&#xe62a;</span></div>
        </router-link>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    computed:{
        ...mapState(['city'])
    }
}
</script>
<style lang="stylus" scoped>
@import '~css/style.styl'
.header
    width 100%
    line-height .88rem
    background  #00bcd4
    color #fff
    font-size .36rem
    display flex
    .header-search
        flex 1
        background #fff
        height .6rem
        margin .14rem 0
        border-radius .1rem
        color #e4e7ea
        line-height .6rem
        font-size .28rem
        padding-left .2rem
    .header-left
        width .4rem
        padding 0 .2rem
        text-align center
        font-weight bold
    .header-right
        font-size .28rem
        padding 0 .2rem
        color #fff
        a
            color #fff

</style>