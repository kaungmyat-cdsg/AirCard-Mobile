import React, { useState } from "react";
import { Button, Modal, Portal, Text, TextInput } from "react-native-paper";
import SelectInputBox from "./SelectInput";
import { useAddBook } from "@/hooks/bookHook";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { View } from "react-native";

interface AddModalProps {
  visible: boolean;
  hideModal: () => void;
}

const languageOptions = [
  { name: "English", value: "English" },
  { name: "Japanese", value: "Japanese" },
  { name: "Korean", value: "Korean" },
];

const BookSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  category: Yup.string().required("Category is required"),
  description: Yup.string().required("Description is required"),
  definitionLanguage: Yup.string().required("Definition language is required"),
  termLanguage: Yup.string().required("Term language is required"),
});

const AddModal = ({ visible, hideModal }: AddModalProps) => {
  const containerStyle = {
    gap: 10,
    backgroundColor: "white",
    padding: 20,
    margin: 10,
    borderRadius: 10,
  };
  const addBookMutation = useAddBook();

  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(BookSchema),
    defaultValues: {
      title: "",
      category: "",
      description: "",
      definitionLanguage: "",
      termLanguage: "",
    },
  });

  const onSubmit = (data: any) => {
    addBookMutation.mutate(data, {
      onSuccess: () => {
        alert("Success");
        reset();
        hideModal();
      },
      onError: (error) => {
        alert("Error: " + error.message);
      },
    });
  };

  return (
    <Portal>
      <Modal
        visible={visible}
        onDismiss={hideModal}
        contentContainerStyle={containerStyle}
      >
        <Text variant="titleLarge">Create New Book</Text>

        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              mode="outlined"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              label="Title"
            />
          )}
        />
        {errors.title && (
          <Text style={{ color: "red" }}>{errors.title.message}</Text>
        )}

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              mode="outlined"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              label="Description"
            />
          )}
        />
        {errors.description && (
          <Text style={{ color: "red" }}>{errors.description.message}</Text>
        )}

        <Controller
          control={control}
          name="category"
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              mode="outlined"
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              label="Category"
            />
          )}
        />
        {errors.category && (
          <Text style={{ color: "red" }}>{errors.category.message}</Text>
        )}

        <View style={{ flexDirection: "row", gap: 10 }}>
          <SelectInputBox
            label="Term"
            menuItems={languageOptions}
            setSelectedValue={(value) => setValue("termLanguage", value)}
          />
          <SelectInputBox
            label="Define"
            menuItems={languageOptions}
            setSelectedValue={(value) => setValue("definitionLanguage", value)}
          />
        </View>
        {errors.termLanguage && (
          <Text style={{ color: "red" }}>{errors.termLanguage.message}</Text>
        )}
        {errors.definitionLanguage && (
          <Text style={{ color: "red" }}>
            {errors.definitionLanguage.message}
          </Text>
        )}

        <Button
          style={{ borderRadius: 10, marginTop: 10 }}
          mode="contained"
          onPress={handleSubmit(onSubmit)}
        >
          Create
        </Button>
      </Modal>
    </Portal>
  );
};

export default AddModal;
