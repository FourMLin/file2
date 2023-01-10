<template>
    <div class="g-pagination" :class="{'is-center' : pageposition == 'center', 'is-end' : pageposition == 'end'}">
        <div class="g-pagination-action g-pagination-previous">上一頁</div>
        <ul>
            <li v-for="(p, index) in 3" :key="index" :class="{'active' : index == '0'}">{{ p }}</li>
            <li>...</li>
        </ul>
        <div class="g-pagination-action g-pagination-next">下一頁</div>
    </div>

</template>

<script>
    export default {
        name: 'PaginationPage',
        components: {

        },
        props: {
            'pageposition': {
                type: String
            }
        },
        data() {
            return {

            }
        },
    };
</script>