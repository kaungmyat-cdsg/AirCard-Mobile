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
import { Box } from "native-base";
import { BookList } from "@/components/HomePage/BookList";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <>
      <Box bg="primary.100" flex={1}>
        <Appbar.Header style={{ elevation: 10 }}>
          <Appbar.Action icon="menu" onPress={() => {}} />
          <Appbar.Content title="Book List" />
        </Appbar.Header>
        <View style={{ alignItems: "center" }}>
          <BookList />
        </View>
      </Box>
      <View style={{ alignItems: "center" }}>
        {/* <Button
          mode="contained"
          icon="plus"
          style={{
            marginBottom: 50,
            width: "50%",
          }}
          onPress={() => console.log("Pressed")}
        >
          Add Book
        </Button> */}
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
