import { StyleSheet, Image, Platform, View } from "react-native";
import { Card, IconButton, MD3Colors } from "react-native-paper";
import { useRouter } from "expo-router";

export default function TabTwoScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Card style={styles.header}>
        <Card.Content>
          <IconButton
            icon="arrow-left"
            iconColor={MD3Colors.primary0}
            size={30}
            onPress={() => router.replace("/")}
          />
        </Card.Content>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#fff",
    marginBottom: 100,
    borderRadius: 0,
  },
});
