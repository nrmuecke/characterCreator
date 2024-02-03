import { Pressable, Text, View } from "react-native";
import { router } from "expo-router";

const HomePage = () => {
  return (
    <View className="flex items-center justify-center">
      <Text className="pb-10 pt-10">Home Page</Text>
      <Pressable
        className="mb-10 mt-10 bg-blue-600 w-56 h-24 flex items-center justify-center mx-auto rounded-full border-[2px]"
        onPress={() => router.push("/wizard")}
      >
        <Text className="text-white">Go to Wizard</Text>
      </Pressable>
      <Pressable
        className="mb-10 mt-10 bg-blue-600 w-56 h-24 flex items-center justify-center mx-auto rounded-full border-[2px]"
        onPress={() => router.push("/fighter")}
      >
        <Text className="text-white">Go to Fighter</Text>
      </Pressable>
      <Pressable
        className="mb-10 mt-10 bg-blue-600 w-56 h-24 flex items-center justify-center mx-auto rounded-full border-[2px]"
        onPress={() => router.push("/rogue")}
      >
        <Text className="text-white">Go to Rogue</Text>
      </Pressable>
    </View>
  );
};

export default HomePage;
