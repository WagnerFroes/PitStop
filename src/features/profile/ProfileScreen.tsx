import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../../constants/colors";
import { mockUserProgress } from "../../data/userProgress";
import type { UserBadge } from "../../types/userProgress";

type ContributionItem = {
  icon: string;
  title: string;
  subtitle: string;
  timestamp: string;
};

const mockStats = [
  { label: "Preços atualizados", value: 8 },
  { label: "Preços confirmados", value: 15 },
  { label: "Postos avaliados", value: 4 },
  { label: "XP total", value: 120 },
];

const mockContributions: ContributionItem[] = [
  {
    icon: "✏️",
    title: "Atualizou gasolina comum",
    subtitle: "Posto Paulista Express",
    timestamp: "2h atrás",
  },
  {
    icon: "✅",
    title: "Confirmou preço de etanol",
    subtitle: "Posto Pinheiros Premium",
    timestamp: "1 dia atrás",
  },
  {
    icon: "⭐",
    title: "Avaliou o posto",
    subtitle: "Posto Moema Eco",
    timestamp: "3 dias atrás",
  },
];

const XP_PER_ROW = 30;
const TOTAL_ROWS = Math.ceil(mockUserProgress.nextLevelXP / XP_PER_ROW);
const CURRENT_ROW = Math.ceil(mockUserProgress.currentXP / XP_PER_ROW);

const getRowLabel = (rowIndex: number): string | null => {
  const xpValue = rowIndex * XP_PER_ROW;
  if (xpValue <= mockUserProgress.nextLevelXP) {
    return mockUserProgress.nextLevel.name;
  }
  return null;
};

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Cabeçalho do perfil */}
        <View style={styles.profileHeader}>
          <View style={styles.avatarCircle}>
            <Text style={styles.avatarText}>🏎️</Text>
          </View>
          <Text style={styles.userName}>{mockUserProgress.userName}</Text>
          <View style={styles.xpBadge}>
            <Text style={styles.xpValue}>{mockUserProgress.currentXP}</Text>
            <Text style={styles.xpLabel}>
              / {mockUserProgress.nextLevelXP} XP
            </Text>
          </View>
        </View>

        {/* Nível atual */}
        <View style={styles.levelCard}>
          <Text style={styles.sectionLabel}>Nível Atual</Text>
          <View style={styles.currentLevelRow}>
            <Text style={styles.levelIcon}>
              {mockUserProgress.currentLevel.icon}
            </Text>
            <Text style={styles.levelName}>
              {mockUserProgress.currentLevel.name}
            </Text>
          </View>
        </View>

        {/* Barra de progresso */}
        <View style={styles.progressSection}>
          <View style={styles.progressBarBackground}>
            <View
              style={[
                styles.progressBarFill,
                {
                  width: `${(mockUserProgress.currentXP / mockUserProgress.nextLevelXP) * 100}%`,
                },
              ]}
            />
          </View>
          <Text style={styles.progressText}>
            Próximo: {mockUserProgress.nextLevel.name} —{" "}
            {mockUserProgress.nextLevelXP - mockUserProgress.currentXP} XP
            restantes
          </Text>
        </View>

        {/* Grid de XP */}
        <View style={styles.xpGridCard}>
          <Text style={styles.cardTitle}>Mapa de Progresso</Text>
          <View style={styles.xpGridContainer}>
            {Array.from({ length: TOTAL_ROWS }, (_, rowIndex) => (
              <View key={rowIndex} style={styles.xpGridRowWrapper}>
                {Array.from({ length: 5 }, (_, colIndex) => {
                  const cellIndex = rowIndex * 5 + colIndex + 1;
                  const isCompleted = cellIndex <= CURRENT_ROW;
                  const xpValue = cellIndex * XP_PER_ROW;
                  const isRowLabel =
                    colIndex === 4 && xpValue <= mockUserProgress.nextLevelXP;

                  return (
                    <View
                      key={colIndex}
                      style={[
                        styles.xpCell,
                        isCompleted && styles.xpCellFilled,
                        xpValue === mockUserProgress.currentXP &&
                          styles.xpCellCurrent,
                      ]}
                    >
                      {isRowLabel ? (
                        <Text style={styles.rowLabel}>
                          {xpValue === mockUserProgress.currentXP
                            ? "⭐"
                            : `${xpValue} XP`}
                        </Text>
                      ) : (
                        isCompleted && (
                          <Text style={styles.cellCheckmark}>✓</Text>
                        )
                      )}
                    </View>
                  );
                })}
              </View>
            ))}
          </View>
        </View>

        {/* Estatísticas */}
        <View style={styles.statsCard}>
          <Text style={styles.cardTitle}>Estatísticas</Text>
          <View style={styles.statsGrid}>
            {mockStats.map((stat) => (
              <View key={stat.label} style={styles.statItem}>
                <Text style={styles.statValue}>{stat.value}</Text>
                <Text style={styles.statLabel}>{stat.label}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Badges / Conquistas */}
        <View style={styles.badgesCard}>
          <Text style={styles.cardTitle}>Conquistas</Text>
          <View style={styles.badgesGrid}>
            {mockUserProgress.badges.map((badge: UserBadge, index: number) => (
              <View key={index} style={styles.badgeItem}>
                <Text style={styles.badgeIcon}>{badge.icon}</Text>
                <Text style={styles.badgeName}>{badge.name}</Text>
                <Text style={styles.badgeDesc}>{badge.description}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Histórico de contribuições */}
        <View style={styles.historyCard}>
          <Text style={styles.cardTitle}>Histórico de Contribuições</Text>
          {mockContributions.map((item, index) => (
            <View key={index} style={styles.contributionItem}>
              <View style={styles.contributionLeft}>
                <Text style={styles.contributionIcon}>{item.icon}</Text>
                <View style={styles.contributionTexts}>
                  <Text style={styles.contributionTitle}>{item.title}</Text>
                  <Text style={styles.contributionSubtitle}>
                    {item.subtitle}
                  </Text>
                </View>
              </View>
              <Text style={styles.contributionTime}>{item.timestamp}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },
  profileHeader: {
    alignItems: "center",
    paddingVertical: 24,
    marginBottom: 16,
  },
  avatarCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: colors.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },
  avatarText: {
    fontSize: 36,
  },
  userName: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
  },
  xpBadge: {
    backgroundColor: "#EBF5FF",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
  },
  xpValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.primary,
  },
  xpLabel: {
    fontSize: 12,
    color: colors.mutedText,
  },
  levelCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },
  sectionLabel: {
    fontSize: 12,
    color: colors.mutedText,
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 8,
  },
  currentLevelRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  levelIcon: {
    fontSize: 20,
  },
  levelName: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.primary,
  },
  progressSection: {
    marginBottom: 12,
  },
  progressBarBackground: {
    height: 10,
    backgroundColor: colors.border,
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 5,
  },
  progressText: {
    fontSize: 12,
    color: colors.mutedText,
  },
  xpGridCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 12,
  },
  xpGridContainer: {},
  xpGridRowWrapper: {
    flexDirection: "row",
    gap: 4,
    marginBottom: 4,
  },
  xpCell: {
    flex: 1,
    height: 32,
    borderRadius: 6,
    backgroundColor: colors.border,
    alignItems: "center",
    justifyContent: "center",
  },
  xpCellFilled: {
    backgroundColor: "#EBF5FF",
    borderWidth: 1,
    borderColor: colors.primary,
  },
  xpCellCurrent: {
    borderWidth: 2,
    borderColor: colors.primary,
  },
  cellCheckmark: {
    fontSize: 14,
    color: colors.primary,
    fontWeight: "bold",
  },
  rowLabel: {
    fontSize: 8,
    color: colors.text,
    fontWeight: "600",
  },
  statsCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },
  statsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  statItem: {
    width: "48%",
    backgroundColor: "#EBF5FF",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    marginBottom: 4,
  },
  statValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.primary,
  },
  statLabel: {
    fontSize: 11,
    color: colors.mutedText,
    textAlign: "center",
    marginTop: 4,
  },
  badgesCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 12,
  },
  badgesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  badgeItem: {
    width: "48%",
    backgroundColor: "#FFF9E6",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#FFD700",
    marginBottom: 4,
  },
  badgeIcon: {
    fontSize: 24,
    marginBottom: 4,
  },
  badgeName: {
    fontSize: 12,
    fontWeight: "bold",
    color: colors.text,
    textAlign: "center",
  },
  badgeDesc: {
    fontSize: 10,
    color: colors.mutedText,
    textAlign: "center",
    marginTop: 2,
  },
  historyCard: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
  },
  contributionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: colors.border,
  },
  contributionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contributionIcon: {
    fontSize: 20,
  },
  contributionTexts: {
    gap: 2,
  },
  contributionTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
  },
  contributionSubtitle: {
    fontSize: 11,
    color: colors.mutedText,
  },
  contributionTime: {
    fontSize: 11,
    color: colors.mutedText,
  },
});
