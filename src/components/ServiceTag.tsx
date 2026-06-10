import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { StationService } from "../types/station";

interface ServiceTagProps {
  service: StationService;
}

const serviceLabels: Record<StationService, string> = {
  conveniencia: "Conveniência",
  gelo: "Gelo",
  banheiro: "Banheiro",
  calibrador: "Calibrador",
  lava_rapido: "Lava-rápido",
  pix: "Pix",
  cartao: "Cartão",
  "24h": "24h",
};

export default function ServiceTag({ service }: ServiceTagProps) {
  return (
    <View style={styles.tag}>
      <Text style={styles.text}>{serviceLabels[service]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: colors.background,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
  },
  text: {
    fontSize: 10,
    color: colors.mutedText,
    fontWeight: "500",
  },
});
