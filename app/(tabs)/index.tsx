import { Image, StyleSheet, Platform, TextInput, Animated } from "react-native";
import {
  Appbar,
  Button,
  Card,
  IconButton,
  MD3Colors,
  Modal,
  Portal,
  Text,
} from "react-native-paper";
import { View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { BookList } from "@/components/HomePage/BookList";
import SearchBar from "@/components/HomePage/SearchBar";
import { useModalStore } from "@/hooks/bookStore";
import AddModal from "@/components/HomePage/AddModal";
export default function HomeScreen() {
  const router = useRouter();
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { visible, hideModal } = useModalStore((state) => state);
  const containerStyle = { backgroundColor: "white", padding: 20, margin: 20 };

  const handleSearchPress = () => {
    setShowSearchBar((prevState) => !prevState);
  };

  return (
    <>
      <View>
        <Appbar.Header style={{ elevation: 10 }}>
          <Appbar.Content title="Book List" />
          <Appbar.Action
            icon={showSearchBar ? "close" : "magnify"}
            onPress={() => handleSearchPress()}
          />
        </Appbar.Header>
        {showSearchBar ? <SearchBar /> : null}

        <BookList showSearchBar={showSearchBar} />

        <AddModal visible={visible} hideModal={hideModal} />
      </View>
      <View style={{ alignItems: "center" }}></View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  separator: {
    height: 16, // Gap between items
  },
});
