<template>
    <main>
        <home-intro></home-intro>
    </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeIntro from "@/components/Home/HomeIntro.vue";

@Component({
  components: {
    HomeIntro,
  },
})

export default class Home extends Vue {}
</script>
