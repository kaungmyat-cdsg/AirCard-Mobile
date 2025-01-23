import React from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Controller } from "react-hook-form";
import { TextInput } from "react-native-paper";

interface FormInputValue {
  name: string;
  label: string;
  control?: any;
  rules?: any;
}

export const FormInput: React.FC<FormInputValue> = ({
  name,
  label,
  control,
  rules,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <View style={styles.inputContainer}>
          <TextInput
            mode="outlined"
            label={label}
            style={[error && styles.errorInput]}
            value={value}
            onChangeText={onChange}
          />
          {error && <Text style={styles.errorText}>{error.message}</Text>}
        </View>
      )}
    />
  );
};

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

  errorInput: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 14,
    marginTop: 4,
  },
});
