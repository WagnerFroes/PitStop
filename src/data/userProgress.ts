import { UserProgress } from "../types/userProgress";

export const mockUserProgress: UserProgress = {
  userName: "Motorista PitStop",
  currentLevel: { name: "Motorista Iniciante", icon: "🏁" },
  currentXP: 120,
  nextLevel: { name: "Caçador de Preços", icon: "🏁" },
  nextLevelXP: 300,
  badges: [
    {
      name: "Primeira Pesquisa",
      description: "Pesquisou preços pela primeira vez",
      icon: "🔍",
      earnedAt: new Date("2026-01-15"),
    },
    {
      name: "Explorador",
      description: "Visiou 5 postos diferentes",
      icon: "🗺️",
      earnedAt: new Date("2026-02-20"),
    },
    {
      name: "Economizador",
      description: "Comparou preços de 3 combustíveis",
      icon: "💰",
      earnedAt: new Date("2026-03-10"),
    },
    {
      name: "Atualizador",
      description: "Atualizou preço de combustível",
      icon: "✏️",
      earnedAt: new Date("2026-04-05"),
    },
  ],
};
