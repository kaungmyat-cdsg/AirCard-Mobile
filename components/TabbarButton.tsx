import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";
import { icon } from "@/constants/icon";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { opacity } from "react-native-reanimated/lib/typescript/Colors";
import { useTheme } from "@react-navigation/native";

const TabbarButton = ({
  onPress,
  onLongPress,
  label,
  routeName,
  isFocused,
  color,
}: {
  onPress: () => void;
  onLongPress: () => void;
  label: string;
  routeName: string;
  isFocused: boolean;
  color: string;
}) => {
  const scale = useSharedValue(1);
  const theme = useTheme();

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);
    return { opacity };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.2]);
    const top = interpolate(scale.value, [0, 1], [0, 9]);
    return { transform: [{ scale: scaleValue }], top };
  });

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.tabbarItem}
    >
      <Animated.View style={animatedIconStyle}>
        {icon[routeName]({
          color: isFocused ? theme.colors.primary[50] : "#222",
        })}
      </Animated.View>
      <Animated.Text
        style={[
          {
            color: isFocused ? theme.colors.primary[50] : "#222",
            fontSize: 12,
          },
          animatedTextStyle,
        ]}
      >
        {label}
      </Animated.Text>
    </Pressable>
  );
};

export default TabbarButton;

const styles = StyleSheet.create({
  tabbarItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
});
