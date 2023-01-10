<template>
    <div class="vertical-gallery" ref="vertical">
        <div ref="action"
             @click="prevFun" class="g-category-nav g-category-up"><span class="material-icons">arrow_drop_up</span>
        </div>
        <div class="vertical-content"
             :style="{'height': `${height - actionHeight}px`, 'top': `${actionHeight/2}px`}">
            <div class="vertical-container"
                 ref="verticalContainer"
                 :style="{'top': `${contentTop - actionHeight}px`}">
                <slot></slot>        
            </div>
        </div>
         
        
    </div>
    <div @click="nextFun" class="g-category-nav g-category-down"><span class="material-icons">arrow_drop_down</span></div>
</template>

<script>
export default {
    data() {
        return {
            height: 'auto',
            actionHeight: 0,
            contentHeight: 324,
            contentTop: 0,
            nextShow: true,
            prevShow: true,
            nextEnd: false
        };
    },
    props:{
        itemHeight: {
            type: Number,
            default: 100
        }
    },
    mounted() {
        const parentStyle = getComputedStyle(this.$refs.vertical.parentNode);
        this.height = parseInt(parentStyle.height, 10);
        const actionStyle = getComputedStyle(this.$refs.action);
        this.actionHeight = parseInt(actionStyle.height, 10) * 2;
        const contentStyle = getComputedStyle(this.$refs.verticalContainer);
        this.contentHeight = parseInt(contentStyle.height, 10);
        this.nextShow = false;
        this.prevShow = false;
        if (this.contentHeight > this.height - this.actionHeight) {
            this.nextShow = true;
        }
        
    },
    methods: {
        nextFun() {
            let isItemHeight = this.contentHeight + this.contentTop - this.height + this.actionHeight;
            if (isItemHeight > 0 && isItemHeight > this.itemHeight) {
                this.contentTop -= this.itemHeight;
                this.prevShow = true;
            }
            else {
                this.contentTop -= isItemHeight;
                this.nextShow = false;
                this.nextEnd = true;
            }
        },
        prevFun() {
            if (this.contentTop < 0 && this.contentTop + this.itemHeight < 0) {
                this.contentTop += this.itemHeight;
                this.nextShow = true;
            }
            else {
                this.contentTop = 0;
                this.prevShow = false;
            }
        }
    }
};
</script>

<style lang='less'>
    .vertical-gallery {
        position: relative;
        // overflow: hidden;

        .vertical-content {
            position: absolute;
            min-height: 324px;
            left: 0;
            width: 100%;
            // overflow: hidden;
            background-color: #fff;
        }
        .vertical-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            transition: all .3s linear;
        }
    }
</style>