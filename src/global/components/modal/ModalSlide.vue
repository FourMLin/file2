<template>
    <div class="g-modal-slide">
        <div class="g-modal-overlay"></div>
        <div class="g-modal-box">
            <div class="g-modal-title">
                <slot name="header">{{modaltitle}}</slot>
            </div>
            <div class="g-modal-content">
                <slot name="content"></slot>
            </div>
            <div class="g-modal-footer" >
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
        name: 'ModalSlide',
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