<template>
    <div id="app">
        <layout-header></layout-header>
        <router-view/>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
    import LayoutHeader from "@/components/Layouts/LayoutHeader.vue"

    @Component({
        components: {
            LayoutHeader,
        },
    })

    export default class App extends Vue {
    }
</script>

<style lang="scss">
    @import '~bulma/bulma';
</style>
