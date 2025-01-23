import { StyleSheet, Image, Platform, View } from "react-native";
import { Appbar } from "react-native-paper";
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
});
