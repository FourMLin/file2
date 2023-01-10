<template>
    <div class="g-modal-drop">
        <div class="g-modal-overlay"></div>
        <div class="g-modal-box" >
            <div class="g-modal-title">
                <slot name="header">{{modaltitle}}</slot>
            </div>
            <div class="g-modal-content" :class="{'g-bottom-line-style' : contentstyle == 'top-line'}">
                <slot name="content"></slot>
            </div>
            <div class="g-modal-footer" :class="{'g-bottom-line-style' : contentstyle == 'top-line'}">
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
        name: 'ModalDrop',
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