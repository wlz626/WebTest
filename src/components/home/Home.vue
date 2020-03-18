<template>
    <div>
        <HomeHeader></HomeHeader>
        <Swiper></Swiper>
        <Icons></Icons>
    </div>
</template>
<script>
import HomeHeader from './pages/HomeHeader'
import Swiper from './pages/Swiper'
import Icons from './pages/Icons'
export default {
    data(){
        return{

        }
    },
    components:{
        HomeHeader,
        Swiper,
        Icons
    }
}
</script>