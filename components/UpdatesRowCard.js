import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { CalendarDaysIcon, MapPinIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

const UpdatesRowCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  long,
  lat,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Updates", {
          id,
          imgUrl,
          title,
          rating,
          genre,
          address,
          short_description,
          long,
          lat,
        });
      }}
      className="bg-white mr-3 h-80 w-96 shadow-md"
    >
      <View style={{ backgroundColor: "white", elevation: 2 }}>
        <Image
          source={{
            uri: imgUrl,
          }}
          className="h-56 w-96 rounded-sm"
        />
        <View className="px-3">
          <Text className="font-bold text-lg pt-2">{title}</Text>
        </View>
        <View className="flex-row items-center space-x-1 px-3 pb-1">
          <CalendarDaysIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-gray-500">
            <Text>{rating}</Text> - {genre}
          </Text>
        </View>

        <View className="flex-row items-center space-x-1 px-3 pb-5">
          <MapPinIcon color="black" opacity={0.4} size={22} />
          <Text className="text-xs text-gray-500">{address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default UpdatesRowCard;