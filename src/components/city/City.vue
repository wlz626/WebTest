<template>
    <div class="city">
        <CityHeader></CityHeader>
        <CityHot :hotCities='hotCities'></CityHot>
        <CitySort :cities='cities'></CitySort>
        <CityList :cities='cities'></CityList>
    </div>
</template>
<script>
import CityHeader from './pages/Header'
import CityHot from './pages/Hot'
import CitySort from './pages/Sort'
import CityList from './pages/List'

export default {
    components:{
        CityHeader,
        CityHot,
        CitySort,
        CityList
    },
    data(){
        return{
            hotCities:[],
            cities:[],
        }
    },
    mounted(){
        this.$http.get('/api/city.json').then((res)=>{
            const data = res.data.data;
            this.hotCities = data.hotCities;
            this.cities = data.cities;
            console.log(data.cities)
        })
    }
}
</script>
<style lang="stylus" scoped>
    .city
        background #f5f5f5
</style>