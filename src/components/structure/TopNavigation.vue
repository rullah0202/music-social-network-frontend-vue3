<template>
    <div class="w-full px-4 bg-black relative z-20 text-white">
        <div class="container mx-auto max-w-full h-16 flex justify-between text-xs md:text-sm">
            <div class="h-full flex items-center">
                <router-link class="flex justify-center items-center" to="/">
                    <div class="text-white text-2xl"><b>MSN</b></div>
                </router-link>
            </div>
            <a class="text-yellow-500 text-1xl flex justify-center items-center underline" href="https://www.fiverr.com/rullah/provide-news-portal-laravel-website-with-source-code" target="_blank"><span class=" mr-1">Get</span>source code and buy me a coffee</a>
            <div class="h-full flex items-center">
                <FullScreenModal/>
            </div>
        </div>
    </div>
</template>
<script setup>
    import FullScreenModal from './FullScreenModal.vue';
</script>
<style lang="">
    
</style>