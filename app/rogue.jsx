import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

const Wizard = () => {
  return (
    <View className="flex items-center justify-center pt-10">
      <Text>Rogue</Text>
      <Text className="ml-5 mr-5 pt-10">
        The quintessential master of stealth, cunning, and versatility, thriving
        in roles that require finesse and guile. Rogues excel at sneaking,
        thievery, disabling traps, and delivering precise attacks rather than
        brute force. With a keen eye for detail and a knack for finding the weak
        spots in any defense, rogues can strike silently and effectively, often
        surprising their foes with critical hits when they least expect it.
        Dexterity is their primary attribute, enhancing their agility, stealth
        abilities, and ranged attacks.
      </Text>
      <Pressable
        className="mb-10 mt-10 bg-blue-600 w-56 h-24 flex items-center justify-center mx-auto rounded-full border-[2px]"
        onPress={() => router.push("/")}
      >
        <Text className="text-white">Go to Home</Text>
      </Pressable>
    </View>
  );
};

export default Wizard;
