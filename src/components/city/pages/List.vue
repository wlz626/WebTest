<template>
    <div ref='container' class="container">
        <div>
            <!--hot -->
            <div>
                <div class="hot">
                    <div class="hot-title">热门城市</div>
                    <ul class="hot-list">
                        <li class="hot-item" v-for="item1 in hotCities" :key="item1.id" @click="changeCityName(item1.name)">{{item1.name}}</li>
                    </ul>
                </div>
            </div>


            <!--sort -->
            <div>
                <div class="sort">
                    <div class="sort-title">字母排序</div>
                    <ul class="sort-list">
                        <li class="sort-item" v-for="(item2,key1) in cities" :key="key1" @click="changeSort(key1)">{{key1}}</li>
                    </ul>
                </div>
            </div>
            <!--list -->
            <div>
                <div class="list" v-for="(val,key) in cities" :key="key" :ref="key">
                    <div class="list-title">{{key}}</div>
                    <ul class="list-list">
                        <li class="list-item" v-for="city in val" :key="city.id" @click="changeCityName(city.name)">{{city.name}}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
import BScroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
    data(){
        return {
            scroll:''
        }
    },
    props:['cities','hotCities'],
    mounted(){
        let container = this.$refs['container'];
        this.scroll = new BScroll(container);
    },
    methods:{
        changeSort(sortName){
            console.log(this.$refs[sortName][0]);
            this.scroll.scrollToElement(this.$refs[sortName][0]);
        },
        changeCityName(cityName){
            this.$router.push('/');
            this.changeCity(cityName);
        },
        ...mapMutations(['changeCity'])
    },
}
</script>
<style lang="stylus" scoped>
@import '~css/common.styl';
    .container
        position absolute
        right 0
        left 0
        bottom 0
        top .88rem
        background #f5f5f5
        overflow hidden
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
            width 100%
            left 0
            border-left .02rem solid #ddd

        :after
            content ""
            position absolute
            height 100%
            width 100%
            right 0
            border-right .02rem solid #ddd

    .list-item
        position relative
        textOverflow()
        color #212121
        text-align center
        height .9rem
        line-height .9rem
        float left
        width 25%
        border-bottom .02rem solid #ddd

    .hot-title
        font-size .26rem
        color #212121
        padding .25rem .3rem
        position relative
    .hot-list
        background #fff
        font-size .28rem
        overflow hidden
        :before
            content ""
            position absolute
            width 100%
            height 100%
            left 0
            border-left .02rem solid #ddd
    .hot-item
        position relative
        color #212121
        text-align center
        height .9rem
        line-height .9rem
        float left
        width 33.3333333%
        border-bottom .02rem solid #ddd


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