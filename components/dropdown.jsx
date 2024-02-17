import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const Dropdown = ({ data, onSelect }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => {
    setIsVisible(!isVisible);
  };

  const handleSelect = (item) => {
    setSelectedItem(item);
    setIsVisible(false);
    onSelect(item);
  };

  return (
    <View className="flex items-center justify-center">
      <TouchableOpacity
        onPress={toggleDropdown}
        className="px-10 py-10 bg-red-500"
      >
        <Text>{selectedItem ? selectedItem.label : "Select an option"}</Text>
      </TouchableOpacity>
      {isVisible && (
        <FlatList
          className="max-h-80"
          data={data}
          keyExtractor={(item) => item.value.toString()}
          renderItem={({ item }) => (
            // style
            <TouchableOpacity
              className="px-10 py-10 bg-red-500"
              onPress={() => handleSelect(item)}
            >
              <Text>{item.label}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Dropdown;
