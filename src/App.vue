<template>
  <div id="app">
    <layout-header></layout-header>
      <div class="container">
          <router-view/>
      </div>
  </div>
</template>

<script lang="ts">
    import { Vue, Component } from 'vue-property-decorator';
    import LayoutHeader from "@/components/Layouts/LayoutHeader.vue"

    @Component({
        components: {
            LayoutHeader,
        },
    })

    export default class App extends Vue {}
</script>

<style lang="scss">

</style>
