<template>
    <!-- banner左邊的menu -->
    <!-- 之後會新增一個橫的menu，所以這個元件可能還會動-->
    <div id="Category" class="g-category" :class="{'g-vertical' : style == 'vertical', 'g-herizon' : style == 'herizon'}">
        <div class="g-container" v-if="style == 'herizon'">
            <ul class="g-category-list">
                <li class="g-tab-category-item" v-for="(c, index) in category" :key="index">
                    <div class="g-category-item-text">{{c.text}}</div>
                    <div class="g-category-sub">
                        <ul>
                            <li class="g-category-sub-item" v-for="sub in c.subs" :key="sub"><a
                                    :href="sub.link">{{sub.text}}</a></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>



        <div class="g-vertical-inner" v-else-if="style == 'vertical'">
            <div class="g-category-title">全站分類</div>
            <vertical-gallery :itemHeight='44'>
                <ul class="g-category-list">
                    <li class="g-tab-category-item" v-for="(c, index) in category" :key="index">
                        <div class="g-category-item-text">{{c.text}}</div>
                        <div class="g-category-sub">
                            <ul>
                                <li class="g-category-sub-item" v-for="sub in c.subs" :key="sub"><a
                                        :href="sub.link">{{sub.text}}</a></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </vertical-gallery>
        </div>



    </div>
</template>

<script>
    // import {
    //     bannercategory
    // } from '../../../global/js/BannerCategory.js';
    import VerticalGallery from '../../../global/components/carousel/VerticalCarousel';
    export default {
        name: 'CategoryMenu',
        props: {
            'style': {
                type: Object,
                required: true,
            },
        },
        components: {
            VerticalGallery,
        },
        data() {
            return {
                // category: bannercategory
                // menu內容
                // bannercategory: [{
                //         text: '推薦商品1',
                //         // 子目錄
                //         subs: [{
                //                 link: '#',
                //                 text: '肉品/水產'
                //             },
                //             {
                //                 link: '#',
                //                 text: '食材料理/湯麵'
                //             },
                //             {
                //                 link: '#',
                //                 text: '炸物/點心類'
                //             },
                //             {
                //                 link: '#',
                //                 text: '蔬菜水果'
                //             },
                //             {
                //                 link: '#',
                //                 text: '居家調理/即食組'
                //             },
                //             {
                //                 link: '#',
                //                 text: '居家調理/即食組'
                //             },
                //             {
                //                 link: '#',
                //                 text: '居家調理/即食組'
                //             },
                //         ]
                //     },
                //     {
                //         text: '生鮮/低溫食品'
                //     },
                //     {
                //         text: '生鮮/低溫食品2'
                //     },
                //     {
                //         text: '酒類商品'
                //     },
                //     {
                //         text: '美體保健/清潔品'
                //     },
                //     {
                //         text: '居家生活/紙用品'
                //     },
                //     {
                //         text: '3C/家電商品'
                //     },
                // ],

            }
        },
        mounted() {
            // bannercategory.then(result => this.category = result)
            this.category = [{
                    text: '推薦商品123',
                    // 子目錄
                    subs: [{
                            link: '#',
                            text: '肉品/水產'
                        },
                        {
                            link: '#',
                            text: '食材料理/湯麵'
                        },
                        {
                            link: '#',
                            text: '炸物/點心類'
                        },
                        {
                            link: '#',
                            text: '蔬菜水果'
                        },
                        {
                            link: '#',
                            text: '居家調理/即食組'
                        },
                        {
                            link: '#',
                            text: '居家調理/即食組'
                        },
                        {
                            link: '#',
                            text: '居家調理/即食組'
                        },
                    ]
                },
                {
                    text: '生鮮/低溫食品'
                },
                {
                    text: '生鮮/低溫食品2'
                },
                {
                    text: '酒類商品'
                },
                {
                    text: '美體保健/清潔品'
                },
                {
                    text: '居家生活/紙用品'
                },
                {
                    text: '3C/家電商品'
                },
            ]

        },

    };
</script>