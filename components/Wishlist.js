import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  ChevronDownIcon,
  HeartIcon,
  ShoppingCartIcon,
  TrashIcon,
} from "react-native-heroicons/outline";

const Wishlist = ({ brand, name, description, price, imgUrl }) => {
  return (
    <View>
      <View className="bg-white border-t-2 border-gray-300">
        <View className="flex-row">
          <Image
            source={{
              uri: imgUrl,
            }}
            className="h-24 w-24 self-center bg-gray-300 p-4 ml-6 rounded-full"
          />
          <View className="flex flex-1 px-8 py-4">
            <Text className="text-xs text-gray-600">{brand}</Text>
            <Text className="font-bold text-lg">{name}</Text>
            <Text className="text-sm">{description}</Text>
            <Text className="text-lg text-black">{price} AED</Text>
          </View>
        </View>
        <View>
          <View className="flex-row justify-center">
            <TouchableOpacity className="flex-row px-2 border rounded-xl mb-3 ml-6 items-center">
              <TrashIcon size={20} color="#5cab44" />
              <Text className="p-1">delete</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row px-2 border rounded-xl mb-3 ml-6 items-center">
              <ShoppingCartIcon size={20} color="#5cab44" />
              <Text className="p-1">move to cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Wishlist;
