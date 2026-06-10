import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { FuelType, Station } from "../types/station";
import { formatCurrency } from "../utils/formatCurrency";
import FuelPriceBadge from "./FuelPriceBadge";
import ServiceTag from "./ServiceTag";

interface StationCardProps {
  station: Station;
}

export default function StationCard({ station }: StationCardProps) {
  const mainFuelTypes: FuelType[] = ["gasolina_comum", "etanol"];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.nameRow}>
          <Text style={styles.brand}>{station.brand}</Text>
          {station.isOpen ? (
            <View
              style={[
                styles.statusBadge,
                { backgroundColor: colors.success + "20" },
              ]}
            >
              <Text style={[styles.statusText, { color: colors.success }]}>
                Aberto
              </Text>
            </View>
          ) : (
            <View
              style={[
                styles.statusBadge,
                { backgroundColor: colors.danger + "20" },
              ]}
            >
              <Text style={[styles.statusText, { color: colors.danger }]}>
                Fechado
              </Text>
            </View>
          )}
        </View>
        <Text style={styles.name}>{station.name}</Text>
        <Text style={styles.address}>
          {station.address}, {station.neighborhood}
        </Text>
      </View>

      {/* Rating */}
      <View style={styles.ratingRow}>
        <Text style={styles.rating}>{station.rating.toFixed(1)}</Text>
        <Text style={styles.ratingIcon}>★</Text>
        <Text style={styles.reviews}>({station.reviewsCount} avaliações)</Text>
        <Text style={styles.distance}>• {station.distanceInKm} km</Text>
      </View>

      {/* Services */}
      <View style={styles.servicesRow}>
        {station.services.slice(0, 4).map((service) => (
          <ServiceTag key={service} service={service} />
        ))}
        {station.services.length > 4 && (
          <View style={[styles.tag, styles.moreTags]}>
            <Text style={styles.moreTagsText}>
              +{station.services.length - 4}
            </Text>
          </View>
        )}
      </View>

      {/* Fuel Prices */}
      <View style={styles.pricesRow}>
        {mainFuelTypes.map((type) => {
          const price = station.fuelPrices.find((p) => p.type === type);
          if (!price) return null;
          return (
            <View key={type} style={styles.priceCard}>
              <Text style={styles.priceType}>
                {type === "gasolina_comum" ? "G.C." : "Etanol"}
              </Text>
              <Text style={styles.priceValue}>
                {formatCurrency(price.price)}
              </Text>
            </View>
          );
        })}
      </View>

      {/* View Prices Button */}
      <View style={styles.fullPricesRow}>
        <FuelPriceBadge
          fuelPrice={{
            type: station.fuelPrices[0].type,
            price: station.fuelPrices[0].price,
            lastUpdated: station.fuelPrices[0].lastUpdated,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.surface,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3,
  },
  header: {
    marginBottom: 12,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  brand: {
    fontSize: 14,
    fontWeight: "600",
    color: colors.primary,
    textTransform: "uppercase",
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 11,
    fontWeight: "600",
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginTop: 4,
  },
  address: {
    fontSize: 13,
    color: colors.mutedText,
    marginTop: 2,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 12,
  },
  rating: {
    fontSize: 14,
    fontWeight: "700",
    color: colors.text,
  },
  ratingIcon: {
    fontSize: 12,
    color: colors.warning,
    marginHorizontal: 4,
  },
  reviews: {
    fontSize: 12,
    color: colors.mutedText,
    marginRight: 8,
  },
  distance: {
    fontSize: 12,
    color: colors.primary,
    fontWeight: "500",
  },
  servicesRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 12,
  },
  tag: {
    backgroundColor: colors.background,
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 6,
    marginBottom: 6,
  },
  moreTags: {
    justifyContent: "center",
  },
  moreTagsText: {
    fontSize: 10,
    color: colors.primary,
    fontWeight: "600",
  },
  pricesRow: {
    flexDirection: "row",
    marginBottom: 8,
  },
  priceCard: {
    backgroundColor: colors.background,
    borderRadius: 12,
    padding: 12,
    flex: 1,
    marginRight: 8,
  },
  priceCardLast: {
    marginRight: 0,
  },
  priceType: {
    fontSize: 11,
    color: colors.mutedText,
    fontWeight: "500",
    marginBottom: 4,
  },
  priceValue: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.primary,
  },
  fullPricesRow: {
    flexDirection: "row",
    justifyContent: "flex-start",
    flexWrap: "wrap",
  },
});
