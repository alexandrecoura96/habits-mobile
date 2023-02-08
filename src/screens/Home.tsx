import React, { useEffect, useState } from "react";
import { Text, View, ScrollView, Alert } from "react-native";
import { HabitDay, DAY_SIZE } from "../components/HabitDay";
import { Header } from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import { generateDatesFromYearBeginning } from "../utils/generate-dates-from-year-beginning";
import { api } from "../lib/axios";
import { Loading } from "../components/Loading";
import dayjs from "dayjs";

const weekDays = ["D", "S", "T", "Q", "Q", "S", "S"];
const datesFromYearStart = generateDatesFromYearBeginning();
const minimumSummaryDatesSizes = 18 * 5;
const ammountOfDaysToFill =
  minimumSummaryDatesSizes - datesFromYearStart.length;

type SummaryProps = Array<{
  id: string;
  date: string;
  ammount: number;
  completed: number;
}>;

export function Home() {
  const [loading, setLoading] = useState(true);
  const [summary, setSummary] = useState<SummaryProps | null>(null);
  const { navigate } = useNavigation();

  async function fetchData() {
    try {
      setLoading(true);
      const response = await api.get("/summary");
      console.log(response.data);
      setSummary(response.data);
    } catch (error) {
      Alert.alert("Ops", "Não foi possível carregar a informação");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
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
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        {summary && (
          <View className="flex-row flex-wrap">
            {datesFromYearStart.map((date) => {
              const dayWithHabits = summary.find((day) => {
                return dayjs(date).isSame(day.date, "day");
              });

              return (
                <HabitDay
                  key={date.toString()}
                  date={date}
                  ammountOfHabits={dayWithHabits?.ammount}
                  ammountCompleted={dayWithHabits?.completed}
                  onPress={() =>
                    navigate("Habit", { date: date.toISOString() })
                  }
                />
              );
            })}
            {ammountOfDaysToFill > 0 &&
              Array.from({
                length: ammountOfDaysToFill,
              }).map((_, index) => (
                <View
                  key={index}
                  className="bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40"
                  style={{ width: DAY_SIZE, height: DAY_SIZE }}
                />
              ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}
