<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h3 q-my-md">Welcome!</div>
    <q-btn class="full-width q-my-md" color="primary" label="Start Game" @click="startGame" />
    <!-- <q-btn disabled class="full-width q-my-md" color="secondary" label="Word Vault" @click="openWordVault" /> -->
    <q-btn  class="full-width q-my-md" color="dark" label="Settings" @click="openSettings" />
    </div>

  </q-page>
</template>


<style>
/* You can add specific styles for your Main Menu page here */
</style>


<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'main-menu',
  methods: {
    startGame() {
      // Navigate to the game screen
      this.$router.push('/game');
    },
    openWordVault() {
      // Navigate to the word vault screen
      this.$router.push('/word-vault');
    },
    openSettings() {
      // Navigate to the settings screen
      this.$router.push('/settings');
    }
  },
  components: {  },
  mounted() {

  },
  setup () {

    return { };
  }
});
</script>
