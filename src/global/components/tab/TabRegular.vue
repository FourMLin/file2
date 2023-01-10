<template>
    <div class="g-tab" :class="{'g-tab-line' : style.type == 'line', 'g-tab-vertical-list' : style.type == 'vertical-list', 'g-tab-btn' : style.type == 'button', 'g-tab-white-btn' : style.type == 'white-button' , 'g-tab-white-btn-two' : style.type == 'white-button-two'}">
        <ul class="g-tab-list">
            <li class="g-tab-list-item" v-for="(tab, i) in data.title" :key="i" @click="tabactive = i" :class="{active : tabactive == i , 'g-tab-btns' : tab.type == 'btn'}">
                <div>{{tab.text}}</div>
            </li>
        </ul>
        <slot :name="'custom'"></slot>

        <div class="g-tab-content" v-for="(n, i) in data.title" :key="n" v-show="tabactive == i">
            <slot :name="'tab' + i"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabRegular',
        props: {
            'style': {
                type: Object,
                required: true,
            },
            'data': {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                tabactive: '0'
            }
        }
    };
</script>