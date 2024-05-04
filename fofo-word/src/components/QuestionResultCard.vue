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

        <q-card-section class="row justify-center q-gutter-sm items-center q-mb-md">
          <q-icon :name="correct === true ? 'fas fa-smile' : 'fas fa-frown'" size="2em" :color="correct === true ? 'positive' : 'negative'" />
        <div class="q-mr-sm text-h4 ">{{  correct === true ? "Correct!" : "Incorrect!" }}</div>
        </q-card-section>

        <div class="text-h6 text-center">{{  correct === true ? "Good job, you got it correct!" : "Sorry, wrong answer!" }}</div>
        <div class="text-center" v-if="correct !== true">The correct answer was:</div>
        <div class="text-bold text-h5 text-center q-mt-lg q-px-md" v-if="correct !== true">{{ correctAnswer || "not found - error" }}</div>

      </q-banner>
    </q-card-section>
    <q-card-section class="row justify-center">
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
