<template>
    <v-card
        class="mx-auto my-12"
        min-width="80%"
    >
        <v-row class="d-flex flex-wrap">
            <v-col :cols="left">
                <Creator></Creator>
            </v-col>
            <v-col :cols="right">
                <Tasks></Tasks>

            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import Creator from "./Creator";
import Tasks from "./Tasks";
export default {
    name: "Base",
    components: {
        Tasks,
        Creator
    },
    data: () => ({
        winWidth: window.innerWidth,
        mobile: false,
        tablet: false,
        left: 4,
        right: 8,
    }),

    methods: {
        onResize() {
            this.winWidth = window.innerWidth
        }
    },

    watch:{
        winWidth() {
            this.mobile = this.winWidth < 700
            if(this.mobile) {
                this.left = 12
                this.right = 12
                console.log("switched to mobile mode")
            }else{
                this.left = 4
                this.right = 8
            }

        }
    },

    created() {
        this.winWidth = 320
        this.$nextTick( () => {
            window.addEventListener('resize', this.onResize)
        })
    },

    beforeDestroy() {
        window.removeEventListener('resize', this.onResize);
    },

}
</script>

<style scoped>


</style>
