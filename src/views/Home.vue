<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" @click="onClick">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
    // Initial data can be declared as instance properties
    message: string = 'Hello!'

    // Component methods can be declared as instance methods
    onClick (): void {
        window.alert(this.message)
    }
}
</script>
