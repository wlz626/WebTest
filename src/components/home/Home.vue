<template>
    <div class="home">
        <HomeHeader></HomeHeader>
        <Swiper></Swiper>
        <Icons></Icons>
        <Location></Location>
        <Acttivity></Acttivity>
        <Hot></Hot>
    </div>
</template>
<script>
import HomeHeader from './pages/HomeHeader'
import Swiper from './pages/Swiper'
import Icons from './pages/Icons'
import Location from './pages/Location'
import Acttivity from './pages/Acttivity'
import Hot from './pages/Hot'
export default {
    data(){
        return{

        }
    },
    components:{
        HomeHeader,
        Swiper,
        Icons,
        Location,
        Acttivity,
        Hot
    }
}
</script>
<style lang="stylus" scoped>
    .home
        background #f5f5f5
</style>