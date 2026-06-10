import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import type { UserProgress } from "../types/userProgress";

type ProgressCardProps = {
  data: UserProgress;
};

const ProgressCard = ({ data }: ProgressCardProps) => {
  const progressPercentage = (data.currentXP / data.nextLevelXP) * 100;

  return (
    <View style={styles.container}>
      {/* Cabeçalho do card */}
      <View style={styles.header}>
        <Text style={styles.userName}>{data.userName}</Text>
        <View style={styles.xpBadge}>
          <Text style={styles.xpText}>
            {data.currentXP} / {data.nextLevelXP} XP
          </Text>
        </View>
      </View>

      {/* Nível atual */}
      <View style={styles.levelRow}>
        <Text style={styles.levelLabel}>Nível atual</Text>
        <View style={styles.currentLevel}>
          <Text style={styles.levelIcon}>{data.currentLevel.icon}</Text>
          <Text style={styles.levelName}>{data.currentLevel.name}</Text>
        </View>
      </View>

      {/* Barra de progresso */}
      <View style={styles.progressBarContainer}>
        <View
          style={[styles.progressBarFill, { width: `${progressPercentage}%` }]}
        />
      </View>

      {/* Próximo nível */}
      <Text style={styles.nextLevelLabel}>
        Próximo: {data.nextLevel.name} ({data.nextLevelXP - data.currentXP} XP
        restantes)
      </Text>

      {/* Badges */}
      {data.badges.length > 0 && (
        <View style={styles.badgesSection}>
          <Text style={styles.badgesTitle}>Conquistas</Text>
          <View style={styles.badgesRow}>
            {data.badges.map((badge, index) => (
              <View key={index} style={styles.badge}>
                <Text style={styles.badgeIcon}>{badge.icon}</Text>
                <Text style={styles.badgeName}>{badge.name}</Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    marginBottom: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 12,
  },
  userName: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  xpBadge: {
    backgroundColor: colors.primary,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  xpText: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  levelRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  levelLabel: {
    fontSize: 12,
    color: colors.mutedText,
    marginRight: 8,
  },
  currentLevel: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  levelIcon: {
    fontSize: 16,
  },
  levelName: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
  },
  progressBarContainer: {
    height: 8,
    backgroundColor: colors.border,
    borderRadius: 4,
    overflow: "hidden",
    marginBottom: 8,
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: 4,
  },
  nextLevelLabel: {
    fontSize: 12,
    color: colors.mutedText,
    marginBottom: 12,
  },
  badgesSection: {
    marginTop: 4,
  },
  badgesTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 8,
  },
  badgesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  badge: {
    backgroundColor: "#EBF5FF",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    alignItems: "center",
    gap: 4,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  badgeIcon: {
    fontSize: 18,
  },
  badgeName: {
    fontSize: 10,
    fontWeight: "600",
    color: colors.primary,
  },
});

export default ProgressCard;
