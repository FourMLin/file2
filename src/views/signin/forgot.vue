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
                <h4>忘記密碼</h4>
            </div>
            <div class="si-form">
                <FormInput :type="'innerwords'" :status="''" :text="'請輸入您的會員手機號碼'" :errorvalue="'此手機號碼已註冊過，請直接登入'" />
                <FormInput :type="'innerwords'" :status="''" :text="'驗證碼'" :tip="''" :errorvalue="'驗證碼不正確'"
                    :Btntext="'獲取手機驗證碼'" :innerBtn="true" />
                <FormInput :type="'innerwords'" :Inputtype="'password'" :status="''" :text="'輸入新密碼'" :tip="''"
                    :errorvalue="'密碼不正確'" />
                <FormInput :type="'innerwords'" :Inputtype="'password'" :status="''" :text="'再次輸入新密碼'" :tip="''"
                    :errorvalue="'密碼不正確'" />
                <div class="g-btn g-btn-big g-btn-main g-mt-20" @click="seccess = true">
                    確認
                </div>
            </div>
        </main>
    </div>
    <ModalAlert :modaltype="'small'" v-show="seccess" @close="seccess = false">
        <template #header>
            <h5 class="g-vertical-title">密碼修改成功</h5>
        </template>
        <template #content>
            <span>您的密碼已修改成功，請使用新密碼登入</span>
        </template>
        <template #footer>
            <div class="g-modal-cta g-d-wrap g-right-side">
                <router-link class="g-btn g-btn-s g-btn-main" to="/signin">
                    確定
                </router-link>
            </div>
        </template>
    </ModalAlert>




    <Footer></Footer>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import CategoryMenu from '../../global/components/category/CategoryMenu.vue'
    import FormInput from '../../global/components/form/input.vue'
    import ModalAlert from '../../global/components/modal/ModalAlert.vue'

    export default {
        name: 'SignIn',
        components: {
            Header,
            Footer,
            CategoryMenu,
            FormInput,
            ModalAlert
        },
        data() {
            return {
                seccess: false

            }
        },

    }
</script>

<style lang="scss">
</style>