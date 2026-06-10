import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { colors } from "../../../src/constants/colors";
import { FuelPrice } from "../../../src/types/station";
import { formatCurrency } from "../../../src/utils/formatCurrency";

const UpdatePriceScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  // dados mock do posto
  const station = {
    id: id,
    name: "Posto-exemplo",
    brand: "Marca",
    fuelPrices: [
      {
        type: "gasolina_comum" as FuelPrice["type"],
        price: 5.49,
        lastUpdated: new Date(),
      },
      {
        type: "etanol" as FuelPrice["type"],
        price: 3.49,
        lastUpdated: new Date(),
      },
    ] as FuelPrice[],
  };

  const [selectedFuel, setSelectedFuel] = useState<FuelPrice | null>(null);
  const [newPrice, setNewPrice] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const fuelTypeLabels: Record<string, string> = {
    gasolina_comum: "Gasolina Comum",
    gasolina_aditivada: "Gasolina Aditivada",
    etanol: "Etanol",
    diesel_s10: "Diesel S10",
  };

  const handleConfirm = () => {
    if (!selectedFuel) {
      Alert.alert("Atenção", "Selecione um combustível.");
      return;
    }
    if (!newPrice || isNaN(Number(newPrice)) || Number(newPrice) <= 0) {
      Alert.alert("Atenção", "Digite um valor válido para o preço.");
      return;
    }

    setShowSuccess(true);
  };

  const handleUpdateAnother = () => {
    setNewPrice("");
    setShowSuccess(false);
    setSelectedFuel(null);
  };

  const handleBackToDetails = () => {
    router.back();
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {showSuccess ? (
        /* Area de sucesso */
        <View style={styles.successContainer}>
          <Text style={styles.successIcon}>✓</Text>
          <Text style={styles.successTitle}>Preço atualizado com sucesso!</Text>
          <Text style={styles.successXP}>+15 XP ganhos</Text>

          <View style={styles.successDetails}>
            <View style={styles.successDetailRow}>
              <Text style={styles.successDetailLabel}>Posto:</Text>
              <Text style={styles.successDetailValue}>{station.name}</Text>
            </View>
            <View style={styles.successDetailRow}>
              <Text style={styles.successDetailLabel}>Combustível:</Text>
              <Text style={styles.successDetailValue}>
                {fuelTypeLabels[selectedFuel?.type || ""]}
              </Text>
            </View>
            <View style={styles.successDetailRow}>
              <Text style={styles.successDetailLabel}>Valor informado:</Text>
              <Text style={styles.successDetailValue}>
                {formatCurrency(Number(newPrice))}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.updateAnotherButton}
            onPress={handleUpdateAnother}
          >
            <Text style={styles.updateAnotherButtonText}>
              Atualizar outro combustível
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.backToDetailsButton}
            onPress={handleBackToDetails}
          >
            <Text style={styles.backToDetailsButtonText}>
              Voltar para detalhes do posto
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        /* Formulário de atualização */
        <>
          {/* Cabeçalho */}
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => router.back()}
              style={styles.backButton}
            >
              <Text style={styles.backButtonText}>← Voltar</Text>
            </TouchableOpacity>
            <Text style={styles.title}>Atualizar preço</Text>
          </View>

          {/* Info do posto */}
          <View style={styles.stationInfo}>
            <Text style={styles.stationBrand}>{station.brand}</Text>
            <Text style={styles.stationName}>{station.name}</Text>
            <Text style={styles.stationAddress}>{station.id}</Text>
          </View>

          {/* Seleção de combustível */}
          <Text style={styles.sectionLabel}>Selecione o combustível</Text>
          <View style={styles.fuelList}>
            {station.fuelPrices.map((fuel) => (
              <TouchableOpacity
                key={fuel.type}
                style={[
                  styles.fuelOption,
                  selectedFuel?.type === fuel.type && styles.fuelOptionSelected,
                ]}
                onPress={() => setSelectedFuel(fuel)}
              >
                <Text
                  style={[
                    styles.fuelOptionLabel,
                    selectedFuel?.type === fuel.type &&
                      styles.fuelOptionLabelSelected,
                  ]}
                >
                  {fuelTypeLabels[fuel.type] || fuel.type}
                </Text>
                <Text
                  style={[
                    styles.fuelOptionPrice,
                    selectedFuel?.type === fuel.type &&
                      styles.fuelOptionLabelSelected,
                  ]}
                >
                  {formatCurrency(fuel.price)}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          {/* Campo de novo preço */}
          <Text style={styles.sectionLabel}>Novo valor</Text>
          <TextInput
            style={styles.input}
            placeholder="Ex: 5.49"
            keyboardType="decimal-pad"
            value={newPrice}
            onChangeText={setNewPrice}
            placeholderTextColor={colors.mutedText}
          />

          {/* Botão confirmar */}
          <TouchableOpacity
            style={[
              styles.confirmButton,
              !selectedFuel && styles.confirmButtonDisabled,
            ]}
            onPress={handleConfirm}
          >
            <Text style={styles.confirmButtonText}>Confirmar atualização</Text>
          </TouchableOpacity>

          <View style={{ height: 30 }} />
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    gap: 12,
  },
  backButton: {
    padding: 8,
  },
  backButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "500",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },
  stationInfo: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: colors.border,
  },
  stationBrand: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
    color: colors.primary,
    marginBottom: 4,
  },
  stationName: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 4,
  },
  stationAddress: {
    fontSize: 13,
    color: colors.mutedText,
  },
  sectionLabel: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.text,
    marginBottom: 10,
    marginTop: 8,
  },
  fuelList: {
    gap: 8,
    marginBottom: 20,
  },
  fuelOption: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 14,
    borderWidth: 1.5,
    borderColor: colors.border,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fuelOptionSelected: {
    borderColor: colors.primary,
    backgroundColor: "#EBF5FF",
  },
  fuelOptionLabel: {
    fontSize: 15,
    color: colors.mutedText,
    fontWeight: "500",
  },
  fuelOptionLabelSelected: {
    color: colors.primary,
    fontWeight: "600",
  },
  fuelOptionPrice: {
    fontSize: 15,
    color: colors.mutedText,
    fontWeight: "600",
  },
  input: {
    backgroundColor: colors.surface,
    borderRadius: 10,
    padding: 14,
    fontSize: 18,
    color: colors.text,
    borderWidth: 1.5,
    borderColor: colors.border,
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  confirmButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  confirmButtonDisabled: {
    backgroundColor: colors.mutedText,
    opacity: 0.5,
  },
  successContainer: {
    alignItems: "center",
    paddingVertical: 32,
  },
  successIcon: {
    fontSize: 64,
    fontWeight: "bold",
    color: "#22c55e",
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 8,
    textAlign: "center",
  },
  successXP: {
    fontSize: 18,
    fontWeight: "600",
    color: colors.primary,
    marginBottom: 24,
  },
  successDetails: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    padding: 16,
    width: "100%",
    borderWidth: 1,
    borderColor: colors.border,
    marginBottom: 20,
  },
  successDetailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  successDetailLabel: {
    fontSize: 14,
    color: colors.mutedText,
    fontWeight: "500",
  },
  successDetailValue: {
    fontSize: 14,
    color: colors.text,
    fontWeight: "600",
  },
  updateAnotherButton: {
    backgroundColor: colors.surface,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    borderWidth: 1.5,
    borderColor: colors.border,
    marginBottom: 12,
  },
  updateAnotherButtonText: {
    fontSize: 15,
    color: colors.primary,
    fontWeight: "600",
  },
  backToDetailsButton: {
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: "100%",
  },
  backToDetailsButtonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default UpdatePriceScreen;
