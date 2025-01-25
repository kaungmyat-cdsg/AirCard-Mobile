import { Tabs } from "expo-router";
import React from "react";
import { useColorScheme } from "@/hooks/useColorScheme";
import { TabBar } from "@/components/TabBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function TabLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <Tabs tabBar={(props) => <TabBar {...props} />}>
        <Tabs.Screen
          name="index"
          options={{ title: "Home", headerShown: false }}
        />
        <Tabs.Screen
          name="explore"
          options={{ title: "Explore", headerShown: false }}
        />
        <Tabs.Screen
          name="profile"
          options={{ title: "Profile", headerShown: false }}
        />
      </Tabs>
    </QueryClientProvider>
  );
}
