import { defineStore } from 'pinia';
import { PlayerPreferences, PlayerStats, currentGameSession, userData } from 'src/ts/models';

export const useSessionStore = defineStore('session-store', {
  state: () => ({
    toggleMode: null as PlayerPreferences["mode"] | null,
    toggleDifficulty: null as PlayerPreferences["difficulty"] | null,
    userData: {} as userData | null,
    playerData: {} as PlayerStats| null,
    prefs: {} as PlayerPreferences | null,
    currentGame: {
      loadedMode: "Word Mode",
      loadedDifficulty: "Medium",
      currentScore: 0,
      currentStreak: 0,
      currentQuestion: 0,
      correctAnswers: 0,
      incorrectAnswers: 0,
      gameStartTime: 0,
      gameEndTime: 0,
      questionDatas: [],
      bCompleted: false,
      bStarted: false
    } as currentGameSession | null,
  }),

  actions: {
    endGame() {
      const currentGame = this.currentGame
      if (currentGame) {
        currentGame.bCompleted = false
        currentGame.bStarted = false
        currentGame.correctAnswers = 0
        currentGame.incorrectAnswers = 0
        currentGame.currentScore = 0
        currentGame.currentStreak = 0
        currentGame.gameStartTime = 0
        currentGame.gameEndTime = 0
        currentGame.questionDatas = [] as any
        currentGame.currentQuestion = -1
        currentGame.gameEndTime = Date.now()
        this.currentGame = currentGame
      }
    },
    setToggleMode(mode: PlayerPreferences["mode"]) {
      this.toggleMode = mode;
    },
    setToggleDifficulty(difficulty: PlayerPreferences["difficulty"]) {
      this.toggleDifficulty = difficulty;
    },
    setPlayerData(playerData: PlayerStats) {
      this.playerData = playerData;
    },
    setUserData(userData: userData | null) {
      this.userData = userData;
    },
    setPlayerPres(prefs: PlayerPreferences) {
      this.prefs = prefs;
    },
    setSessionData(currentGame: currentGameSession) {
      this.currentGame = currentGame;
    },
    nextQuestion(bNormalMode: boolean = true) {
      const defaultMaxQuestions = 5
      let maxQuestions = defaultMaxQuestions
      const currentGame = this.currentGame

      if (currentGame) {

        if (bNormalMode === true){
          maxQuestions = currentGame?.questionDatas.length || defaultMaxQuestions
          console.log("Max Questions: ", maxQuestions)
        }

        if (currentGame?.correctAnswers + currentGame?.incorrectAnswers <= maxQuestions) {

          if (currentGame.bStarted === false) {
            console.log("Starting Game... First Question Down!!")
            currentGame.gameStartTime = Date.now()
            currentGame.bStarted = true
          }

          currentGame.currentQuestion += 1;
        } else {
          console.log("Game Completed!!")
          currentGame.bCompleted = true
          currentGame.currentQuestion = -1
          currentGame.gameEndTime = Date.now()

        }

        this.currentGame = currentGame;
        console.log("bStarted / Current Question:")
        console.log(currentGame.bStarted)
        console.log(currentGame.currentQuestion)
      } else {
        console.error("No Current Game Data Found")
      }

    },
    updateScoreInfo(correct: boolean) {

      if (this.currentGame == null) {
        console.error("No Current Game Data Found")
        return;
      } else {
       switch (this.currentGame.loadedDifficulty) {
          case "Easy":
            var score = 100;
            break;
          case "Medium":
            var score = 200;
            break;
          case "Hard":
            var score = 300;
            break;
          default:
            var score = 100;
            break;
        }
      }

      const currentGame = this.currentGame as any
      if (currentGame) {
        if (correct) {
          currentGame.correctAnswers += 1;
          currentGame.currentScore += score;
          currentGame.currentStreak += 1;
        } else {
          currentGame.incorrectAnswers += 1;
          currentGame.currentStreak = 0;
        }
        this.currentGame = currentGame;
      }

    },
    updateSessionDataByKey(key: string, value: any) {
      const currentGame = this.currentGame as any
      if (currentGame) {
        if (key in currentGame) {
          console.log("Updating Session Data: ", key, value)
          currentGame[key] = value;
          this.currentGame = currentGame;
        } else {
          console.error("Invalid Key: ", key)
        }
      }
    }

  },
});
