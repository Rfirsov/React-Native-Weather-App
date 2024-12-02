import { getDayOfWeek } from "./dates";

export const getWeatherForecastData = (daily) => {
  let daysData = [];
  let tempData = [];

  daily.forEach((e, index) => {
    if (index >= 1) {
      const dayOfWeek = getDayOfWeek(e.dt);
      const tempDayOfWeek = e.temp.day;

      daysData.push(dayOfWeek);
      tempData.push(tempDayOfWeek);
    }
  });

  return { daysData, tempData };
}