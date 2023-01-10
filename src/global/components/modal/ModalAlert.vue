<template>
    <div class="g-modal-alert is-alert" >
        <div class="g-modal-box" :class="{'is-small': modaltype == 'small',  'is-alert': modaltype == 'alert',}">
            <div class="g-modal-title">
                <slot name="header">{{modaltitle}}</slot>
            </div>
            <div class="g-modal-content">
                <slot name="content"></slot>
            </div>
            <div class="g-modal-footer">
                <slot name="footer"></slot>
            </div>
            <div class="g-modal-close" :class="{'g-d-none' : modaltype == 'alert'}" @click="$emit('close')" >
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