<template>
    <div>
        <header-area></header-area>
        <main-content></main-content>
        <footer-area></footer-area>
    </div>
</template>

<script>
    import HeaderArea from '@/components/header/Index.vue'
    import FooterArea from '@/components/common/Footer.vue'
    import mainContent from '@/components/main/Index.vue'

    export default {
        components: {
            mainContent,
            HeaderArea,
            FooterArea

        }
    }
</script>

<style>

</style>