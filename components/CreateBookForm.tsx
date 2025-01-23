import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { useForm } from "react-hook-form";
import { useAddBook } from "@/hooks/bookHook";
import { useRouter } from "expo-router";
import { Button } from "react-native-paper";
import { FormInput } from "./FromInput";
import { ScrollView } from "react-native";

interface BookFormValues {
  title: string;
  category: string;
  description: string;
  definitionLanguage: string;
  termLanguage: string;
}

export function CreateBookForm() {
  const router = useRouter();
  const { control, handleSubmit } = useForm<BookFormValues>({
    defaultValues: {
      title: "",
      category: "",
      description: "",
      definitionLanguage: "",
      termLanguage: "",
    },
  });

  const { mutate: addBook } = useAddBook();

  const onSubmit = (data: BookFormValues) => {
    addBook(data, {
      onSuccess: () => {
        Alert.alert("Success", "Book Created successfully!");
        router.replace("/");
      },
      onError: (error) => {
        Alert.alert("Error", "Failed to add the book.");
        console.error("Add Book Error:", error);
      },
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.heading}>Create New Book</Text>

      {/* Using FormInput for all fields */}
      <FormInput
        name="title"
        label="Title"
        control={control}
        rules={{ required: "Title is required" }}
      />
      <FormInput
        name="category"
        label="Category"
        control={control}
        rules={{ required: "Category is required" }}
      />
      <FormInput
        name="description"
        label="Description"
        control={control}
        rules={{ required: "Description is required" }}
      />
      <FormInput
        name="definitionLanguage"
        label="Definition Language"
        control={control}
        rules={{ required: "Definition Language is required" }}
      />
      <FormInput
        name="termLanguage"
        label="Term Language"
        control={control}
        rules={{ required: "Term Language is required" }}
      />

      <Button mode="contained" onPress={handleSubmit(onSubmit)}>
        Create Book
      </Button>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
});
