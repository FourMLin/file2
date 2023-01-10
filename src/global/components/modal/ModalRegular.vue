<template>
    <div class="g-modal">
        <div class="g-modal-overlay"></div>
        <div class="g-modal-box" :class="{'g-modal-normal-sm': modaltype == 'small','g-modal-normal-lg': modaltype == 'large','g-modal-normal': modaltype == 'normal','g-modal-normal-mini': modaltype == 'mini','g-modal-no-padding': paddingstyle == 'all-no-padding' }">
            <div class="g-modal-title" :class="{'no-padding' : paddingstyle == 'title-no-padding'}">
                <slot name="header">{{modaltitle}}</slot>
            </div>
            <div class="g-modal-content" :class="{'g-bottom-line-style' : contentstyle == 'top-line', 'no-padding' : paddingstyle == 'content-no-padding'}">
                <slot name="content"></slot>
            </div>
            <div class="g-modal-footer" :class="{'g-bottom-line-style' : contentstyle == 'top-line', 'no-padding' : paddingstyle == 'footer-no-padding'}">
                <slot name="footer"></slot>
            </div>
            <div class="g-modal-close" @click="$emit('close')">
                <span class="material-icons">close</span>
            </div>
        </div>

    </div>

</template>

<script>


    export default {
        name: 'ModalRegular',
        components: {
            
        },
        props: {
            'modaltitle': {
                type: String,
                defalut: 'title',
            },
            'modalcontent': {
                type: String,
                default: 'content',
            },
            'modalfooter': {
                type: Array,
            },
            'modaltype': {
                type: String,
            },
            'contentstyle': {
                type: String,
            },
            'paddingstyle': {
                type: Object,
                require: false
            },
        },
        data() {
            return {
                
            }
        },
        methods: {
            deleteDevice(index) {
                this.$delete(index);
            },

        },
    };
</script>