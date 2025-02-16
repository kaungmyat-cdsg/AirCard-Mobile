import React, { useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import {
  Button,
  Menu,
  Divider,
  Provider,
  TouchableRipple,
  Text,
  Icon,
  MD3Colors,
} from "react-native-paper";
import DropDown from "react-native-paper-dropdown";

interface SelectInputBoxProps {
  label: string;
  menuItems: { name: string; value: string }[];

  setSelectedValue: (value: string) => void;
}

const SelectInputBox = ({
  label,
  menuItems,

  setSelectedValue,
}: SelectInputBoxProps) => {
  const [visible, setVisible] = useState(false);
  const [language, setLanguage] = useState("");
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <View>
      <Menu
        onDismiss={closeMenu}
        visible={visible}
        anchor={
          <Button
            icon="chevron-down"
            mode="elevated"
            style={{ marginTop: 5, borderRadius: 4 }}
            onPress={openMenu}
          >
            {language || `${label}`}
          </Button>
        }
      >
        {menuItems.map((item, index) => {
          return (
            <Menu.Item
              key={index}
              onPress={() => {
                setSelectedValue(item.value);
                setLanguage(item.value);
                closeMenu();
              }}
              title={item.name}
            />
          );
        })}
      </Menu>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SelectInputBox;
