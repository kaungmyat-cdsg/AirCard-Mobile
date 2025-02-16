import React from "react";
import { useRouter } from "expo-router";
import { useGetCard } from "@/hooks/bookHook";
import {
  Appbar,
  IconButton,
  MD3Colors,
  PaperProvider,
  TouchableRipple,
  Text,
} from "react-native-paper";
import { useCardStore } from "@/hooks/bookStore";
import { useLocalSearchParams } from "expo-router";
import AddCard from "@/components/HomePage/AddCard";
import { FlatList, View, StyleSheet } from "react-native";

const Card = () => {
  const router = useRouter();
  const { id, setId } = useCardStore();
  const { data, isLoading, error } = useGetCard(id);
  const { bookId } = useLocalSearchParams();

  React.useEffect(() => {
    if (bookId) {
      setId(bookId.toString()); // TypeScript အတွက် `as string` သုံး
    }
  }, [bookId]);

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ elevation: 10 }}>
        <Appbar.BackAction onPress={() => router.replace("/")} />
        <Appbar.Content title="Book List" />
      </Appbar.Header>
      {isLoading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error</Text>
      ) : data && data.length > 0 ? (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          numColumns={2} // 2-column grid
          contentContainerStyle={styles.list}
          renderItem={({ item }) => (
            <TouchableRipple
              style={styles.card}
              onPress={() => console.log("hello")}
            >
              <View>
                <View style={styles.cardText}>
                  <Text>{item.term}</Text>
                  <Text>{item.definition}</Text>
                  {/* {item.examples && item.examples.length > 0 && (
                  <Text>Examples: {item.examples.join(", ")}</Text>
                )} */}
                  {/* {item.multipleAnswers && item.multipleAnswers.length > 0 && (
                  <Text>Answers: {item.multipleAnswers.join(", ")}</Text>
                )} */}
                </View>

                <View style={styles.iconButton}>
                  <IconButton
                    icon="volume-high"
                    iconColor={MD3Colors.primary50}
                    size={20}
                    onPress={() => console.log("Pressed")}
                  />
                  <IconButton
                    icon="cards-heart-outline"
                    iconColor={MD3Colors.primary50}
                    size={20}
                    onPress={() => console.log("Pressed")}
                  />
                  <IconButton
                    icon="dots-vertical"
                    iconColor={MD3Colors.primary50}
                    size={20}
                    onPress={() => console.log("Pressed")}
                  />
                </View>
              </View>
            </TouchableRipple>
          )}
        />
      ) : (
        <Text>No data</Text>
      )}

      <AddCard />
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    alignItems: "center",
  },
  card: {
    margin: 5,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  cardText: {
    padding: 10,
  },
  iconButton: {
    flexDirection: "row",
  },
});
