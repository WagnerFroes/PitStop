import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import ProgressCard from "../../components/ProgressCard";
import StationCard from "../../components/StationCard";
import { colors } from "../../constants/colors";
import { mockStations } from "../../data/stations";
import { mockUserProgress } from "../../data/userProgress";
import { Station, StationService } from "../../types/station";

type FilterOption = "all" | StationService;

export default function StationListScreen() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

  const filters: { label: string; value: FilterOption }[] = [
    { label: "Todos", value: "all" },
    { label: "24h", value: "24h" },
    { label: "Conveniência", value: "conveniencia" },
    { label: "Pix", value: "pix" },
    { label: "Lava-rápido", value: "lava_rapido" },
  ];

  const filteredStations = mockStations.filter((station) => {
    // Filtro por busca
    const matchesSearch =
      station.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      station.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      station.neighborhood.toLowerCase().includes(searchTerm.toLowerCase());

    // Filtro por serviço
    const matchesFilter =
      activeFilter === "all" || station.services.includes(activeFilter);

    return matchesSearch && matchesFilter;
  });

  const renderItem = ({ item }: { item: Station }) => (
    <StationCard station={item} />
  );

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyIcon}>⛽</Text>
      <Text style={styles.emptyTitle}>Nenhum posto encontrado</Text>
      <Text style={styles.emptySubtitle}>
        Tente ajustar sua busca ou filtros
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Progress Card */}
      <View style={styles.progressContainer}>
        <ProgressCard data={mockUserProgress} />
      </View>

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Postos Próximos</Text>
        <Text style={styles.subtitle}>
          {filteredStations.length} postos encontrados
        </Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar por nome, marca ou bairro..."
          placeholderTextColor={colors.mutedText}
          value={searchTerm}
          onChangeText={setSearchTerm}
        />
      </View>

      {/* Filters */}
      <View style={styles.filtersContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={filters}
          keyExtractor={(item) => item.value}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={[
                styles.filterButton,
                activeFilter === item.value && styles.filterButtonActive,
              ]}
              onPress={() => setActiveFilter(item.value)}
            >
              <Text
                style={[
                  styles.filterText,
                  activeFilter === item.value && styles.filterTextActive,
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Station List */}
      <FlatList
        data={filteredStations}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderEmpty}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.text,
  },
  subtitle: {
    fontSize: 14,
    color: colors.mutedText,
    marginTop: 4,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  searchInput: {
    backgroundColor: colors.surface,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    color: colors.text,
    borderWidth: 1,
    borderColor: colors.border,
  },
  filtersContainer: {
    paddingHorizontal: 20,
    paddingVertical: 8,
  },
  filterButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: colors.surface,
    borderWidth: 1,
    borderColor: colors.border,
    marginRight: 8,
  },
  filterButtonActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  filterText: {
    fontSize: 13,
    fontWeight: "600",
    color: colors.mutedText,
  },
  filterTextActive: {
    color: colors.white,
  },
  progressContainer: {
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 4,
  },
  listContent: {
    paddingHorizontal: 20,
    paddingTop: 0,
    paddingBottom: 32,
  },
  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 60,
  },
  emptyIcon: {
    fontSize: 48,
    marginBottom: 16,
  },
  emptyTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: colors.text,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontSize: 14,
    color: colors.mutedText,
    textAlign: "center",
  },
});
