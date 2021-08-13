<template>
    <v-app>
        <v-main>
            <div id="app">
                <Base></Base>
            </div>
        </v-main>
    </v-app>
</template>

<script>
import Base from "@/components/Base";
export default {
    name: "App",
    components: {
        Base,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
