<template>
  <q-dialog v-model="bShow" persistent>
    <q-card class="q-mb-md">
    <q-card-section>
      <q-banner
        inline
        class="q-mb-md"
        color="primary"
        icon="done"
        :actions="[{ label: 'Close', color: 'white', handler: () => { $emit('next') } }]"
      >
        <div class="q-mr-sm">{{  correct === true ? "Correct!" : "Sorry, Incorrect!" }}</div>
        <div class="text-h6">{{  correct === true ? "Good job, you got it correct!" : "Sorry, the correct answer was:!" }}</div>
        <div v-if="correct !== true">The correct answer was: {{ correctAnswer || "not found - error" }}</div>
      </q-banner>
    </q-card-section>
    <q-card-section>
      <q-btn
        color="primary"
        label="Next Question"
        @click="$emit('next')"
      />
    </q-card-section>
  </q-card>
  </q-dialog>

</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'QuestionResultCard',
  props: {
    correctAnswer: {
      type: String,
      default: "not found",
      required: false
    },
    correct: {
      type: Boolean,
      required: true
    }
    ,
    bShow: {
      type: Boolean,
      required: true
  }
  }
});

</script>
