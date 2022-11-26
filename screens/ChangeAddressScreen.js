import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { EvilIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ChangeAddressScreen = () => {
    const navigation = useNavigation();

    return (
        <View className="absolute bottom-0 h-72 w-full flex-1 ">
            <View className="bg-gray-100 rounded-t-3xl h-full pt-2">
                {/* Location */}
                <View>
                    <Text className="font-bold text-lg p-4">Your Location</Text>
                    <View className="flex-row p-4 items-center bg-white">
                        <View className="py-2 pr-4">
                            <EvilIcons name="location" size={30} color="black" />
                        </View>
                        <Text className="flex-wrap w-60">Your location is what you are located at and it is now what you will be located at</Text>
                        <TouchableOpacity className="p-4"
                            onPress={() => navigation.navigate("AddAddress")}>
                            <Text className="text-[#7cc464]">Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {/* Time */}
                <View>
                    <Text className="font-bold text-lg p-4">Pick up Time</Text>
                    <View className="flex-row px-4 items-center bg-white">
                        <View className="py-2 pl-2 pr-4">
                            <Ionicons name="time-outline" size={24} color="black" />
                        </View>
                        <Text className="flex-wrap w-60">Now</Text>
                        <TouchableOpacity className="p-4">
                            <Text className="text-[#7cc464]">Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ChangeAddressScreen