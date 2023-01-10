<template>
    <div class="m-list">
        <div class="m-list-title">
            <span>您好，陳美鳳</span>
            <div class="m-list-title-point">
                會員點數&nbsp;
                <div class="m-list-title-point-img">
                    <img src="../../../home/assets/point-icon.png" alt="">
                </div>
                <span>1000</span>&nbsp;
                點
            </div>
            <div class="m-list-title-btn">
                <router-link class="g-btn g-btn-ss g-btn-white-line" to="/memberdata">
                    <span class="material-icons">edit</span> 修改基本資料
                </router-link>
            </div>
        </div>
        <div class="m-list-content">
            <div class="m-list-section m-list-mobile m-mobile-point">
                <router-link class="m-mobile-point-item" to="/membercoinpage">
                    <p>我的點數 <span class="material-icons">chevron_right</span></p>
                    <div class="m-mobile-point-item__number">48</div>
                </router-link>
                <router-link class="m-mobile-point-item" to="/membercoinpage">
                    <p>我的美廉幣 <span class="material-icons">chevron_right</span></p>
                    <div class="m-mobile-point-item__number">12,088</div>
                </router-link>
                <router-link class="m-mobile-point-item" to="/membercoinpage">
                    <p>我的金幣 <span class="material-icons">chevron_right</span></p>
                    <div class="m-mobile-point-item__number">12,088</div>
                </router-link>
            </div>
            <ul class="m-list-section"
                :class="{'m-list-mobile' : index === 0 | index === 1 ,'is-hide-mobile' : index === 2 | index === 3}"
                v-for="(l, index) in list" :key="index">
                <li class="m-list-first"><span class="material-icons">{{l.icon}}</span>{{l.title}}</li>
                <li class="m-list-option" v-for="c in l.option" :key="c">
                    <router-link :to="c.link">
                        <div class="m-list-option-img" v-if="c.img">
                            <img :src="c.img" alt="">
                        </div>
                        <template v-else></template>
                        {{c.text}}
                    </router-link>

                </li>
            </ul>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'MemberMenu',
        components: {},
        data() {
            return {
                list: [{
                        title: '訂單相關查詢',
                        icon: 'receipt_long',
                        option: [{
                                text: '追蹤清單',
                                link: '/checkorder',
                                img: require('../../../home/assets/list5.png')
                            },
                            {
                                text: '訂單查詢',
                                link: '/checkorder',
                                img: require('../../../home/assets/list6.png')
                            },
                            {
                                text: '更改配送地址',
                                link: '/checkorder',
                                img: require('../../../home/assets/list7.png')
                            },
                            {
                                text: '退/換貨申請',
                                link: '/checkorder',
                                img: require('../../../home/assets/list8.png')
                            }
                        ]
                    }, {
                        title: '個人帳戶管理',
                        icon: 'portrait',
                        option: [{
                                text: '電子票券',
                                link: '/memberticketpage',
                                img: require('../../../home/assets/list1.png')
                            },
                            {
                                text: '優惠券',
                                link: '/membercupon',
                                img: require('../../../home/assets/list2.png')
                            },
                            {
                                text: '發票查詢',
                                link: '/memberbillpage',
                                img: require('../../../home/assets/list3.png')
                            },
                            {
                                text: '優惠活動',
                                link: '',
                                img: require('../../../home/assets/list4.png')
                            }
                        ]
                    },

                    {
                        title: '訂單相關查詢',
                        icon: 'receipt_long',
                        option: [{
                                text: '訂單進度查詢',
                                link: '/checkorder'
                            },
                            {
                                text: '更改配送地址',
                                link: '/checkorder'
                            },
                            {
                                text: '追蹤商品清單',
                                link: '/checkorder'
                            }
                        ]
                    },
                    {
                        title: '個人帳戶管理',
                        icon: 'portrait',
                        option: [{
                                text: '會員基本資料修改',
                                link: '/memberdata'
                            },
                            {
                                text: '電子票券查詢',
                                link: '/memberticketpage'
                            },
                            {
                                text: '金幣查詢',
                                link: '/membercoinpage'
                            },
                            {
                                text: '會員點數',
                                link: '/membercoinpage'
                            },
                            {
                                text: '美廉幣查詢',
                                link: '/membercoinpage'
                            },
                            {
                                text: '優惠券查詢',
                                link: '/membercupon'
                            },
                            {
                                text: 'Go美廉雲端發票查詢',
                                link: '/memberbillpage'
                            }
                        ]
                    },
                    {
                        title: '付款方式說明',
                        icon: 'payments',
                        option: [{
                                text: '線上結帳操作流程',
                                link: ''
                            },
                            {
                                text: '門市結帳操作流程',
                                link: ''
                            },
                            {
                                text: '電子發票說明',
                                link: '/memberbillinstructionpage'
                            }
                        ]
                    },
                    {
                        title: '購物幫手',
                        icon: 'local_mall',
                        option: [{
                                text: '優惠券使用說明',
                                link: ''
                            },
                            {
                                text: '會員點數使用說明',
                                link: ''
                            },
                            {
                                text: '電子發票說明',
                                link: '/memberbillinstructionpage'
                            },
                            {
                                text: '購物流程說明',
                                link: ''
                            },
                            {
                                text: '雲端發票相關說明',
                                link: ''
                            },
                            {
                                text: '中獎發票列印說明',
                                link: ''
                            }
                        ]
                    },
                    {
                        title: '線上Q&A',
                        icon: 'contact_support',
                        option: [{
                                text: '常見問題',
                                link: '/memberqapage'
                            },
                            {
                                text: '退貨/退款相關說明',
                                link: ''
                            },
                            {
                                text: '電子票券商品說明',
                                link: ''
                            },
                            {
                                text: '最新公告',
                                link: '/membernewspage'
                            },
                            {
                                text: '聯絡我們',
                                link: '/contect'
                            },
                            {
                                text: 'Go美廉',
                                link: '/membernomenuinnerpage'
                            }
                        ]
                    }
                ]

            }
        },
    }
</script>

<style lang="scss">
</style>