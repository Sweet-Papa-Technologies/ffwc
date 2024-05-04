<template>
  <q-page class="flex flex-center">
    <!-- Quit Button  -->
    <q-btn
      class="absolute-top-right q-ma-md"
      color="red"
      icon="close"
      @click="closingActions"
    />
    <QuestionResultCard
      :correct="bCorrect"
      :correctAnswer="correctAnswer"
      :bShow="bShowResult"
      @next="
        bShowResult = false;
        nextQuestion();
      "
    />
    <Complete :bShow="bShowFinalResults" @done="closingActions()" />
    <div
      class="q-pa-md"
      style="max-width: 700px; width: 100%"
      v-if="bLoaded == true"
    >
      <div class="text-h5 text-center q-my-md">
        {{ questionCatMetaData.category }} | {{ diffSetting }}
      </div>

      <div class="text-subtitle1 q-my-md">
        {{ questionCatMetaData.description }}
      </div>

      <div class="text-subtitle1 q-my-sm text-center">
        Question {{ currentQuestionID + 1 }}
      </div>

      <q-card class="q-mb-md" v-if="currentQuestionID !== -1">
        <q-card-section v-if="transition === false">
          <div class="q-mb-md">{{ question }}</div>
          <q-option-group
            v-model="selectedAnswer"
            :options="loadOptions(options)"
            type="radio"
            color="primary"
          />
        </q-card-section>

        <q-card-section v-else>
          <div class="text-h5 text-center">Loading...</div>
        </q-card-section>
        <q-card-actions align="around">
          <q-btn
            flat
            label="Submit Answer"
            @click="finalizeAnswer"
            color="primary"
            v-if="bShowFinalResults === false"
          />
        </q-card-actions>
      </q-card>

      <!-- // Display the current score and streak -->
      <q-card class="q-mt-md" v-if="bShowFinalResults === false">
        <q-card-section>
          <div class="text-h6">Current Score: {{ currentScore }}</div>
          <div class="text-h6">Current Streak: {{ currentStreak }}</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="q-pa-md" style="max-width: 700px; width: 100%" v-else>
      <div class="text-h5 text-center q-my-md">Loading...</div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { currentGameSession, GameCategory } from "../ts/models";
import { useSessionStore } from "../stores/session-store";
import {
  loadGameQuestionsForSession,
  loadPlayData,
  loadCatSummary,
} from "src/ts/loadData";
import QuestionResultCard from "src/components/QuestionResultCard.vue";
import Complete from "src/components/Complete.vue";

export default defineComponent({
  name: "MainGame",
  components: {
    QuestionResultCard,
    Complete,
  },
  data() {
    const store = useSessionStore();
    const currentQuestionID = computed(
      () => store.$state.currentGame?.currentQuestion || 0
    );
    const currentScore = computed(
      () => store.$state.currentGame?.currentScore || 0
    );
    const currentStreak = computed(
      () => store.$state.currentGame?.currentStreak || 0
    );
    const gameSessionData = ref<currentGameSession>({} as currentGameSession);
    const bShowFinalResults = ref(false);
    const question = computed(() => {
      if (
        currentQuestionID.value === -1 ||
        currentQuestionID.value === gameSessionData.value.questionDatas.length
      ) {
        return "Game Completed!";
      }
      return gameSessionData.value.questionDatas[currentQuestionID.value]
        .question;
    });

    const diffSetting = computed(
      () => store.$state.prefs?.difficulty || "Easy"
    );

    const options = computed(() => {
      if (
        currentQuestionID.value === -1 ||
        currentQuestionID.value === gameSessionData.value.questionDatas.length
      ) {
        bShowFinalResults.value = true;
        gameSessionData.value.gameEndTime = Date.now();
        store.setSessionData(gameSessionData.value);
        return [];
      }
      return gameSessionData.value.questionDatas[currentQuestionID.value]
        .options;
    });

    return {
      diffSetting,
      bShowResult: ref(false),
      bCorrect: ref(false),
      bShowFinalResults,
      correctAnswer: ref(""),
      transition: ref(false),
      currentScore,
      currentStreak,
      currentQuestionID,
      questionCatMetaData: ref<GameCategory>({
        category: "Spot the Odd Word Out",
        description: "",
        icon: "",
      } as GameCategory),
      selectedAnswer: ref(""),
      store,
      bLoaded: ref(false),
      gameSessionData,
      question,
      options,
    };
  },
  async mounted() {},
  async created() {
    // Load the Session Settings, etc

    await loadPlayData();

    await loadGameQuestionsForSession();

    if (!this.store.$state.currentGame) {
      console.error(
        "No game data found, please check your connection and try again."
      );
      return;
    }

    this.gameSessionData = this.store.$state.currentGame;

    this.questionCatMetaData = await loadCatSummary(
      this.store.$state.currentGame?.questionDatas[this.currentQuestionID]
        .category || null
    );
    this.bLoaded = true;
  },
  methods: {
    loadOptions(options: string[]) {
      return options.map((option) => {
        return {
          label: option,
          value: option,
        };
      });
    },
    finalizeAnswer() {
      // get index of selected answer:
      if (
        this.selectedAnswer === "" ||
        this.selectedAnswer === null ||
        this.selectedAnswer === undefined
      ) {
        this.$q.notify({
          color: "red-5",
          textColor: "white",
          icon: "warning",
          message: "Please select an answer before finalizing.",
        });
        return;
      }

      const selectedAnswerIndex = this.gameSessionData.questionDatas[
        this.gameSessionData.currentQuestion
      ].options.indexOf(this.selectedAnswer);
      const answerIndex =
        this.gameSessionData.questionDatas[this.gameSessionData.currentQuestion]
          .correctAnswer;
      console.log("Selected Answer Index: " + selectedAnswerIndex);
      console.log("Correct Answer Index: " + answerIndex);
      if (selectedAnswerIndex === answerIndex) {
        this.bCorrect = true;
        this.correctAnswer =
          this.gameSessionData.questionDatas[
            this.gameSessionData.currentQuestion
          ].options[answerIndex];
        this.bShowResult = true;
        this.store.updateScoreInfo(true);
      } else {
        this.bCorrect = false;
        this.correctAnswer =
          this.gameSessionData.questionDatas[
            this.gameSessionData.currentQuestion
          ].options[answerIndex];
        this.bShowResult = true;
        this.store.updateScoreInfo(false);
      }
    },
    closingActions() {
      this.store.endGame();
      this.$router.push({ path: "/" });
    },
    async nextQuestion() {
      // Logic to load the next question
      // this.$q.notify({
      //   color: 'blue-5',
      //   textColor: 'white',
      //   icon: 'refresh',
      //   message: 'Loading next question...'
      // });

      this.transition = true;
      setTimeout(() => (this.transition = false), 500);
      this.store.nextQuestion();


const key = this.store.$state.currentGame?.questionDatas[this.currentQuestionID]

if (typeof key !== 'undefined') {
      if (this.store.$state.currentGame?.questionDatas[this.currentQuestionID].category)
      this.questionCatMetaData = await loadCatSummary(this.store.$state.currentGame?.questionDatas[this.currentQuestionID].category )
}

      this.selectedAnswer = "";
    },
  },
});
</script>

<style>
/* Responsive adjustments can be made here */
@media (max-width: 599px) {
  .q-card {
    margin: 8px;
  }
}
</style>
