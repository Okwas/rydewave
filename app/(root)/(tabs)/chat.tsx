import { Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "@/constants";
import { useAuth } from "@clerk/clerk-expo";
import { router } from "expo-router";

const Chat = () => {
  const { signOut } = useAuth();

  const handleSignOut = () => {
    signOut();
    router.replace("/(auth)/sign-in");
  };

  return (
    <SafeAreaView className="flex flex-1 p-5">
      <View className="flex justify-between flex-row w-full items-center">
        <Text className="font-JakartaBold text-3xl">Chat list</Text>
        <TouchableOpacity
          onPress={handleSignOut}
          className="justify-center items-center w-10 h-10 rounded-full bg-white"
        >
          <Image source={icons.out} className="w-4 h-4" />
        </TouchableOpacity>
      </View>

      <View className="flex items-center justify-center flex-1">
        <Image
          source={images.message}
          className="w-full h-40"
          resizeMode="contain"
        ></Image>
        <Text className="font-JakartaBold text-3xl mt-2">No messages yet</Text>
        <Text className="text-base py-3 px-7">
          No messages in your inbox, yet!
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
