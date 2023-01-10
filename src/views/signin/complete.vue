<template>
    <Header :marquee="false"></Header>
    <CategoryMenu :style="'herizon'" />

    <div class="g-container g-wrapper">
        <div class="g-breadcrumb">
            <a href="#">首頁</a> > <a href="#" class="current">會員登入</a>
        </div>
        <main class="g-main-layout si-center ">
            <div class="si-title">
                <div class="si-title-img">
                    <img src="../../home/assets/check.png" alt="">
                </div>
                <h4>恭喜您已成為美廉社會員<br>請再重新登入一次</h4>
            </div>
            <div class="si-form">
                <div class="g-form-block is-yellow">帳號：0955011901</div>
                <span class="si-little-center">—頁面將在3秒後，跳轉至登入頁面—</span>
                <router-link class="g-btn g-btn-big g-btn-main" to="/signin">
                    登入
                </router-link>
            </div>
        </main>
    </div>


    <Footer></Footer>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import CategoryMenu from '../../global/components/category/CategoryMenu.vue'

    export default {
        name: 'SignIn',
        components: {
            Header,
            Footer,
            CategoryMenu,
        },
        data() {
            return {


            }
        },

    }
</script>

<style lang="scss">
</style>