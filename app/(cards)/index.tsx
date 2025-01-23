import { Image, StyleSheet, Platform } from "react-native";
import { Button, Card, IconButton, MD3Colors, Text } from "react-native-paper";
import { View } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { BookList } from "@/components/BookList";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <View style={styles.container}>
        <Card style={styles.header} elevation={3}>
          <Card.Content>
            <IconButton
              icon="menu"
              iconColor={MD3Colors.primary0}
              size={30}
              onPress={() => console.log("Pressed")}
            />
          </Card.Content>
        </Card>
        <BookList />
      </View>
      <View style={{ alignItems: "center" }}>
        <Button
          mode="contained"
          icon="plus"
          style={{
            marginBottom: 100,
            width: "50%",
          }}
          onPress={() => router.replace("/createBook")}
        >
          Add Book
        </Button>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 40,
    alignItems: "center",
  },
  header: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 0,
  },
});
