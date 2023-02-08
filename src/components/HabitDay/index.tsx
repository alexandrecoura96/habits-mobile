import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { Dimensions } from "react-native";
import { generateProgressPercentage } from "../../utils/generate-progress-percentage";
import clsx from "clsx";
import dayjs from "dayjs";

const WEEK_DAYS = 7;
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5;
export const DAY_MARGIN_BETWEEN = 8;
export const DAY_SIZE =
  Dimensions.get("screen").width / WEEK_DAYS - (SCREEN_HORIZONTAL_PADDING + 5);

interface IHabitDay extends TouchableOpacityProps {
  ammountOfHabits?: number;
  ammountCompleted?: number;
  date: Date;
}

export function HabitDay({
  date,
  ammountCompleted = 0,
  ammountOfHabits = 0,
  ...props
}: IHabitDay) {
  const ammountAccomplishedPercentage =
    ammountOfHabits > 0
      ? generateProgressPercentage(ammountOfHabits, ammountCompleted)
      : 0;
  const today = dayjs().startOf("day").toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  return (
    <TouchableOpacity
      className={clsx("rounded-lg border-2 m-1", {
        ["bg-zinc-900 border-zinc-800"]: ammountAccomplishedPercentage === 0,
        ["bg-violet-900 border-violet-500"]:
          ammountAccomplishedPercentage > 0 &&
          ammountAccomplishedPercentage < 20,
        ["bg-violet-800 border-violet-500"]:
          ammountAccomplishedPercentage >= 20 &&
          ammountAccomplishedPercentage < 40,
        ["bg-violet-700 border-violet-500"]:
          ammountAccomplishedPercentage >= 40 &&
          ammountAccomplishedPercentage < 60,
        ["bg-violet-600 border-violet-500"]:
          ammountAccomplishedPercentage >= 60 &&
          ammountAccomplishedPercentage < 80,
        ["bg-violet-500 border-violet-400"]:
          ammountAccomplishedPercentage >= 80,
        ["border-white border-4"]: isCurrentDay,
      })}
      activeOpacity={0.7}
      style={{ width: DAY_SIZE, height: DAY_SIZE }}
      {...props}
    />
  );
}
