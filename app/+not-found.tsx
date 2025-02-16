import { Link, Stack } from "expo-router";
import {
  ScrollView,
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";

export default function NotFoundScreen() {
  const [data, setData] = useState(
    Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`)
  );
  const [loading, setLoading] = useState(false);
  const loadMoreData = () => {
    if (!loading) {
      setLoading(true);
      setTimeout(() => {
        setData((prevData) => [
          ...prevData,
          ...Array.from(
            { length: 10 },
            (_, i) => `Item ${prevData.length + i + 1}`
          ),
        ]);
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ padding: 20, borderBottomWidth: 1 }}>
            <Text>{item}</Text>
          </View>
        )}
        onEndReached={loadMoreData} // Trigger load more when pulling up
        onEndReachedThreshold={0.5} // Adjust sensitivity
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="blue" /> : null
        }
      />
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
