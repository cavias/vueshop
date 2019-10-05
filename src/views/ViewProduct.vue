<template>
    <div>
        <h1>Dit is de view voor {{product.name}}</h1>
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';

    @Component({
    })

    export default class ViewProduct extends Vue {
    }
</script>

<style scoped>

</style>
