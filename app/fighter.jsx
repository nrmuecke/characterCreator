import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

const Wizard = () => {
  return (
    <View className="flex items-center justify-center pt-10">
      <Text>Fighter</Text>
      <Text className="ml-5 mr-5 pt-10">
        The fighter epitomizes the archetype of the warrior, excelling in
        physical combat with unparalleled mastery over weapons and armor.
        Fighters are versatile and resilient combatants, capable of wielding any
        weapon or donning any armor to suit the needs of battle. Their training
        grants them access to a variety of martial techniques and special
        abilities, such as the power to deliver devastating strikes or withstand
        punishing blows.
      </Text>
      <Pressable
        className="mb-10 mt-10 bg-blue-600 w-56 h-24 flex items-center justify-center mx-auto rounded-full border-[2px]"
        onPress={() => router.push("/")}
      >
        <Text className="text-white">Home</Text>
      </Pressable>
    </View>
  );
};

export default Wizard;
