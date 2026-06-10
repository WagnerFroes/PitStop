import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { FuelPrice } from "../types/station";
import { formatCurrency } from "../utils/formatCurrency";

interface FuelPriceBadgeProps {
  fuelPrice: FuelPrice;
}

const fuelTypeLabels: Record<string, string> = {
  gasolina_comum: "Gasolina Comum",
  gasolina_aditivada: "Gasolina Aditivada",
  etanol: "Etanol",
  diesel_s10: "Diesel S10",
};

export default function FuelPriceBadge({ fuelPrice }: FuelPriceBadgeProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.fuelType}>{fuelTypeLabels[fuelPrice.type]}</Text>
      <Text style={styles.price}>{formatCurrency(fuelPrice.price)}</Text>
      <Text style={styles.date}>
        Atualizado em {fuelPrice.lastUpdated.toLocaleDateString("pt-BR")}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 8,
    borderWidth: 1,
    borderColor: colors.border,
    minWidth: 90,
  },
  fuelType: {
    fontSize: 10,
    color: colors.mutedText,
    marginBottom: 4,
    fontWeight: "500",
  },
  price: {
    fontSize: 16,
    color: colors.primary,
    fontWeight: "bold",
  },
  date: {
    fontSize: 9,
    color: colors.mutedText,
    marginTop: 4,
  },
});
