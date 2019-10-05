<template>
    <div class="column is-one-third-tablet is-one-quarter-desktop">
        <article class="columns is-mobile is-multiline">
            <div class="column is-one-third-mobile is-full-tablet">
                <figure class="image is-square">
                    <img src="https://via.placeholder.com/300" alt="Placeholder">
                </figure>
            </div>
            <div class="column is-one-third-mobile is-full-tablet">
                <header class="title">
                    {{product.name}}
                </header>
                <main>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, debitis?
                </main>
                <footer class="">

                    <a href="#">Add to cart</a>
                </footer>
            </div>
            <div class="column is-full has-text-right">
                <small class="is-text is-right">#{{product.id}}</small>
            </div>
        </article>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue} from 'vue-property-decorator';
    import {Product} from "@/interfaces/Product"

    @Component({})

    export default class CatalogProduct extends Vue {
        @Prop({required: true})
        product!: Product;
    }
</script>

<style scoped>

</style>
