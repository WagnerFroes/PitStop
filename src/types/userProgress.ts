export type UserLevel = {
  name: string;
  icon: "🏁";
};

export type UserBadge = {
  name: string;
  description: string;
  icon: string;
  earnedAt: Date;
};

export type UserProgress = {
  userName: string;
  currentLevel: UserLevel;
  currentXP: number;
  nextLevel: UserLevel;
  nextLevelXP: number;
  badges: UserBadge[];
};
