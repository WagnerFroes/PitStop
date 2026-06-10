import { useRouter } from "expo-router";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { colors } from "../constants/colors";
import { Station } from "../types/station";
import FuelPriceBadge from "./FuelPriceBadge";
import ServiceTag from "./ServiceTag";

interface StationCardProps {
  station: Station;
}

const StationCard = ({ station }: StationCardProps) => {
  const router = useRouter();

  const handlePress = () => {
    router.push(`/station/${station.id}` as any);
  };
  // Filtra os serviços para mostrar apenas até 4
  const visibleServices = station.services.slice(0, 4);

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}
    >
      {/* Cabeçalho do Card: Marca e Nome */}
      <View style={styles.header}>
        <View style={styles.brandContainer}>
          <Text style={styles.brand}>{station.brand}</Text>
          <Text style={styles.name}>{station.name}</Text>
        </View>

        {/* Status Aberto/Fechado */}
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

      {/* Localização */}
      <Text style={styles.address}>{station.address}</Text>
      <Text style={styles.neighborhood}>
        {station.neighborhood}, {station.city}
      </Text>

      {/* Distância e Avaliação */}
      <View style={styles.metaRow}>
        <Text style={styles.distance}>
          {station.distanceInKm.toFixed(1)} km
        </Text>
        <View style={styles.ratingContainer}>
          <Text style={styles.ratingText}>★ {station.rating}</Text>
          <Text style={styles.reviewCount}>({station.reviewsCount})</Text>
        </View>
      </View>

      {/* Serviços */}
      {visibleServices.length > 0 && (
        <View style={styles.servicesContainer}>
          {visibleServices.map((service) => (
            <ServiceTag key={service} service={service} />
          ))}
        </View>
      )}

      {/* Preços de Combustível (Gasolina Comum e Etanol) */}
      <View style={styles.pricesContainer}>
        {station.fuelPrices.map((price) => {
          if (price.type === "gasolina_comum" || price.type === "etanol") {
            return <FuelPriceBadge key={price.type} fuelPrice={price} />;
          }
          return null;
        })}
      </View>

      {/* Indicador de Tocar para Ver */}
      <View style={styles.ctaContainer}>
        <Text style={styles.ctaText}>Toque para ver detalhes</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
    borderWidth: 1,
    borderColor: colors.border,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 8,
  },
  brandContainer: {
    flex: 1,
    marginRight: 8,
  },
  brand: {
    fontSize: 12,
    fontWeight: "600",
    textTransform: "uppercase",
    color: colors.primary,
    marginBottom: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.text,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    minWidth: 60,
    alignItems: "center",
    justifyContent: "center",
  },
  statusText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  address: {
    fontSize: 14,
    color: colors.secondary,
    marginBottom: 2,
    marginTop: 8,
  },
  neighborhood: {
    fontSize: 13,
    color: colors.secondary,
  },
  metaRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: 10,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  distance: {
    fontSize: 14,
    fontWeight: "500",
    color: colors.primary,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  ratingText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#FFB800", // Cor de estrela genérica se não houver constant
    marginRight: 4,
  },
  reviewCount: {
    fontSize: 13,
    color: colors.secondary,
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginBottom: 10,
  },
  pricesContainer: {
    flexDirection: "row",
    gap: 8,
    marginBottom: 8,
  },
  ctaContainer: {
    alignItems: "center",
    marginTop: 4,
    paddingBottom: 2,
  },
  ctaText: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "500",
  },
});

export default StationCard;
