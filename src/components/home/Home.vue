<template>
    <div class="home">
        <HomeHeader></HomeHeader>
        <Swiper :swiperList="swiperList"></Swiper>
        <Icons :iconsList="iconsList"></Icons>
        <Location></Location>
        <Acttivity></Acttivity>
        <Hot :hotList="hotList"></Hot>
        <Like :likeList="likeList"></Like>
        <Vacation :vacationList="vacationList"></Vacation>
    </div>
</template>
<script>
import HomeHeader from './pages/HomeHeader'
import Swiper from './pages/Swiper'
import Icons from './pages/Icons'
import Location from './pages/Location'
import Acttivity from './pages/Acttivity'
import Hot from './pages/Hot'
import Like from './pages/Like'
import Vacation from './pages/Vacation'
export default {
    data(){
        return{
            swiperList:[],
            iconsList:[],
            hotList:[],
            likeList:[],
            vacationList:[]
        }
    },
    components:{
        HomeHeader,
        Swiper,
        Icons,
        Location,
        Acttivity,
        Hot,
        Like,
        Vacation
    },
    mounted(){
        this.$http.get("/api/dataHome.json").then((res)=>{
            const data = res.data.data[0];
            console.log(data.hotList);
            this.swiperList = data.swiperList;
            this.iconsList = data.iconsList;
            this.hotList = data.hotList;
            this.likeList = data.likeList;
            this.vacationList = data.vacationList;

        })
    }
}
</script>
<style lang="stylus" scoped>
    .home
        background #f5f5f5
</style>