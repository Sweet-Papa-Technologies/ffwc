<template>
  <q-page class="flex flex-center">
    <QuestionResultCard
      :correct="bCorrect"
      :correctAnswer="correctAnswer"
      :bShow="bShowResult"
      @next="bShowResult=false; nextQuestion()"
    />
    <div class="q-pa-md" style="max-width: 700px; width: 100%;" v-if="bLoaded==true">
      <div class="text-h5 text-center q-my-md">{{ questionCatMetaData.category }}</div>
      <div class="text-subtitle1 q-my-md">{{ questionCatMetaData.description }}</div>
      <q-card class="q-mb-md">
        <q-card-section>
          <div class="q-mb-md">{{ gameSessionData.questionDatas[currentQuestionID].question }}</div>
          <q-option-group
            v-model="selectedAnswer"
            :options="loadOptions(gameSessionData.questionDatas[currentQuestionID].options)"
            type="radio"
            color="primary"

          />
        </q-card-section>
        <q-card-actions align="around">
          <q-btn flat label="Finalize Answer" @click="finalizeAnswer" color="primary" />
        </q-card-actions>
      </q-card>

      <!-- // Display the current score and streak -->
      <q-card class="q-mt-md">
        <q-card-section>
          <div class="text-h6">Current Score: {{ currentScore }}</div>
          <div class="text-h6">Current Streak: {{ currentStreak }}</div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from 'vue';
import { currentGameSession, GameCategory } from '../ts/models';
import { useSessionStore } from "../stores/session-store"
import { loadGameQuestionsForSession, loadPlayData, loadCatSummary } from 'src/ts/loadData';
import QuestionResultCard from 'src/components/QuestionResultCard.vue';

export default defineComponent({
  name: 'MainGame',
  components: {
    QuestionResultCard
  },
  data() {
    const store = useSessionStore();
    const currentQuestionID = computed (()=> store.$state.currentGame?.currentQuestion || 0)
    const currentScore = computed (()=> store.$state.currentGame?.currentScore || 0)
    const currentStreak = computed (()=> store.$state.currentGame?.currentStreak || 0)

    return {
      bShowResult: false,
      bCorrect: false,
      correctAnswer: '',
      currentScore,
      currentStreak,
      currentQuestionID,
      questionCatMetaData: ref<GameCategory>({
        category: "Spot the Odd Word Out",
        description: '',
        icon: ''
      } as GameCategory),
      selectedAnswer: ref(''),
      store,
      bLoaded: false,
      gameSessionData: ref<currentGameSession> ({

      } as currentGameSession)
     };
  },
  async mounted () {

  },
  async created(){
    // Load the Session Settings, etc

    await loadPlayData()

    await loadGameQuestionsForSession()

    if (!this.store.$state.currentGame) {
      console.error('No game data found, please check your connection and try again.')
      return
    }



    this.gameSessionData = this.store.$state.currentGame

    this.questionCatMetaData = await loadCatSummary(this.store.$state.currentGame?.questionDatas[this.currentQuestionID].category || null)
    this.bLoaded = true
  },
  methods: {
    loadOptions(options: string[]) {
      return options.map((option) => {
        return {
          label: option,
          value: option
        }
      })
    },
    finalizeAnswer() {
      // get index of selected answer:
      if (this.selectedAnswer === '' || this.selectedAnswer === null || this.selectedAnswer === undefined) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Please select an answer before finalizing.'
        });
        return
      }

      const selectedAnswerIndex = this.gameSessionData.questionDatas[this.gameSessionData.currentQuestion].options.indexOf(this.selectedAnswer)
      const answerIndex = this.gameSessionData.questionDatas[this.gameSessionData.currentQuestion].correctAnswer
      console.log("Selected Answer Index: " + selectedAnswerIndex)
      console.log("Correct Answer Index: " + answerIndex)
      if (selectedAnswerIndex === answerIndex) {
        // this.$q.notify({
        //   color: 'green-4',
        //   textColor: 'white',
        //   icon: 'check',
        //   message: 'Correct answer!'
        // });
        this.bCorrect = true
        this.correctAnswer = this.gameSessionData.questionDatas[this.gameSessionData.currentQuestion].options[this.gameSessionData.correctAnswers]
        this.bShowResult = true
        this.store.updateScoreInfo(true)
      } else {
        // this.$q.notify({
        //   color: 'red-5',
        //   textColor: 'white',
        //   icon: 'warning',
        //   message: 'Incorrect answer, try again!'
        // });
        this.bCorrect = false
        this.correctAnswer = this.gameSessionData.questionDatas[this.gameSessionData.currentQuestion].options[this.gameSessionData.correctAnswers]
        this.bShowResult = true
        this.store.updateScoreInfo(false)
      }



    },
    nextQuestion() {
      // Logic to load the next question
      this.$q.notify({
        color: 'blue-5',
        textColor: 'white',
        icon: 'refresh',
        message: 'Loading next question...'
      });

      this.store.nextQuestion()
      this.selectedAnswer = ''
      this.$forceUpdate()

    }
  }
})
</script>

<style>
/* Responsive adjustments can be made here */
@media (max-width: 599px) {
  .q-card {
    margin: 8px;
  }
}
</style>



