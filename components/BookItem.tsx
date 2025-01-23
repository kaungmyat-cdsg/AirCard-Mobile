import {
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from "react-native";
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
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {/* <Card style={styles.container} elevation={5}>
        <Card.Content style={{ backgroundColor: "rgba(255, 255, 255, .0)" }}>
          <Text variant="titleLarge" style={styles.buttonText}>
            {title}
          </Text>
        </Card.Content>
      </Card> */}
        <Text variant="titleLarge">{title}</Text>
        <Text variant="bodySmall">{description}</Text>
        <Text variant="bodySmall">{category}</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get("screen").width - 20,
  },
  button: {
    width: "100%",
    backgroundColor: "#f8f8f8",
    padding: 10,
    borderRadius: 5,
    height: 80,
    justifyContent: "center",
    elevation: 5,
  },
});
