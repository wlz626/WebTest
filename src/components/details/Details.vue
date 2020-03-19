<template>
    <div style="height:2000px">
        <DetailBanner></DetailBanner>
        <DetailHeader></DetailHeader>
    </div>
</template>
<script>
import DetailBanner from './pages/Banner'
import DetailHeader from './pages/Header'
export default {
    components:{
        DetailBanner,
        DetailHeader
    },
    mounted(){
		document.documentElement.scrollTop = 0;
	}
}
</script>
<style lang="stylus" scoped>

</style>