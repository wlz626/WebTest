<template>
    <div>
        <HomeHeader></HomeHeader>
        <Swiper></Swiper>
        <Icons></Icons>
        <Location></Location>
    </div>
</template>
<script>
import HomeHeader from './pages/HomeHeader'
import Swiper from './pages/Swiper'
import Icons from './pages/Icons'
import Location from './pages/Location'
export default {
    data(){
        return{

        }
    },
    components:{
        HomeHeader,
        Swiper,
        Icons,
        Location
    }
}
</script>