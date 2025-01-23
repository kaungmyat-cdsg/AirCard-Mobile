import React from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useAddBook } from "@/hooks/bookHook";

interface BookFormValues {
  title: string;
  category: string;
  description: string;
  definitionLanguage: string;
  termLanguage: string;
}

export function CreateBookForm() {
  const { control, handleSubmit, reset } = useForm<BookFormValues>({
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
        Alert.alert("Success", "Book added successfully!");
        reset(); // Reset form fields
      },
      onError: (error) => {
        Alert.alert("Error", "Failed to add the book.");
        console.error("Add Book Error:", error);
      },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add New Book</Text>

      {/* Title Input */}
      <Controller
        control={control}
        name="title"
        rules={{ required: "Title is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, error && styles.errorInput]}
              placeholder="Title"
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />

      {/* Category Input */}
      <Controller
        control={control}
        name="category"
        rules={{ required: "Category is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, error && styles.errorInput]}
              placeholder="Category"
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />

      {/* Description Input */}
      <Controller
        control={control}
        name="description"
        rules={{ required: "Description is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, error && styles.errorInput]}
              placeholder="Description"
              value={value}
              onChangeText={onChange}
              multiline
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />

      {/* Definition Language Input */}
      <Controller
        control={control}
        name="definitionLanguage"
        rules={{ required: "Definition Language is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, error && styles.errorInput]}
              placeholder="Definition Language"
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />

      {/* Term Language Input */}
      <Controller
        control={control}
        name="termLanguage"
        rules={{ required: "Term Language is required" }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, error && styles.errorInput]}
              placeholder="Term Language"
              value={value}
              onChangeText={onChange}
            />
            {error && <Text style={styles.errorText}>{error.message}</Text>}
          </View>
        )}
      />

      {/* Submit Button */}
      <Button title={"Add Book"} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputContainer: {
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    fontSize: 16,
  },
  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 4,
  },
});
