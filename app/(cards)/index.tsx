import { Image, StyleSheet, Platform } from "react-native";
import {
  Appbar,
  Button,
  Card,
  IconButton,
  MD3Colors,
  Text,
} from "react-native-paper";
import { View } from "react-native";
import { useRouter } from "expo-router";
import React from "react";
import { BookList } from "@/components/BookList";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <View style={styles.container}>
        <Appbar.Header style={{ elevation: 10 }}>
          <Appbar.Action icon="menu" onPress={() => {}} />
          <Appbar.Content title="Book List" />
        </Appbar.Header>
        <View style={{ alignItems: "center" }}>
          <BookList />
        </View>
      </View>
      <View style={{ alignItems: "center" }}>
        <Button
          mode="contained"
          icon="plus"
          style={{
            marginBottom: 50,
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
  },
  separator: {
    height: 16, // Gap between items
  },
});
