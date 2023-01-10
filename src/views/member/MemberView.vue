<template>
    <Header :marquee="false" :mobileshow="true"></Header>
    <CategoryMenu :style="'herizon'" />
    <div class="g-wrapper g-container no-padding-mobile">
        <div class="g-breadcrumb">
            <a href="#">首頁</a> > <a href="#">酒類商品123</a> > <a href="#" class="current">威士忌</a>
        </div>

        <main class="g-main-layout m-main">
            <Membermenu />

            <!-- <div class="m-content" :class="{'active' : contentshow == true}" >
                <span class="m-content-close material-icons" @click="contentshow = false">chevron_left</span>
                <div class="m-content-inner">
                    <component :is="currentComponent" :currentpage="CurrentMemberPage" :notifypage="currentComponent" ></component>
                </div>
                
            </div> -->


            <ScrollTop />
        </main>

    </div>
    <Footer></Footer>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import ScrollTop from '../../global/components/scroll/scrollTop.vue'
    import Membermenu from '../../home/components/member/Membermenu.vue'

    export default {
        name: 'MemberPage',
        components: {
            Header,
            Footer,
            ScrollTop,
            Membermenu,
        },
        data() {
            return {
                currentComponent: 'member-data',
                contentshow: false,
                
            }
        },
        // methods: {
        //     CurrentMemberPage: function (component) {
        //         this.currentComponent = component;
        //         this.contentshow = true
        //     },
        // }
    }
</script>

<style lang="scss">
    @import '../../home/scss/member.scss';
</style>