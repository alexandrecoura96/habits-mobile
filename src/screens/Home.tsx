import React from "react";
import { Text, View } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];

export function Home() {
  return (
    <View className="flex-1 bg-black px-8 pt-16">
      <Header />
      <View className="flex-row mt-6 mb-2">
        {weekDays.map((item, index) => {
          return (
            <Text
              key={`${item} + ${index}`}
              className="text-zinc-400 text-xl font-bold text-center mx-1"
              style={{ width: DAY_SIZE, height: DAY_SIZE }}
            >
              {item}
            </Text>
          );
        })}
      </View>
      <HabitDay />
    </View>
  );
}
