import { StyleSheet, View } from "react-native";

import ProfileScreen from "@/src/features/profile/ProfileScreen";

export default function ExploreScreen() {
  return (
    <View style={styles.container}>
      <ProfileScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
