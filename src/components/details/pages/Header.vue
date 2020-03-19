<template>
    <div class="header">
        <div class="header-return" v-show="showHeader" @click="toHome">
            <span class="border-return"></span>
            <span class="iconfont return">&#xe624;</span>
        </div>

        <div class="header-top" v-show="!showHeader" :style="styleOpacity"  @click="toHome">
            <div class="header-left">
                <span class="iconfont">&#xe624;</span>
            </div>
            北京国际鲜花港
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showHeader:true,
            styleOpacity:{
                opacity:0
            }
        }
    },
    mounted(){
        let that = this;
        window.addEventListener("scroll",function(){
            let top = document.documentElement.scrollTop;
            if(top>30){
                let opacity = top/130;
                that.showHeader=false;
                opacity = opacity>1 ? 1 : opacity;
                that.styleOpacity={opacity}
            }else{
                that.showHeader=true;
            }
        })
    },
    methods:{
        toHome(){
            this.$router.push('/');
        }
    }
}
</script>
<style lang="stylus" scoped>
    .header-return
        position absolute
        width .72rem
        height .72rem
        top .15rem
        left .15rem
    .border-return
        display block
        background #000
        width .72rem
        height .72rem
        opacity .5
        border-radius .36rem
    .return
        color #ffffff
        position absolute
        top 0
        width .72rem
        line-height .72rem
        text-align left
        text-indent .2rem
        font-size .32rem
    .header-top
        width 100%
        line-height .88rem
        background  #00bcd4
        color #fff
        font-size .36rem
        position fixed
        text-align center
        position fixed
        top 0
    .header-left
        position absolute
        width .4rem
        padding 0 .2rem
        text-align center
        font-weight bold



</style>

