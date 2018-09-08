<template>
    <header>
        <div class="header-box">
            <div class="header-logo">
                <img src="" alt="">
                果蔬生鲜
            </div>
            <div class="header-main-right">
                <div>购物车</div>
                <div>生鲜收藏</div>
                <div>
                    <router-link to="/sign">登录</router-link>
                </div>
                <div>免费注册</div>
            </div>
        </div>

    </header>
</template>

<script>
    export default {
        props: {},
        data() {
            return {}
        },
        components: {},
        methods: {}
    }
</script>

<style scoped lang="scss" rel="stylesheet/scss">
    header {
        width: 100%;
        height: 80px;
        border-bottom: 1px solid #eee;
        line-height: 80px;
        .header-box {
            width: 100%;
            height: 80px;
            margin: 0 auto;
            display: flex;
            display: -webkit-flex; /*safari*/
            flex-direction: row;
            justify-content: space-between;
            .header-logo {
                width: 200px;
                height: 80px;
                /*justify-content: flex-start;*/
            }
            .header-main-right {
                width: 400px;
                display: flex;
                display: -webkit-flex;
                flex-direction: row;
                flex-wrap: wrap;
                /*flex-grow: 1;*/
                /*justify-content: space-between;*/
                /*flex-grow: 1;*/
                /*flex-basis: 400px;*/
            }
        }
    }
</style>
