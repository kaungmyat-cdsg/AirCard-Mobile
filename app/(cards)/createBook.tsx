import { StyleSheet, Image, Platform, View } from "react-native";
import { Card, IconButton, MD3Colors } from "react-native-paper";
import { useRouter } from "expo-router";
import { CreateBookForm } from "@/components/createBookForm";

export default function CreateBook() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Card style={styles.header} elevation={3}>
        <Card.Content>
          <IconButton
            icon="arrow-left"
            iconColor={MD3Colors.primary0}
            size={30}
            onPress={() => router.replace("/")}
          />
        </Card.Content>
      </Card>
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
  },
});
