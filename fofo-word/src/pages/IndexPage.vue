<template>
  <q-page class="flex flex-center">
    <div class="text-center">
      <q-avatar size="120px" color="grey-9">
        <q-icon name="person" size="50px" />
      </q-avatar>
      <div class="text-h6 q-my-md">Loading Game...</div>
      <q-linear-progress :indeterminate="true" color="primary" />
    </div>
  </q-page>
</template>



<style>
/* Additional CSS for styling the splash screen */
</style>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import { loadGameData } from '../ts/loadData';
import { wait } from '../ts/sharedFunctions';

export default defineComponent({
  name: 'SplashScreen',
  components: {  },
  mounted() {
    loadGameData().then(async () => {
      await wait(3000);
      this.$router.push({ name: 'main-menu' });
    })
  },
  setup () {

    return { };
  }
});
</script>
../ts/loadData
