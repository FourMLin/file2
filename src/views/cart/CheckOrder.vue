<template>
    <Header :marquee="false"></Header>
    <CategoryMenu :style="'herizon'" />
    <main class="g-main-layout">


        <div class="g-container">
            <div class="g-breadcrumb">
                <a href="#">首頁</a> > <a href="#">購物車</a> > <a href="#" class="current">選購清單</a>
            </div>

            <div class="c-list-title c-list-title-group">
                <h2>查詢訂單</h2>
                <div class="c-list-search">
                    <FormSelect class="g-col-4" :type="'normal'" :select="areas" :text="'查詢日期'" />
                    或
                    <FormInput class="g-col-8" :type="'normal'" :status="'checked'" :text="'請輸入商品關鍵字或訂單號碼'" />
                </div>
            </div>

            <TabRegular :style="tab.style" :data="tab.data" class="">

                <template #tab0>
                    <OrderList :ordersection="ordersection" />
                </template>
                <template #tab1>
                </template>
                <template #tab2>
                </template>
                <template #tab3>
                </template>
                <template #tab4>
                </template>
                <template #tab5>
                </template>
                <template #tab6>
                </template>
                <template #tab7>
                </template>
                <template #tab8>
                </template>
            </TabRegular>
        </div>
    </main>

    <Footer></Footer>

</template>


<script>
    import Header from '../../global/components/header.vue'
    import Footer from '../../global/components/footer.vue'
    import CategoryMenu from '../../global/components/category/CategoryMenu.vue'
    import TabRegular from '../../global/components/tab/TabRegular.vue'
    import OrderList from '../../home/components/OrderList.vue'
    import FormInput from '../../global/components/form/input.vue'
    import FormSelect from '../../global/components/form/select.vue'

    export default {
        name: 'CheckOrder',
        components: {
            Header,
            Footer,
            CategoryMenu,
            TabRegular,
            OrderList,
            FormInput,
            FormSelect
        },
        data() {
            return {
                ordersection:[{
                    contentslide: false,
                    img: require('../../global/assets/chicken.png'),
                    labelcolor:'light-blue',
                    labeltext: '待付款',
                    date: '2022/06/08',
                    time: '20:09:39',
                    code: '293320202002500',
                    name: 'RS16真無線運動防水藍牙5.0耳機',
                    delivercode: '新竹物流：12345678-常溫',
                    payment: 'store',
                    price: '1,799',
                    paymentcode: '1234567',
                    btngroup: '1'
                },
                {
                    contentslide: false,
                    img: require('../../global/assets/chicken.png'),
                    labelcolor:'blue',
                    labeltext: '付款完成',
                    date: '2022/06/08',
                    time: '20:09:39',
                    code: '293320202002500',
                    name: 'RS16真無線運動防水藍牙5.0耳機',
                    delivercode: '新竹物流：12345678-常溫',
                    payment: 'store',
                    price: '1,799',
                    paymentcode: '1234567',
                    btngroup: '2'

                },
                {
                    contentslide: false,
                    img: require('../../global/assets/chicken.png'),
                    labelcolor:'light-green',
                    labeltext: '已出貨',
                    date: '2022/06/08',
                    time: '20:09:39',
                    code: '293320202002500',
                    name: 'RS16真無線運動防水藍牙5.0耳機',
                    delivercode: '新竹物流：12345678-常溫',
                    payment: 'store',
                    price: '1,799',
                    paymentcode: '1234567',
                    btngroup: '3'

                },
                {
                    contentslide: false,
                    img: require('../../global/assets/chicken.png'),
                    labelcolor:'green',
                    labeltext: '待收貨',
                    date: '2022/06/08',
                    time: '20:09:39',
                    code: '293320202002500',
                    name: 'RS16真無線運動防水藍牙5.0耳機',
                    delivercode: '新竹物流：12345678-常溫',
                    payment: 'store',
                    price: '1,799',
                    paymentcode: '1234567',
                    btngroup: '0'

                },
                {
                    contentslide: false,
                    img: require('../../global/assets/chicken.png'),
                    labelcolor:'orange',
                    labeltext: '訂單已完成',
                    date: '2022/06/08',
                    time: '20:09:39',
                    code: '293320202002500',
                    name: 'RS16真無線運動防水藍牙5.0耳機',
                    delivercode: '新竹物流：12345678-常溫',
                    payment: 'store',
                    price: '1,799',
                    paymentcode: '1234567',
                    btngroup: '4'

                },
                {
                    contentslide: false,
                    img: require('../../global/assets/chicken.png'),
                    labelcolor:'gray',
                    labeltext: '已取消',
                    date: '2022/06/08',
                    time: '20:09:39',
                    code: '293320202002500',
                    name: 'RS16真無線運動防水藍牙5.0耳機',
                    delivercode: '新竹物流：12345678-常溫',
                    payment: 'store',
                    price: '1,799',
                    paymentcode: '1234567',
                    btngroup: '5'

                },
                {
                    contentslide: false,
                    img: require('../../global/assets/chicken.png'),
                    labelcolor:'dark-gray',
                    labeltext: '退貨退款',
                    date: '2022/06/08',
                    time: '20:09:39',
                    code: '293320202002500',
                    name: 'RS16真無線運動防水藍牙5.0耳機',
                    delivercode: '新竹物流：12345678-常溫',
                    payment: 'store',
                    price: '1,799',
                    paymentcode: '1234567',
                    btngroup: '6'

                }],
                tab: {
                    style: {
                        type: 'white-button',
                        title: true,
                        responsive: true,
                    },
                    data: {
                        title: [{
                                text: '所有訂單'
                            },
                            {
                                text: '待付款'
                            },
                            {
                                text: '付款完成'
                            },
                            {
                                text: '商品出貨中'
                            },
                            {
                                text: '待收貨'
                            },
                            {
                                text: '訂單已完成'
                            },
                            {
                                text: '已取消'
                            },
                            {
                                text: '退貨退款'
                            },

                        ],

                    },
                },
                track: [{
                        text: '選購清單',
                        date: '2022.11.15',
                        time: '20:20:20',
                        done: true
                    },
                    {
                        text: '付款完成',
                        date: '',
                        time: '',
                        done: false
                    },
                    {
                        text: '待出貨',
                        date: '',
                        time: '',
                        done: false
                    },
                    {
                        text: '已出貨',
                        date: '',
                        time: '',
                        done: false
                    },
                    {
                        text: '配送中',
                        date: '',
                        time: '',
                        done: false
                    },
                    {
                        text: '訂單完成',
                        date: '',
                        time: '',
                        done: false
                    }
                ],
                cartproduct: [{
                        type: 'room-trans',
                        titletext: '常溫宅配',
                        gold: '1000',
                        products: [{
                            img: require('../../global/assets/chicken.png'),
                            code: 'S81003397',
                            name: 'ORIGINS11 品木宣言 Dr.WEIL青春無敵健康光潤機能水(200ml)X2-國際航空版',
                            tip: '蒜味辣椒*8 / 結帳後5日內出貨',
                            price: '799',
                            open: false
                        }, ]
                    },

                ],
                btngroup: [{
                        grid: 'g-col-2 g-col-sm-4',
                        style: 'main-line',
                        text: '上一步',
                        link: '/confirmproduct'
                    },
                    {
                        grid: 'g-col-3 g-col-sm-8',
                        style: 'main',
                        text: '確認付款',
                        link: '/finishorder'
                    }
                ]

            }
        },
        methods: {
            // PayOnline() {
            //     this.payonline = true,
            //     this.payshop = false
            // },
            // PayShop() {
            //     this.payonline = false,
            //     this.payshop = true
            // },
        }

    }
</script>

<style lang="scss">
</style>