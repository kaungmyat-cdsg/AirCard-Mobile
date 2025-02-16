import React, { useMemo, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  RefreshControl,
  ScrollView,
  Dimensions,
} from "react-native";
import { useBooksInfiniteQuery } from "@/hooks/bookHook";
import { BookItem } from "./BookItem";
import { useBookStore } from "../../hooks/bookStore";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import { useRouter } from "expo-router";

interface BookListProps {
  showSearchBar: boolean;
}

const screenHeight = Dimensions.get("window").height;

export function BookList({ showSearchBar }: BookListProps) {
  const { search, setRefreshing, refreshing, limit, sort, category } =
    useBookStore((state) => state);

  const router = useRouter();

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
    isLoading,
    error,
  } = useBooksInfiniteQuery({
    search,
    limit,
    sort,
    category,
  });
  // Flatten the data from all pages into a single array
  // const books =
  //   data?.pages.flatMap((page) => {
  //     console.log("first", page.books);
  //     return page.books;
  //   }) || [];
  const books = useMemo(() => {
    return (
      data?.pages.flatMap((page) => {
        // console.log("first", page.books);
        return page.books;
      }) || []
    );
  }, [data]);

  const onRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  {
    isLoading && (
      <ActivityIndicator animating={true} color={MD2Colors.red800} />
    );
  }
  {
    error && <Text>Error: {error.message}</Text>;
  }

  return (
    <View style={{ height: screenHeight }}>
      <FlatList
        style={styles.container}
        data={books}
        scrollEnabled={true}
        bounces={true}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <BookItem
            title={item.title}
            description={item.description}
            category={item.category}
            termLanguage={item.termLanguage}
            definitionLanguage={item.definitionLanguage}
            onPress={() =>
              router.push({
                pathname: "/card/[bookId]",
                params: { bookId: item._id },
              } as const)
            }
          />
        )}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={
          books.length === 0 && !isLoading ? (
            <View style={{ height: 10 }}>
              <Text style={styles.emptyText}>No books found</Text>
            </View>
          ) : (
            <View style={{ height: 10 }} />
          )
        }
        ListFooterComponent={
          isFetchingNextPage ? (
            <View style={styles.footer}>
              <ActivityIndicator animating={true} color={MD2Colors.purple400} />
            </View>
          ) : (
            <View style={showSearchBar ? styles.footer : styles.footer2} />
          )
        }
        onEndReached={() => {
          if (hasNextPage && !isFetchingNextPage) {
            fetchNextPage();
          }
        }}
        onEndReachedThreshold={0.5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  separator: {
    height: 10, // Gap between items
  },
  footer: {
    marginTop: 10,
    height: 300,
    alignItems: "center",
  },
  footer2: {
    marginTop: 10,
    height: 200,
    alignItems: "center",
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});
