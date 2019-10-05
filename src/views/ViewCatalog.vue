<template>
    <main>
        <section class="hero is-primary">
            <div class="hero-body">
                <div class="container">
                    <h1 class="title">Catalog</h1>
                    <h2 class="subtitle">Something about categories</h2>
                </div>
            </div>
        </section>
        <section class="section">
            <div class="container">
                <div class="columns">
                    <catalog-product v-for="product in products" :product="product" :key="product.id"></catalog-product>
                </div>
            </div>
        </section>
    </main>
</template>

<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';
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
