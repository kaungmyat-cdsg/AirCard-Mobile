import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import React from "react";
import { IconButton, TouchableRipple } from "react-native-paper";

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
    <View>
      <TouchableRipple style={styles.container} onPress={onPress}>
        {/* Main Content */}
        <View style={styles.contentContainer}>
          {/* Left Section (Title and Category) */}
          <View style={styles.leftSection}>
            <Text>{title}</Text>
            <Text>{description}</Text>
            <Text>{category}</Text>
          </View>

          {/* Right Section (IconButton) */}
          <View style={styles.rightSection}>
            <IconButton
              icon="book"
              iconColor="black"
              size={20}
              onPress={() => console.log("Pressed")}
            />
          </View>
        </View>
      </TouchableRipple>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    elevation: 5,
  },
  contentContainer: {
    flex: 1, // Take up available space
    width: "100%",
    flexDirection: "row", // Arrange children in a row
    alignItems: "center", // Vertically center align children
    justifyContent: "space-between", // Space out children
  },
  leftSection: {},
  rightSection: {
    justifyContent: "flex-end", // Align icon to the right
  },
});
