import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  ArrowRightIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import SearchFilter from "../components/SearchFilter";
import DevicesColumn from "../components/DevicesColumn";
import SearchFilterCard from "../components/SearchFilterCards";
import client from "../sanity";

const ActionScreen = () => {
  const navigation = useNavigation();
  const [selector, setSelector] = useState("All");
  const [searchText, setSearchText] = useState("")

  const [items, setitems] = useState([
    { key: "1", type: "All", color: "white" },
    { key: "2", type: "Accessories", color: "white" },
    { key: "3", type: "Kitchen Appliances", color: "white" },
    { key: "4", type: "Smart Devices", color: "white" },
    { key: "5", type: "Home Electronics", color: "white" },
    { key: "6", type: " Kids Toy", color: "white" },
  ]);
  const [electronics, setelectronics] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `
  *[_type == "electronics"]{
    _id,
    estimatedPoint,
    image,
    name,
    short_description,
    genre->{
    genre
  }
  }
  `
      )
      .then((data) => {
        setelectronics(data);
      });
  }, [searchText]);

  function fetchAll() {

  }

  function hundleFetch() {
    if (selector == "All") {
      return (electronics
        .map((electronic) => (
          <View key={electronic._id}>
            <DevicesColumn
              id={electronic._id}
              imgUrl={electronic.image.asset._ref}
              title={electronic.name}
              genre={electronic.genre.genre}
              short_description={electronic.short_description}
              estimatedPoint={electronic.estimatedPoint}
            />
          </View>
        )))
    }
    else {
      return (electronics
        .filter((electronic) => electronic.genre.genre == selector)
        .map((electronic) => (
          <View key={electronic._id}>
            <DevicesColumn
              id={electronic._id}
              imgUrl={electronic.image.asset._ref}
              title={electronic.name}
              genre={electronic.genre.genre}
              short_description={electronic.short_description}
              estimatedPoint={electronic.estimatedPoint}
            />
          </View>
        )))
    }
  }




  function hundlePress(item) {
    setSelector(item.type);
    (item) => {
      setitems({ ...prevValue, [item.color]: "green" });
    };
  }

  return (
    <>
      <View className="mb-40 pb-16">
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
          <UserIcon size={30} color="#ffffff" />
        </View>

        {/* Search */}
        <View className="bg-white flex-row space-x-2 items-center py-2 px-4 ">
          <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3 rounded-xl">
            <MagnifyingGlassIcon size={20} color="#7cc464" />
            <TextInput
              placeholder="Search Any Electronic Items ..."
              keyboardType="default"
              value={searchText}
              onChange={(e) => {
                setSearchText(e);
                electronics
                  .filter((electronic) => electronic.name == e)
                  .map((electronic) => (
                    <View key={electronic._id}>
                      <DevicesColumn
                        id={electronic._id}
                        imgUrl={electronic.image.asset._ref}
                        title={electronic.name}
                        genre={electronic.genre.genre}
                        short_description={electronic.short_description}
                        estimatedPoint={electronic.estimatedPoint}
                      />
                    </View>
                  ))
              }}
            />
          </View>
        </View>

        {/* Body */}

        <SafeAreaView>
          <ScrollView
            contentContainerStyle={{
              paddingHorizontal: 15,
              paddingTop: 10,
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
          >
            <View className="flex-row">
              {items.map((item) => (
                <TouchableOpacity
                  key={item.key}
                  onPress={() => hundlePress(item)}
                >
                  <SearchFilterCard
                    id={item.key}
                    title={item.type}
                    color={item.color}
                    selector={selector}
                  />
                </TouchableOpacity>
              ))}
            </View>
          </ScrollView>
        </SafeAreaView>

        <ScrollView>
          <View className="flex-row items-center justify-between mt-1 px-4">
            <Text className="font-bold text-lg">Popular Devices</Text>
          </View>
          {hundleFetch()}
        </ScrollView>
      </View>
    </>
  );
};

export default ActionScreen;
