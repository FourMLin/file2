<template>
    <div class="g-modal" >
        <div class="g-modal-overlay"></div>
        <div class="g-modal-box-nobg">
            <div class="g-modal-content no-padding g-modal-content-img">
                <slot name="content"></slot>
            </div>
            <div class="g-modal-close" @click="$emit('close')" >
                <span class="material-icons">close</span>
            </div>
        </div>

    </div>

</template>

<script>


    export default {
        name: 'ModalAlert',
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