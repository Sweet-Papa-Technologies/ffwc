<template>
  <q-dialog v-model="bShow" persistent>
    <q-card class="q-mb-md">
      <q-card-section>
        <q-banner
          inline
          class="q-mb-md"
          color="primary"
          icon="done"
          :actions="[
            {
              label: 'Close',
              color: 'white',
              handler: () => {
                $emit('done');
              },
            },
          ]"
        >
          <q-card-section class="">
              <div class="q-mb-md row justify-center">
                <q-icon name="fas fa-smile" size="8em" color="black" />
              </div>

          </q-card-section>

          <div class="">

<div class="text-h4 text-center">Congratulations!</div>
<div class="text-subtitle1 text-center">
  You have completed the game!
</div>
</div>

<q-scroll-area class="q-mt-md" style="height: 30vh;">
          <q-card-section>
            <div class="text-h6">Correct Answers: {{ correctAnswers }} / {{ totalQuestions }}</div>
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle1">
              Total Time: {{ (timeBonusEval / 1000).toFixed(2) }} sec
            </div>
            <div class="text-subtitle1">Time Bonus: {{ timeBonusPts }}</div>
            <div class="text-subtitle1">Original Score: {{ originalScore }}</div>
            <div class="text-h6">Final Score: {{ (originalScore || 0) + timeBonusPts }}</div>
          </q-card-section>
        </q-scroll-area>
        </q-banner>
      </q-card-section>

      <q-card-section class="row justify-center ">
        <q-btn color="primary" label="Exit" @click="$emit('done')" />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useSessionStore } from "../stores/session-store";

export default defineComponent({
  setup() {
    const store = useSessionStore();
    const totalQuestions = computed(() => store.$state.currentGame?.questionDatas.length);
    const correctAnswers = computed(() => store.$state.currentGame?.correctAnswers);
    const timeBonusEval =
      (computed(() => store.$state.currentGame?.gameEndTime).value || 0) -
      (computed(() => store.$state.currentGame?.gameStartTime).value || 0);

    let timeBonusPts = 0;

    const secondsBonusArray = [1000, 30000, 45000, 60000, 120000];

    // IF user got more 70% wrong, no time bonus
    if ((correctAnswers.value || 0) >= (totalQuestions.value || 0) * 0.3) {
      switch (timeBonusEval > 0) {
        case timeBonusEval < secondsBonusArray[0]:
          timeBonusPts = 1000;
          break;
        case timeBonusEval < secondsBonusArray[1]:
          timeBonusPts = 500;
          break;
        case timeBonusEval < secondsBonusArray[2]:
          timeBonusPts = 250;
          break;
        case timeBonusEval < secondsBonusArray[3]:
          timeBonusPts = 100;
          break;
        case timeBonusEval < secondsBonusArray[4]:
          timeBonusPts = 50;
          break;
        default:
          timeBonusPts = 0;
      }
    }

    const originalScore = computed(() => store.$state.currentGame?.currentScore) || 0;


    return {
      timeBonusEval,
      totalQuestions,
      correctAnswers,
      timeBonusPts,
      originalScore,

    };
  },
  name: "QuestionResultCard",
  props: {
    bShow: {
      type: Boolean,
      required: true,
    },
  },
});
</script>
