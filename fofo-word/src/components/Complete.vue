<template>
  <q-dialog v-model="bShow" persistent>
    <q-card class="q-mb-md" style="min-height: 355px;">
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

<q-scroll-area class="q-mt-md" style="height: 215px;">
          <q-card-section>
            <div class="text-h6">Correct Answers: {{ correctAnswers }} / {{ totalQuestions }}</div>
          </q-card-section>

          <q-card-section>
            <div class="text-subtitle1">
              Total Time: {{ (((timeStart || 0) - (timeEnd || 0)) / 1000).toFixed(2) }} sec
            </div>
            <div class="text-subtitle1">Time Bonus: {{ timeBonusPts }}</div>
            <div class="text-subtitle1">Original Score: {{ originalScore }}</div>
            <div class="text-h6">Final Score: {{ (originalScore || 0) + timeBonusPts }}</div>
          </q-card-section>
        </q-scroll-area>
        </q-banner>


      <div class="row justify-center ">
        <q-btn color="primary" label="Exit" @click="$emit('done')" />
      </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useSessionStore } from "../stores/session-store";

export default defineComponent({
  setup() {
    const store = useSessionStore();
    const totalQuestions = computed(() => store.$state.currentGame?.questionDatas.length);
    const correctAnswers = computed(() => store.$state.currentGame?.correctAnswers);
    const timeStart = computed(() => store.$state.currentGame?.gameEndTime)
    const timeEnd = computed(() => store.$state.currentGame?.gameStartTime)
    const timeBonusEval = ref((timeStart.value || 0) - (timeEnd.value || 0));
    const originalScore = computed(() => store.$state.currentGame?.currentScore) || 0;

    let timeBonusPts = ref(0);


    const runCaluclations = () => {



    console.log("timeBonusEval", timeBonusEval);

    timeBonusPts = ref(0);

    const secondsBonusArray = [15000, 30000, 45000, 60000, 120000];

    // IF user got more 70% wrong, no time bonus
    if ((correctAnswers.value || 0) >= ((totalQuestions.value || 0) * 0.3)) {
      console.log("Time Bonus Applies!")
      switch (timeBonusEval.value > 0) {
        case timeBonusEval.value < secondsBonusArray[0]:
          timeBonusPts.value = 1000;
          break;
        case timeBonusEval.value < secondsBonusArray[1]:
          timeBonusPts.value = 500;
          break;
        case timeBonusEval.value < secondsBonusArray[2]:
          timeBonusPts.value = 250;
          break;
        case timeBonusEval.value < secondsBonusArray[3]:
          timeBonusPts.value = 100;
          break;
        case timeBonusEval.value < secondsBonusArray[4]:
          timeBonusPts.value = 50;
          break;
        default:
          timeBonusPts.value = 0;
      }
    }


      console.log("Calculating...");
    };

    runCaluclations()

    return {
      timeStart,
      timeEnd,
      timeBonusEval,
      totalQuestions,
      correctAnswers,
      timeBonusPts,
      originalScore,
      runCaluclations,

    };
  },
  beforeMount() {
    console.log("Mounted");
    this.runCaluclations()
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
