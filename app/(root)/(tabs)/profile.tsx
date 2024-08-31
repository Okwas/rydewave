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
        <View className="flex px-5 justify-center items-center my-5">
          <Image
            src={user?.externalAccounts[0]?.imageUrl ?? user?.imageUrl}
            className="w-24 h-24 rounded-full"
          ></Image>
        </View>
        <View className="bg-white flex flex-col items-start justify-center rounded-lg shadow-sm px-5 py-3">
          <View className="flex flex-col items-start justify-start w-full">
            <InputField
              label="First name"
              placeholder={user?.firstName || "Not Found"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Last name"
              placeholder={user?.lastName || "Not Found"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Email"
              placeholder={
                user?.primaryEmailAddress?.emailAddress || "Not Found"
              }
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />

            <InputField
              label="Phone"
              placeholder={user?.primaryPhoneNumber?.phoneNumber || "Not Found"}
              containerStyle="w-full"
              inputStyle="p-3.5"
              editable={false}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
