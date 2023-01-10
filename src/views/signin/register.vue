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
                    <img src="../../home/assets/write.png" alt="">
                </div>
                <h4>申辦美廉社會員</h4>
            </div>
            <div class="si-form">
                <FormInput :type="'innerwords'" :status="'error'" :text="'請輸入手機號碼'" :tip="''" :errorvalue="'此手機號碼已註冊過，請直接登入'" />
                <FormInput :type="'innerwords'" :status="''" :text="'驗證碼'" :tip="''" :errorvalue="'驗證碼不正確'" :Btntext="'獲取手機驗證碼'" :innerBtn="true" />
                <router-link class="g-btn g-btn-big g-btn-main g-mt-20" to="/registerform">
                    申辦去
                </router-link>
                <hr>
                <div class="si-underlink g-center"><span>已有帳號?</span>&emsp;&emsp;<router-link to="/signin" class="g-m-link g-blue-link">登入</router-link></div>
                
            </div>
        </main>
    </div>


    <Footer></Footer>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import CategoryMenu from '../../global/components/category/CategoryMenu.vue'
    import FormInput from '../../global/components/form/input.vue'

    export default {
        name: 'RegisterPage',
        components: {
            Header,
            Footer,
            CategoryMenu,
            FormInput
        },
        data() {
            return {


            }
        },

    }
</script>

<style lang="scss">
    
</style>