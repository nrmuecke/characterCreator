import React from "react";
import { Text, View, TextInput } from "react-native";
import Dropdown from "../components/dropdown";

const HomePage = () => {
  const data = [
    { label: "wizard", value: 1 },
    { label: "fighter", value: 2 },
    { label: "rogue", value: 3 },
  ];

  const handleSelect = (item) => {
    console.log("Selected Item", item);
  };

  return (
    <View className="flex items-center justify-center">
      <Text className="pb-10 pt-10">Home Page</Text>
      <Text>Enter Name:</Text>
      <TextInput
        placeholder="Your Character Name"
        className="border-2 border-inherit p-2 m-2 w-48"
      />
      <Dropdown data={data} onSelect={handleSelect} />
    </View>
  );
};

export default HomePage;
