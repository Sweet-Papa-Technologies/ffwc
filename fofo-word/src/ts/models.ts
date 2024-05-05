export interface WordChallenge {
  category: gameCats;  // Category of the word game (e.g., "Biblical Mode", "Word Mode")
  difficulty: string; // Difficulty level (e.g., "Easy", "Medium", "Hard")
  question: string;   // The question or challenge text
  options: string[];  // Array of answer choices
  correctAnswer: number; // Index of the correct choice in the 'options' array
}
export interface userDBObject {
  playerStats: PlayerStats;
  playerPreferences: PlayerPreferences;
}

export interface PlayerStats {
  highestScore: number;
  longestStreak: number;
  modePreference: diffSettings;
  userData: userData;
}

export interface userData {
  uid: string;
  email: string;
  displayName: string;
  authToken: string;
}

export interface LeaderboardEntry {
  playerName: string;
  playerScore: number;
}

export type modes = "Word Mode" | "Biblical Mode" | "Random Mode" | null;

export type gameCats = "Meaning Master" | "Biblical Mode" | "Context is Key" | "Spot the Odd Word Out";

export type diffSettings = "Easy" | "Medium" | "Hard" | null;

export interface GameCategory {
  category: gameCats;
  description: string;
  icon: string;
}

export interface PlayerPreferences {
  difficulty: diffSettings
  mode: modes
  soundEnabled: boolean;
  musicEnabled: boolean;
}

export interface currentGameSession {
  loadedMode: PlayerPreferences["mode"];
  loadedDifficulty: PlayerPreferences["difficulty"];
  currentScore: number;
  currentStreak: number;
  currentQuestion: number;
  correctAnswers: number;
  incorrectAnswers: number;
  gameStartTime: number;
  gameEndTime: number;
  questionDatas: WordChallenge[];
  bCompleted: boolean;
  bStarted: boolean;
}

