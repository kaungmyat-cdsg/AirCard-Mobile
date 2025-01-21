import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { CardItem } from "./CardItem";
import { useRouter } from "expo-router";

export function CardLists() {
  const router = useRouter();
  return <CardItem title={"Card1"} onPress={() => console.log("Card1")} />;
}
