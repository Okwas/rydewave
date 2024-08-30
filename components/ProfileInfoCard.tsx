import {
  TextInput,
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from "react-native";

import { ProfileInfoCardProps } from "@/types/type";

const ProfileInfoCard = ({
  title,
  displayElement,
  className,
  ...props
}: ProfileInfoCardProps) => {
  return <View className="my-2 w-full">{displayElement}</View>;
};

export default ProfileInfoCard;
