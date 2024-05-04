
<template>
  <q-page class="flex flex-center">
    <div>
      <div class="text-h3 q-my-md">Settings:</div>

    <q-select
      v-model="selectedMode"
      :options="modes"
      label="Select Game Mode"
      color="primary"
      @click="setMode"
      emit-value
      map-options
    />

    <q-select
      v-model="selectedDifficulty"
      :options="difficulties"
      label="Select Game Difficulty"
      color="primary"
      @click="setDifficulty"
      emit-value
      map-options
    />

      <q-btn class="full-width q-my-xl" color="dark" label="Save" @click="backToMainMenu" />
    </div>

  </q-page>
</template>


<style>
/* You can add specific styles for your Main Menu page here */
</style>


<script lang="ts">

import {  diffSettings, modes } from 'src/ts/models';
import { defineComponent, ref } from 'vue';
import { useSessionStore } from 'src/stores/session-store';
const store = useSessionStore();
export default defineComponent({
  name: 'settings',
  methods: {
    backToMainMenu() {
        // Navigate to the main menu screen
        this.setMode()
        this.setDifficulty()
        this.$router.push('/');
    },
    setMode() {
      // Navigate to the game screen
      store.setToggleMode(this.selectedMode);

    },
    setDifficulty() {
      // Navigate to the game screen
      store.setToggleDifficulty(this.selectedDifficulty);
    },
  },
  components: {

   },
  beforeMount() {
    // Load the options from the store here
    if (store.$state.toggleMode) {
      this.selectedMode = store.$state.toggleMode;
    } else {
      this.selectedMode = store.$state.prefs?.mode || 'Word Mode';
    }

    if (store.$state.toggleDifficulty) {
      this.selectedDifficulty = store.$state.toggleDifficulty;
    } else {
      this.selectedDifficulty = store.$state.prefs?.difficulty || 'Medium';
    }

  },
  setup () {

    return {
      modes: ref<modes[]>(['Word Mode', 'Biblical Mode']),
      selectedMode: ref<modes>('Word Mode'),
      selectedDifficulty: ref<diffSettings>('Medium'),
      difficulties: ref<diffSettings[]>(['Easy', 'Medium', 'Hard']),

    };
  }
});
</script>
