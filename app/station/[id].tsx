import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import FuelPriceBadge from "../../src/components/FuelPriceBadge";
import ServiceTag from "../../src/components/ServiceTag";
import { colors } from "../../src/constants/colors";
import { mockStations } from "../../src/data/stations";
import type { StationService } from "../../src/types/station";

const StationDetailScreen = () => {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id: string }>();

  const station = mockStations.find((s) => s.id === id);

  if (!station) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Posto não encontrado</Text>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Cabeçalho Principal */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>

        <View style={styles.brandContainer}>
          <Text style={styles.brand}>{station.brand}</Text>
          <Text style={styles.name}>{station.name}</Text>
        </View>

        <View
          style={[
            styles.statusBadge,
            {
              backgroundColor: station.isOpen ? colors.success : colors.danger,
            },
          ]}
        >
          <Text style={styles.statusText}>
            {station.isOpen ? "Aberto" : "Fechado"}
          </Text>
        </View>
      </View>

      {/* Localização e Meta Info */}
      <View style={styles.infoCard}>
        <View style={styles.addressContainer}>
          <Text style={styles.label}>Endereço</Text>
          <Text style={styles.value}>{station.address}</Text>
          <Text style={styles.subValue}>
            {station.neighborhood}, {station.city}
          </Text>
        </View>

        <View style={styles.divider} />

        <View style={styles.metaContainer}>
          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Distância</Text>
            <Text style={styles.metaValue}>
              {station.distanceInKm.toFixed(1)} km
            </Text>
          </View>

          <View style={styles.metaItem}>
            <Text style={styles.metaLabel}>Avaliação</Text>
            <View style={styles.ratingRow}>
              <Text style={styles.starIcon}>★</Text>
              <Text style={styles.metaValue}>{station.rating}</Text>
              <Text style={styles.reviewCount}>({station.reviewsCount})</Text>
            </View>
          </View>
        </View>
      </View>

      {/* Preços dos Combustíveis */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Preços dos Combustíveis</Text>
        <View style={styles.pricesContainer}>
          {station.fuelPrices.map((price) => (
            <FuelPriceBadge key={price.type} fuelPrice={price} />
          ))}
        </View>
      </View>

      {/* Serviços Disponíveis */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Serviços</Text>
        <View style={styles.servicesContainer}>
          {station.services.map((service: StationService) => (
            <ServiceTag key={service} service={service} />
          ))}
        </View>
      </View>

      {/* Informações Adicionais */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações</Text>
        <View style={styles.infoRow}>
          <Text style={styles.label}>Última atualização:</Text>
          <Text style={styles.value}>{formatDate(station.lastUpdatedAt)}</Text>
        </View>
      </View>

      {/* Botão de Atualizar Preço */}
      <TouchableOpacity
        style={styles.updateButton}
        onPress={() =>
          router.push(`/station/${station.id}/update-price` as any)
        }
      >
        <Text style={styles.updateButtonText}>Atualizar Preço</Text>
      </TouchableOpacity>

      {/* Espaço extra no final para melhor scroll */}
      <View style={{ height: 20 }} />
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
    alignItems: "flex-start",
    marginBottom: 20,
    gap: 12,
  },
  backButton: {
    padding: 8,
    marginTop: -8,
  },
  backButtonText: {
    color: colors.primary,
    fontSize: 16,
    fontWeight: "500",
  },
  brandContainer: {
    flex: 1,
  },
  brand: {
    fontSize: 14,
    fontWeight: "600",
    textTransform: "uppercase",
    color: colors.primary,
    marginBottom: 4,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: colors.text,
  },
  statusBadge: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
    borderWidth: 1,
    borderColor: colors.border,
  },
  addressContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: colors.secondary,
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 4,
  },
  subValue: {
    fontSize: 14,
    color: colors.mutedText,
  },
  divider: {
    height: 1,
    backgroundColor: colors.border,
    marginVertical: 16,
  },
  metaContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  metaItem: {
    alignItems: "center",
  },
  metaLabel: {
    fontSize: 13,
    color: colors.secondary,
    marginBottom: 4,
  },
  metaValue: {
    fontSize: 16,
    fontWeight: "bold",
    color: colors.text,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  starIcon: {
    color: "#FFB800",
    marginRight: 4,
    fontSize: 16,
  },
  reviewCount: {
    fontSize: 14,
    color: colors.mutedText,
    marginLeft: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
    marginBottom: 12,
  },
  pricesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.border,
  },
  updateButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 8,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  updateButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  errorText: {
    fontSize: 18,
    color: colors.danger,
    textAlign: "center",
    marginTop: 40,
  },
});

export default StationDetailScreen;
