<template>
  <HeaderPart />
  <router-view></router-view>
  <Newsletter />
  <FooterPart />
</template>

<script>
import HeaderPart from '@/components/HeaderPart.vue';
import FooterPart from '@/components/FooterPart.vue';
import Newsletter from '@/components/Newsletter.vue';
export default {
    name: "MasterLayout",
    components: { HeaderPart, FooterPart, Newsletter }
}
</script>

<style>

</style>