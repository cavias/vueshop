<template>
    <div>
        <catalog-product v-for="product in products" :product="product" :key="product.id"></catalog-product>
    </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import {Product} from "@/interfaces/Product"
    import CatalogProduct from "@/components/Catalog/CatalogProduct.vue";

    @Component({
        components: {CatalogProduct}
    })

    export default class ViewCatalog extends Vue {
        products: Product[] = [
            { "id": 0, "name": "Atom bomb" },
            { "id": 1, "name": "Pizza" },
            { "id": 2, "name": "Milkshake" }
        ];
    }
</script>

<style scoped>

</style>
