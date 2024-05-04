import { userData, PlayerStats, PlayerPreferences } from "src/ts/models";

export const userDatas = {
  uid: "123456789",
  email: "N/A",
  displayName: "Player 1",
  authToken: ""
} as userData;

export const PlayerStatas = {
  highestScore: 0,
  longestStreak: 0,
  modePreference: "Easy",
  userData: userDatas
} as PlayerStats;

export const playerPrefs = {
  difficulty: "Easy",
  mode: "Biblical Mode",
  soundEnabled: true,
  musicEnabled: true
} as PlayerPreferences;
