import { View, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Card, Text, MD3Colors } from "react-native-paper";

interface CardItemProps {
  title: string;
  onPress: () => void;
}

export function CardItem({ title, onPress }: CardItemProps) {
  return (
    <TouchableOpacity
      style={{ width: "100%", alignItems: "center" }}
      onPress={onPress}
    >
      <Card style={styles.container} elevation={5}>
        <Card.Content>
          <Text variant="titleLarge" style={styles.buttonText}>
            {title}
          </Text>
        </Card.Content>
      </Card>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 20,
    backgroundColor: "#f8f8f8",
    alignItems: "center",
  },
  buttonText: {
    color: MD3Colors.primary0,
    fontWeight: "bold",
  },
});
