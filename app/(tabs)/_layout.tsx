import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { FAB } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { PaperProvider } from "react-native-paper";
import { useModalStore } from "@/hooks/bookStore";

export default function TabLayout() {
  const { showModal } = useModalStore((state) => state);
  const router = useRouter();
  return (
    <PaperProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "black",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: "Home",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="home" color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user" color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tabs>
      <View style={styles.fabContainer}>
        <FAB
          icon="plus"
          color="black"
          size="medium"
          style={styles.fab}
          onPress={() => showModal()}
        />
      </View>
    </PaperProvider>
  );
}
const styles = StyleSheet.create({
  fabContainer: {
    position: "absolute",
    bottom: 15, // Adjust position to hover over the tab bar
    left: "50%",
    marginLeft: -28, // Center horizontally
  },
  fab: {},
});
{
  /* <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Tabs.Screen  
          name="add"
          options={{ title: "Add", headerShown: false }}
        />
        <Tabs.Screen
          name="profile"
          options={{ title: "Profile", headerShown: false }}
        />
      </Tabs> */
}
