import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Menu, Button, TextInput, Divider } from "react-native-paper";

export function Dropdown() {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState("Select an option");

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View style={styles.container}>
      <TextInput
        label="Dropdown"
        value={selected}
        mode="outlined"
        right={<TextInput.Icon icon="menu-down" onPress={openMenu} />}
      />
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={
          <Button mode="outlined" onPress={openMenu}>
            {selected}
          </Button>
        }
      >
        <Menu.Item
          onPress={() => {
            setSelected("Option 1");
            closeMenu();
          }}
          title="Option 1"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setSelected("Option 2");
            closeMenu();
          }}
          title="Option 2"
        />
        <Divider />
        <Menu.Item
          onPress={() => {
            setSelected("Option 3");
            closeMenu();
          }}
          title="Option 3"
        />
      </Menu>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
