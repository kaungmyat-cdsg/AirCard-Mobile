import { View, StyleSheet, TouchableOpacity, Pressable } from "react-native";
import React from "react";
import { Card, Text, MD3Colors } from "react-native-paper";

interface CardItemProps {
  title: string;
  description: string;
  category: string;
  definitionLanguage: string;
  termLanguage: string;
  onPress: () => void;
}

export function BookItem({
  title,
  description,
  category,
  definitionLanguage,
  termLanguage,
  onPress,
}: CardItemProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      {/* <Card style={styles.container} elevation={5}>
        <Card.Content style={{ backgroundColor: "rgba(255, 255, 255, .0)" }}>
          <Text variant="titleLarge" style={styles.buttonText}>
            {title}
          </Text>
        </Card.Content>
      </Card> */}
      <Text variant="titleMedium">{title}</Text>
      <Text variant="bodySmall">{description}</Text>
      <Text variant="bodySmall">{category}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 5,
    width: 300,
    height: 80,
    justifyContent: "center",
    elevation: 5,
  },
});
