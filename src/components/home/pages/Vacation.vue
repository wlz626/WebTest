<template>
    <div class="vacation">
        <div class="vacation-title">周末去哪</div>
        <ul>
            <li class="vacation-item" v-for="item in vacationList" :key="item.id">
                <div class="vacation-img">
                    <img :src="item.imgUrl" alt="">
                </div>
                <div class="vacation-message">
                    <p>{{item.title}}</p>
                    <p>{{item.msg}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    props:['vacationList'],
    data(){
        return{
        }
    }
}
</script>
<style lang="stylus" scoped>
    .vacation
        font-size .32rem
    .vacation-title
        padding .24rem

    .vacation-item
        background #fff
        margin-bottom .1rem

    .vacation-img
        width 100%
        height 0
        padding-bottom 37.4375%
        img
            width 100%
    .vacation-message
        padding .2rem 0 .2rem .2rem
        p
            margin-top .2rem
            +p
                color #616161
                font-size .24rem
</style>