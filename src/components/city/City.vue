<template>
    <div class="city">
        <CityHeader></CityHeader>
        <CityList :cities='cities' :hotCities='hotCities'></CityList>

    </div>
</template>
<script>
import CityHeader from './pages/Header'
import CityList from './pages/List'

export default {
    components:{
        CityHeader,
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