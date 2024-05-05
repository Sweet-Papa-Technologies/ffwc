<template>
  <q-page class="flex flex-center">
    <div  v-if="bLoggedIn === true">
      <div class="text-h3 q-my-md">Welcome!</div>
    <q-btn class="full-width q-my-md" color="primary" label="Start Game" @click="startGame" />
    <!-- <q-btn disabled class="full-width q-my-md" color="secondary" label="Word Vault" @click="openWordVault" /> -->
    <q-btn  class="full-width q-my-md" color="dark" label="Settings" @click="openSettings" />


    </div>

    <div v-else >
      <div class="column q-gutter-md q-mx-md">

        <div>
          <div class="text-h3 q-my-md">Login to Play</div>
          <div class="text-subtitle1 q-my-md">Login to save your progress and compete with other players!</div>
        </div>

      <!-- <q-btn  class="q-px-md" color="primary" label="Login w/ Email" @click="openSettings" /> -->
      <q-btn  class="q-px-md" color="grey" label="Login Anonymously" @click="loginAnon()" />
      <!-- <q-btn  class="q-px-md" color="orange" label="Login w/ Google" @click="openSettings" /> -->
      </div>


    </div>


  </q-page>
</template>


<style>
/* You can add specific styles for your Main Menu page here */
</style>


<script lang="ts">

import { defineComponent, ref } from 'vue';
import { getCurrentAuthUser, signInAnon } from 'src/ts/firebaseAPIs';
export default defineComponent({
  name: 'main-menu',
  methods: {
    async loginAnon() {
      // Login anonymously
      console.log('Logging in anonymously');
      await signInAnon().then(() => {
        console.log('Logged in anonymously');
        this.bLoggedIn = true;
        this.$q.notify({
          color: 'positive',
          position: 'top',
          message: 'Logged in anonymously',
          icon: 'check'
        });
      }).catch((error) => {

        console.error('Error logging in anonymously:', error);

        this.$q.notify({
          color: 'negative',
          position: 'top',
          message: 'Error logging in anonymously',
          icon: 'report_problem'
        });
      });
    },
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
    const user = getCurrentAuthUser();
    if (user) {
      // User is logged in
      console.log('User is logged in');
      this.bLoggedIn = true;
    } else {
      // User is not logged in
      console.log('User is not logged in');
    }
  },
  setup () {
    const bLoggedIn = ref(false);
    return {
      bLoggedIn
    };
  }
});
</script>
