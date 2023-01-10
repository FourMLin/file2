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
                <h4>填寫註冊資料</h4>
            </div>
            <div class="si-form g-row">
                <FormInput class="g-col-8" :type="'innerwords'" :status="'checked'" :text="'姓名'" />
                <FormSelect class="g-col-4" :type="'innerwords'" :select="selectgrnder" :text="'性別'" />
                <FormInput class="g-col-12" :type="'innerwords'" :Inputtype="'date'" :status="'checked'" :text="'日期'" />
                <FormInput class="g-col-6" :type="'innerwords'" :status="'checked'" :text="'電話'" />
                <FormInput class="g-col-6" :type="'innerwords'" :status="'checked'" :text="'手機'" />
                <FormSelect class="g-col-6" :type="'innerwords'" :select="county" :text="'縣市'" />
                <FormSelect class="g-col-6" :type="'innerwords'" :select="areas" :text="'鄉鎮市區'" />
                <FormInput class="g-col-12" :type="'innerwords'" :status="'checked'" :text="'通訊地址'" />
                <FormInput class="g-col-12" :type="'innerwords'" :status="'checked'" :text="'E-mail'" />
                <FormInput class="g-col-12" :type="'innerwords'" :status="'checked'" :text="'輸入新密碼'" />
                <FormInput class="g-col-12" :type="'innerwords'" :status="'checked'" :text="'再次輸入新密碼'" />
            </div>
            <div class="si-question">
                <div class="si-check">
                    <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'我同意【美廉社關係企業與合作特約廠商個人資料蒐集、處理及利用告知及同意事項】'" :style="'check'"/>
                </div>
                <div class="si-check">
                    <FormInput :Inputtype="'checkbox'" :type="'check'" :text="'我同意收到電子報並享受多重會員折扣訊息'" :style="'check'"/>
                </div>

            </div>
            <router-link class="g-col-12 g-btn g-btn-big g-btn-main g-mt-20" to="/registercomplete">
                    立即註冊
                </router-link>

        </main>
    </div>


    <Footer></Footer>
</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import CategoryMenu from '../../global/components/category/CategoryMenu.vue'
    import FormInput from '../../global/components/form/input.vue'
    import FormSelect from '../../global/components/form/select.vue'

    export default {
        name: 'RegisterPage',
        components: {
            Header,
            Footer,
            CategoryMenu,
            FormInput,
            FormSelect
        },
        data() {
            return {
                selectgrnder: ['男', '女'],
                county:['台北市','新北市'],
                areas:['板橋區','中正區']

            }
        },

    }
</script>

<style lang="scss">

</style>