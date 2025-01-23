import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchAllBooks } from "@/api/api";
import { useGetAllBooks } from "@/hooks/bookHook";
import { BookItem } from "./BookItem";

export function BookList() {
  const [search, setSearch] = useState("");
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [category, setCategory] = useState("");

  const { data, isLoading, isError } = useGetAllBooks(
    search,
    limit,
    (page - 1) * limit,
    page,
    "",
    category
  );

  if (isLoading) return <ActivityIndicator size="large" />;
  if (isError) return <Text>Error fetching books</Text>;

  return (
    <View>
      <FlatList
        style={styles.container}
        data={data?.books || []}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          // <View style={styles.bookItem}>
          //   <Text>{item.title}</Text>
          // </View>
          <BookItem
            title={item.title}
            description={item.description}
            category={item.category}
            termLanguage={item.termLanguage}
            definitionLanguage={item.definitionLanguage}
            onPress={() => console.log(item._id)}
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        ListHeaderComponent={<View style={{ height: 10 }} />}
        ListFooterComponent={<View style={{ height: 110 }} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  separator: {
    height: 16, // Gap between items
  },
});
