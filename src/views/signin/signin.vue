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
                    <img src="../../home/assets/signin.png" alt="">
                </div>
                <h4>登入</h4>
            </div>
            <div class="si-form">
                <FormInput :type="'innerwords'" :status="''" :text="'電話'" :under="true" :underbox="true"
                    :tip="'美廉社會員電話為Go美廉登入依據'" :errorvalue="'此手機號碼已註冊過，請直接登入'" />
                <!-- <router-link class="g-btn g-btn-big g-btn-main" to="/" >
                    確認
                </router-link> -->
                <div class="g-btn g-btn-big g-btn-main g-mt-20" @click="signinfail = true">
                    確認
                </div>
                <div class="g-form-block is-white-form g-d-wrap" data-text="請選擇卡號">
                    <FormInput class="si-col" :Inputtype="'radio'" :status="'error'" :type="'check'" :text="'32012005220702'" :style="'check'" :clicked="true" @click="account = true" />
                    <FormInput class="si-col" :Inputtype="'radio'" :type="'check'" :text="'32012005339785'"
                        :style="'check'" @click="account = false" />
                </div>
                <template v-if="account">
                    <FormInput :type="'innerwords'" :Inputtype="'password'" :status="''" :text="'密碼'" :tip="''"
                        :errorvalue="'密碼不正確'" />
                </template>
                <template v-else>
                    <div class="g-form-block is-main">您為美廉社會員，【請設定密碼】體驗Go美廉。</div>
                    <FormInput :type="'innerwords'" :status="''" :text="'驗證碼'" :tip="''" :errorvalue="'驗證碼不正確'"
                        :Btntext="'獲取手機驗證碼'" :innerBtn="true" />
                    <FormInput :type="'innerwords'" :Inputtype="'password'" :status="''" :text="'輸入新密碼'" :tip="''"
                        :errorvalue="'密碼不正確'" />
                    <FormInput :type="'innerwords'" :Inputtype="'password'" :status="''" :text="'再次輸入新密碼'" :tip="''" :errorvalue="'密碼不正確'" />
                </template>

                <hr>
                <div class="g-d-flex g-center">
                    <router-link to="/register" class="g-m-link g-blue-link g-center">立即申辦美聯社會員</router-link> ｜
                    <router-link to="/forgotpassword" class="g-m-link g-blue-link g-center">忘記密碼</router-link>
                </div>

            </div>
        </main>
    </div>
    <ModalRegular :modaltype="'mini'" v-show="signinfail" @close="signinfail = false" :contentstyle="'top-line'">
        <template #header>
            <h3 class="g-vertical-title">找不到您的美廉社會員資料</h3>
        </template>
        <template #content>
            <span class="si-signfail-modal">請點擊【註冊】立即申辦</span>
        </template>
        <template #footer>
            <div class="g-modal-cta g-d-wrap g-center">
                <div class="g-col-6">
                    <router-link class="g-btn g-btn-big g-btn-main-line " to="/signin">
                        重新登入
                    </router-link>
                </div>
                <div class="g-col-6">
                    <router-link class="g-btn g-btn-big g-btn-main" to="/register">
                        註冊
                    </router-link>
                </div>
            </div>
        </template>
    </ModalRegular>


    <Footer></Footer>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import CategoryMenu from '../../global/components/category/CategoryMenu.vue'
    import FormInput from '../../global/components/form/input.vue'
    import ModalRegular from '../../global/components/modal/ModalRegular.vue'

    export default {
        name: 'SignIn',
        components: {
            Header,
            Footer,
            CategoryMenu,
            FormInput,
            ModalRegular
        },
        data() {
            return {
                account: true,
                signinfail: false
            }
        },

    }
</script>

<style lang="scss">
    @import '../../home/scss/signin.scss';
</style>