import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import DashboardItems from "../components/DashboardItems";

const UserProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View className="bg-[#7cc464] pt-12 flex-row pb-3 items-center space-x-2 px-4">
        <Image
          source={{
            uri: "https://tunza.eco-generation.org/file/e-waste%20recycling%20logo.jpg",
          }}
          className="h-10 w-10 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold  text-white text-2xl mr-2">eCycle</Text>
        </View>
      </View>
      {/* User Information */}
      <View className="flex-row justify-items-stretch px-12 mt-6">
        <View className="w-28 h-28 bg-slate-400 rounded-md">
          <Image
            source={{
              uri: "https://cdn1.iconfinder.com/data/icons/bokbokstars-121-classic-stock-icons-1/512/person-man.png",
            }}
            className="h-28 w-28 bg-gray-300 p-4 rounded-md"
          />
        </View>
        <View className="flex-1 p-3 justify-center">
          <Text className="text-lg font-bold">Ahmed Saleh</Text>
          <Text className="text-sm">ahmedsaleh@gmail.com</Text>
          <Text className="text-sm">Environmental hero</Text>
        </View>
      </View>

      {/* Dashboard */}
      <View className="flex-row w-92 h-20 rounded-3xl bg-[#7cc464] mt-8 mb-4 mx-8 justify-evenly items-center">
        <DashboardItems id={123} title="Points" value={876} />
        <DashboardItems id={123} title="Wallet" value={876} />
        <DashboardItems id={123} title="Voucher" value={876} />
      </View>

      {/* Details Area */}
      <Text className="text-xl font-medium self-center mt-2">
        Personal Details
      </Text>
      <View className="rounded-xl mx-6 my-3 bg-white">
        <View className="w-96 pb-4 px-4 self-center flex"></View>
        <View className="pt-1 px-4">
          <Text className="">First Name</Text>
          <TextInput className="w-full h-8 border-b" />
        </View>
        <View className="pt-1 px-4">
          <Text className="pt-4">Last Name</Text>
          <TextInput className="w-full h-8 border-b" />
        </View>
        <View className="pt-1 px-4">
          <Text className="pt-4">Email Address</Text>
          <TextInput className="w-full h-8 border-b" />
        </View>
        <View className="pt-1 px-4">
          <Text className="pt-4">Address</Text>
          <TextInput className="w-full h-8 border-b" />
        </View>
        <TouchableOpacity className="self-center mx-4 mt-4 mb-4 px-8 py-3 rounded-xl bg-[#7cc464]">
          <Text className="text-base">Update</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default UserProfileScreen;
