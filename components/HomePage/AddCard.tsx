import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import {
  TextInput,
  Button,
  Card,
  Portal,
  Modal,
  FAB,
} from "react-native-paper";
import { useForm, Controller } from "react-hook-form";
import { useAddCard } from "@/hooks/bookHook";
import { background } from "native-base/lib/typescript/theme/styled-system";

interface BookData {
  term: string;
  definition: string;
  examples: string[];
  multipleAnswers: string[];
  bookId: string;
}

const AddCard = () => {
  const [visible, setVisible] = useState(false);
  const { control, handleSubmit, reset } = useForm<BookData>();
  const mutation = useAddCard();

  const onSubmit = (data: BookData) => {
    mutation.mutate(data, {
      onSuccess: () => {
        alert("Book added successfully!");
        reset();
        setVisible(false);
      },
      onError: (error) => {
        console.error("Failed to add book:", error);
        alert("Failed to add book.");
      },
    });
  };
  const containerStyle = {
    margin: 10,
    background: "rgba(100, 100, 100, 0)",
    borderRadius: 10,
  };

  return (
    <View>
      <FAB icon="plus" style={styles.fab} onPress={() => setVisible(true)} />
      <Portal>
        <Modal
          visible={visible}
          contentContainerStyle={containerStyle}
          onDismiss={() => setVisible(false)}
        >
          <Card>
            <Card.Title title="Add New Book" />
            <Card.Content>
              <Controller
                control={control}
                name="term"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    label="Term"
                    value={value}
                    onChangeText={onChange}
                    mode="outlined"
                    style={styles.input}
                  />
                )}
              />
              <Controller
                control={control}
                name="definition"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    label="definition"
                    value={value}
                    onChangeText={onChange}
                    mode="outlined"
                    style={styles.input}
                  />
                )}
              />
              {/* <Controller
                control={control}
                name="examples"
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    label="Description"
                    value={value}
                    onChangeText={onChange}
                    mode="outlined"
                    multiline
                    style={styles.input}
                  />
                )}
              />
              <Controller
                control={control}
                name="multipleAnswers"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    label="Definition Language"
                    value={value}
                    onChangeText={onChange}
                    mode="outlined"
                    style={styles.input}
                  />
                )}
              /> */}
              <Controller
                control={control}
                name="bookId"
                rules={{ required: true }}
                render={({ field: { onChange, value } }) => (
                  <TextInput
                    label="bookId"
                    value={value}
                    onChangeText={onChange}
                    mode="outlined"
                    style={styles.input}
                  />
                )}
              />
              <Button
                mode="contained"
                onPress={handleSubmit(onSubmit)}
                style={styles.button}
              >
                Add Card
              </Button>
            </Card.Content>
          </Card>
        </Modal>
      </Portal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 350,
    padding: 16,
    margin: 10,
  },
  input: {
    marginBottom: 12,
  },
  button: {
    marginTop: 12,
  },
  cancelButton: {
    marginTop: 8,
  },
  fab: {
    position: "absolute",
    margin: 20,
    right: 0,
    bottom: 30,
  },
});

export default AddCard;
