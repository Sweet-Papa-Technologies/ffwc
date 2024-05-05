import { PlayerPreferences, PlayerStats, WordChallenge, diffSettings, modes, userData, currentGameSession, GameCategory, gameCats } from './models';
import { useSessionStore } from 'src/stores/session-store';
import { PlayerStatas, userDatas, playerPrefs } from 'app/game_data/dummyUserData';
import { bible_questions, word_questions } from 'app/game_data/questions';

const store = useSessionStore();

export const loadGameData = async (): Promise<userData> => {
  // TODO=> Load game data from the server
  const userData = userDatas
  store.setUserData(userData)
  return userData;
}

export const loadPlayData = async (): Promise<PlayerStats> => {
  // TODO=> Load game data from the server
  const playerDatas = PlayerStatas


  if (store.userData) {
    playerDatas.userData = store.userData
  }

  const prefs = await loadPlayerPrefsFromServer()

  store.setPlayerData(playerDatas)
  store.setPlayerPres(prefs)

  return playerDatas;
}


export const loadPlayerPrefsFromServer = async ():Promise<PlayerPreferences> => {
  // TODO=> Load game data from the server
  const prefs = playerPrefs

  // Set Toggle Mode and Difficulty
  if (store.$state.toggleDifficulty && store.$state.toggleMode) {
    prefs.mode = store.$state.toggleMode
    prefs.difficulty = store.$state.toggleDifficulty
  }

  console.log(prefs)
  return prefs
}

function loadQuestionsByDiff(difficulty:diffSettings, questions:WordChallenge[]): WordChallenge[] {
  return questions.filter((question) => {
      return question.difficulty.toLowerCase() === difficulty?.toLocaleLowerCase()
  })
}

export const loadGameQuestionsForSession = async (mode:modes=null,difficulty:diffSettings=null, bSound:null|boolean=null, bEffects:null|boolean=null, maxQuestions:number=5): Promise<currentGameSession> => {
  // TODO=> Load game data from the server, instead of dummy data
  console.log("Loading Game Questions")
  if (!mode) {
    mode = store.prefs?.mode ? store.prefs.mode : "Word Mode"
  }

  if (!difficulty) {
    difficulty = store.prefs?.difficulty ? store.prefs.difficulty : "Medium"
  }

  if (bSound == null && store.prefs) {
    bSound = store.prefs.soundEnabled
  } else {
    bSound = true
  }

  if (bEffects == null && store.prefs) {
    bEffects = store.prefs.musicEnabled
  } else {
    bEffects = true
  }

  const currentGameSession = {
    loadedMode: mode,
    loadedDifficulty: difficulty,
    currentScore: 0,
    currentStreak: 0,
    currentQuestion: 0,
    correctAnswers: 0,
    incorrectAnswers: 0,
    gameStartTime: Date.now(),
    gameEndTime: 0,
    questionDatas: [] as WordChallenge[],
    bCompleted: false,
    bStarted: false
  } as currentGameSession

  // Load the questions for the game session
  // TODO=> Load game data from the server
  let questions = word_questions
  switch (mode) {
    case "Word Mode":
      break;
    case "Biblical Mode":
      questions = bible_questions
      break;
    case "Random Mode":
      questions = bible_questions.concat(word_questions)
      break;
    default:
      break;
  }

  console.log(difficulty, questions.length)

  switch (difficulty) {
    case "Easy":
      maxQuestions = 5
      break;
    case "Medium":
      maxQuestions = 8
      break;
    case "Hard":
      maxQuestions = 10
      break;
    default:
      maxQuestions = 5
      break;
  }

  console.log("Number of Questions to be Loaded: ", maxQuestions)

  currentGameSession.questionDatas = loadQuestionsByDiff(difficulty, questions)

  // Randomize the questions
  currentGameSession.questionDatas = currentGameSession.questionDatas.sort(() => Math.random() - 0.5)

  // Limit the Questions Based on Number Being Asked:
  currentGameSession.questionDatas = currentGameSession.questionDatas.slice(0, maxQuestions)

  console.log ("Questions Loaded: ", currentGameSession.questionDatas.length)

  store.setSessionData(currentGameSession)

  return currentGameSession
}

export const loadCatSummary = (cat:gameCats|null|undefined): GameCategory => {
  // TODO=> Load game data from the server

  let desc = "Mode Failed to Load Correctly"
  let icon = "🤔"

  switch (cat) {
    case "Meaning Master":
      desc = "Test your vocabulary by matching words with their meanings."
      icon = "📚"
      break;
    case "Biblical Mode":
      desc = "Test your knowledge of the Bible with these questions."
      icon = "📖"
      break;
    case "Context is Key":
      desc = "Match words with their correct context."
      icon = "🔍"
      break;
    case "Spot the Odd Word Out":
      desc = "Find the word that doesn't belong in the group."
      icon = "🔍"
      break;
    default:
      break;

  }
  return {
    category: cat || "Meaning Master",
    description: desc,
    icon: icon
  }
}
