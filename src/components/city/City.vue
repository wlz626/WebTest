<template>
    <div class="city">
        <CityHeader></CityHeader>
        <CityHot></CityHot>
    </div>
</template>
<script>
import CityHeader from './pages/Header'
import CityHot from './pages/Hot'

export default {
    components:{
        CityHeader,
        CityHot
    }
}
</script>
<style lang="stylus" scoped>
    .city
        background #f5f5f5
</style>