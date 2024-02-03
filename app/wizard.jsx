import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

const Wizard = () => {
  return (
    <View className="flex items-center justify-center pt-10">
      <Text>Wizard</Text>
      <Text className="ml-5 mr-5 pt-10">
        A formidable practitioner of arcane magic, drawing on the very fabric of
        the universe to manipulate reality to their will. Wizards are scholars
        of the mystical, dedicating years to studying spellbooks and honing
        their magical abilities. They are characterized by their extensive
        knowledge of spells, which they must prepare daily from their spellbook,
        a collection of discovered or transcribed magical formulas. This
        preparation reflects a wizard's foresight and strategic thinking,
        allowing them to adapt to various challenges.
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
