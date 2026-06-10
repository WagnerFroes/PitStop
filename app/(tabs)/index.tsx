import { StyleSheet, Text, View} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PitStop SP</Text>
      <Text style={styles.subtitle}>App de postos e preços de combustível</Text>
      <Text style={styles.subtitle}>MAJORRR viu?</Text>
      <Text style={styles.description}>
        Ambiente configurado com sucesso!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F7F8FA",
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: "#1F2937",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#2563EB",
    textAlign: "center",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: "#4B5563",
    textAlign: "center",
  },
});