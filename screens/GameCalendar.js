import { View } from "react-native";
import { Calendar } from "react-native-big-calendar";
import Header from "../components/Header";
import dayjs from "dayjs";
const events = [
  {
    title: "세키로 어쩌구저쩌구 머시기",
    start: dayjs("2024-02-4").set("hour", 10).set("minute", 0).toDate(),
    end: dayjs("2024-02-4").set("hour", 10).set("minute", 30).toDate(),
  },
  {
    title: "철권8",
    start: dayjs("2024-02-5").toDate(),
    end: dayjs("2024-02-5").toDate(),
  },
];

function GameCalendar() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <Header />
      </View>
      <View style={{ flex: 13 }}>
        <Calendar
          events={events}
          height={600}
          mode={"month"}
          showAdjacentMonths={false}
        />
      </View>
    </View>
  );
}

export default GameCalendar;
