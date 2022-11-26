import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  UserIcon,
  ChevronDownIcon,
  GiftIcon,
} from "react-native-heroicons/outline";
import { ArrowRightCircleIcon, MapPinIcon } from "react-native-heroicons/solid";
import Contributor from "../components/Contributor";
import UpdatesRow from "../components/UpdatesRow";
import ButtonsHome from "../components/ButtonsHome";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectHistoryPointsTotal } from "../features/historySlice";
import client from "../sanity";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [newstype, setNewsType] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
*[_type == "newstype"]{
  ...,
}
  `
      )
      .then((data) => {
        setNewsType(data);
      });
  }, []);

  //redux
  const totalHistoryPoints = useSelector(selectHistoryPointsTotal);

  return (
    <View className="mb-40">
      <View className="bg-[#7cc464] pt-12 flex-row pb-3 items-center space-x-2 px-4">
        <Image
          source={{
            uri: "https://tunza.eco-generation.org/file/e-waste%20recycling%20logo.jpg",
          }}
          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-white text-2xl mr-2">eCycle</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("UserProfile")}>
          <UserIcon size={30} color="#ffffff" />
        </TouchableOpacity>
      </View>
      {/* Pick Up */}
      <TouchableOpacity className="bg-white mx-5 my-2 p-2 rounded-3xl"
        onPress={() => navigation.navigate("ChangeAddress")}>
        <View className="flex-row items-center space-x-2 px-2">
          <MapPinIcon color="black" opacity={0.4} size={22} />
          <View className="flex-1">
            <Text className="text-xs">Pick Up From:</Text>
            <Text className=" text-md mr-2">Zayed University, Abu Dhabi</Text>
          </View>
          <View>
            <ChevronDownIcon size={25} color="#7cc464" />
          </View>
        </View>
      </TouchableOpacity>

      {/* Body */}
      <ScrollView>
        {/* Categories */}
        <Contributor />

        {/* Points */}
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Rewards");
          }}
          className="bg-white mx-10 mt-3 rounded-2xl"
        >
          <View className="p-3 flex-row items-center justify-center space-x-2 rounded-2xl">
            <View className="bg-gray-100 rounded-full p-3">
              <GiftIcon size={50} color="#7cc464" />
            </View>
            <View>
              <Text className="font-bold text-2xl">
                {totalHistoryPoints} points!
              </Text>
              <Text className=" text-gray-500 text-xs">
                See what you can do with you points
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        {/* 3 Bottons */}
        <View className="bg-white mx-6 my-3 pb-4 rounded-2xl">
          <ButtonsHome
            img="https://cdn-icons-png.flaticon.com/512/3427/3427863.png"
            title="Recycle"
          />
          <ButtonsHome
            img="https://cdn-icons-png.flaticon.com/512/4275/4275122.png"
            title="Repair"
          />
          <ButtonsHome
            img="https://cdn-icons-png.flaticon.com/512/3038/3038243.png"
            title="Donate"
          />
        </View>
        {/* Updates Row */}
        {newstype.map((data) => (
          <UpdatesRow
            key={data._id}
            id={data._id}
            title={data.newstype}
            description={data.description}
          />
        ))}
      </ScrollView>
    </View>

  );
};

export default HomeScreen;
