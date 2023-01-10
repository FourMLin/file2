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
                    <img src="../../home/assets/contect.png" alt="">
                </div>
                <h4>聯絡我們</h4>
            </div>
            <div class="si-form si-text">
                <h5>親愛的客戶您好：</h5>
                <p>若您有商品、訂單等Go美廉線上購物相關問題，<br>請利用下列客服資訊洽詢，感謝您的支持！</p>
                <div class="si-text-info">
                    <p>客服專線：0800-42-6666</p>
                    <p>手機另撥：02-2792-0501</p>
                    <p>專線時間：周一~周日8:30-24:00 (含國定假日)</p>
                    <p>客服信箱：webservice@simplemart.com.tw</p>
                </div>
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