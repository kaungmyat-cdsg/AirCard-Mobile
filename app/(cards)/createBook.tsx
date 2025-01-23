import { StyleSheet, Image, Platform, View } from "react-native";
import { Appbar, Card, IconButton, MD3Colors } from "react-native-paper";
import { useRouter } from "expo-router";
import { CreateBookForm } from "@/components/CreateBookForm";

export default function CreateBook() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => router.replace("/")} />
        <Appbar.Content title="Create Book" />
      </Appbar.Header>
      <CreateBookForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 0,
    height: 50,
    paddingTop: Platform.OS === "android" ? 10 : 0,
  },
});
