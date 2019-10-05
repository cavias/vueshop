<template>
    <div>
        {{product.name}}
    </div>
</template>

<script lang="ts">
    import {Vue, Component, Prop} from 'vue-property-decorator';
    import {Product} from "@/interfaces/Product"

    @Component({
    })

    export default class CatalogProduct extends Vue {
        @Prop({required: true})
        product!: Product;
    }
</script>

<style scoped>

</style>
