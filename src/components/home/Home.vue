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
            vacationList:[],
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
            const data = res.data.data;
            console.log(data);
            data.forEach((item,index)=>{
                if (item.city == this.$store.state.city){
                    this.swiperList = item.swiperList;
                    this.iconsList = item.iconsList;
                    this.hotList = item.hotList;
                    this.likeList = item.likeList;
                    this.vacationList = item.vacationList;
                }else{
                    this.swiperList = data[0].swiperList;
                    this.iconsList = data[0].iconsList;
                    this.hotList = data[0].hotList;
                    this.likeList = data[0].likeList;
                    this.vacationList = data[0].vacationList;
                }
            })
            // this.swiperList = data.swiperList;
            // this.iconsList = data.iconsList;
            // this.hotList = data.hotList;
            // this.likeList = data.likeList;
            // this.vacationList = data.vacationList;

        })
    },
}
</script>
<style lang="stylus" scoped>
    .home
        background #f5f5f5
</style>