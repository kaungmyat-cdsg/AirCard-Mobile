import { Link, Stack } from "expo-router";
import { StyleSheet, View } from "react-native";
import React from "react";

export default function NotFoundScreen() {
  return (
    <>
      <View></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
