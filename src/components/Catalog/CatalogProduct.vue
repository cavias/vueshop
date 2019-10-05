<template>
    <div class="column is-one-third-tablet is-one-quarter-desktop">
        <article class="columns is-mobile is-multiline">
            <div class="column is-one-third-mobile is-full-tablet">
                <router-link :to="{name: 'product', params: {id: product.id}}">
                    <figure class="image is-square">
                        <img src="https://via.placeholder.com/300" alt="Placeholder">
                    </figure>
                </router-link>
            </div>
            <div class="column is-one-third-mobile is-full-tablet">
                <header class="title">
                    <router-link :to="{name: 'product', params: {id: product.id}}">
                        {{product.name}}
                    </router-link>
                </header>
                <main>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, debitis?
                </main>
                <footer class="">
                    <button class="button is-success is-pulled-right">Add to cart</button>
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

        link: object = {
            name: 'product',
            id: this.product.id
        }
    }
</script>

<style scoped>

</style>
