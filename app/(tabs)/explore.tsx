import { StyleSheet, Image, Platform, View, Text } from "react-native";
import { Appbar } from "react-native-paper";
import { useRouter } from "expo-router";

export default function Explore() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* <Appbar.Header>
        <Appbar.BackAction onPress={() => router.replace("/")} />
        <Appbar.Content title="Create Book" />
      </Appbar.Header>
      <CreateBookForm /> */}
      <Text>Explore</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
