import { Text, View, Image, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "@clerk/clerk-expo";
import { useEffect } from "react";
import ProfileInfoCard from "@/components/ProfileInfoCard";
import InputField from "@/components/InputField";
import { icons } from "@/constants";

const Profile = () => {
  const { user } = useUser();

  useEffect(() => {
    console.log(user);
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView
        className="px-5"
        contentContainerStyle={{ paddingBottom: 120 }}
      >
        <Text className="text-2xl font-JakartaBold my-5">Your profile</Text>
        <View className="flex px-5 justify-center items-center ">
          <Image
            src={user?.imageUrl}
            className="w-24 h-24 rounded-full"
          ></Image>
        </View>
        <View className="">
          <InputField
            label="First name"
            placeholder={user?.firstName || "not found"}
            labelStyle={"text-sm"}
            inputStyle="p-3.5"
            editable={false}
            containerStyle="w-full"
          />

          <InputField
            label="Last name"
            placeholder="Enter name"
            labelStyle={"text-sm"}
            inputStyle="p-3.5"
            editable={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
